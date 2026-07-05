import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: unknown;
  phone?: unknown;
  contact?: unknown;
  phoneNumber?: unknown;
  tel?: unknown;
  email?: unknown;
  type?: unknown;
  category?: unknown;
  inquiryType?: unknown;
  message?: unknown;
  content?: unknown;
  inquiry?: unknown;
  memo?: unknown;
  privacy?: unknown;
  agree?: unknown;
  privacyAgree?: unknown;
  agreement?: unknown;
  website?: unknown;
};

const requestHistory = new Map<string, number>();
const RATE_LIMIT_MS = 15_000;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+\-\s()]+$/;
const allowedInquiryTypes = new Set([
  "DMZ 투어",
  "서울 시티투어",
  "공항픽업",
  "기업행사",
  "맞춤여행",
  "가이드 문의",
  "일반문의"
]);

function stripDangerousHtml(value: string) {
  return value
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<\/?script\b[^>]*>/gi, "")
    .replace(/\son\w+\s*=\s*(["']).*?\1/gi, "")
    .replace(/\son\w+\s*=\s*[^\s>]+/gi, "");
}

function clean(value: unknown) {
  return typeof value === "string" ? stripDangerousHtml(value.trim()) : "";
}

function isConsentAccepted(value: unknown) {
  if (value === true) {
    return true;
  }

  return typeof value === "string" && ["true", "on", "1"].includes(value.toLowerCase());
}

function normalizeInquiryType(value: string) {
  return allowedInquiryTypes.has(value) ? value : "일반문의";
}

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  return forwardedFor?.split(",")[0]?.trim() || realIp || "unknown";
}

function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, message }, { status });
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  try {
    return JSON.stringify(error);
  } catch {
    return "Unknown error";
  }
}

function contactError(message: string, status: number, error?: unknown) {
  const errorMessage = error ? getErrorMessage(error) : undefined;
  const body =
    process.env.NODE_ENV === "production" || !errorMessage
      ? { ok: false, message }
      : { ok: false, message, error: errorMessage };

  return NextResponse.json(body, { status });
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return jsonError("Invalid JSON");
  }

  const name = clean(payload.name);
  const phone = clean(payload.phone) || clean(payload.contact) || clean(payload.phoneNumber) || clean(payload.tel);
  const email = clean(payload.email);
  const rawType = clean(payload.type) || clean(payload.category) || clean(payload.inquiryType);
  const type = normalizeInquiryType(rawType);
  const message = clean(payload.message) || clean(payload.content) || clean(payload.inquiry) || clean(payload.memo);
  const privacy =
    isConsentAccepted(payload.privacy) ||
    isConsentAccepted(payload.agree) ||
    isConsentAccepted(payload.privacyAgree) ||
    isConsentAccepted(payload.agreement);
  const honeypot = clean(payload.website);
  const phoneDigitCount = (phone.match(/\d/g) || []).length;
  const replyToEmail = email && emailPattern.test(email) ? email : undefined;

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !phone || !message || !privacy) {
    console.error("[contact] Missing required fields", {
      receivedPayload: payload,
      name,
      phone,
      message,
      privacy
    });
    return jsonError("Required fields are missing");
  }

  if (name.length > 50) {
    console.error("[contact] Name is too long", {
      receivedPayload: payload,
      nameLength: name.length
    });
    return jsonError("Name is too long");
  }

  if (phone.length > 30 || !phonePattern.test(phone) || phoneDigitCount < 5) {
    console.error("[contact] Invalid phone", {
      receivedPayload: payload,
      phone,
      phoneDigitCount
    });
    return jsonError("Invalid phone");
  }

  if (message.length < 4) {
    console.error("[contact] Message is too short", {
      receivedPayload: payload,
      message
    });
    return jsonError("Message is too short");
  }

  if (message.length > 2000) {
    console.error("[contact] Message is too long", {
      receivedPayload: payload,
      messageLength: message.length
    });
    return jsonError("Message is too long");
  }

  const clientKey = getClientKey(request);
  const now = Date.now();
  const lastRequestAt = requestHistory.get(clientKey) || 0;

  if (now - lastRequestAt < RATE_LIMIT_MS) {
    return jsonError("Too many requests", 429);
  }

  requestHistory.set(clientKey, now);

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "ceo@saitour.kr";
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    console.error("[contact] Email service is not configured", {
      hasResendApiKey: Boolean(resendApiKey),
      hasContactFromEmail: Boolean(fromEmail),
      toEmail
    });
    return contactError("Email service is not configured", 500, "Missing RESEND_API_KEY or CONTACT_FROM_EMAIL");
  }

  const receivedAt = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "full",
    timeStyle: "medium",
    timeZone: "Asia/Seoul"
  }).format(new Date());

  const subject = `[사이투어 홈페이지 문의] ${type} - ${name}`;
  const body = [
    `이름: ${name}`,
    `연락처: ${phone}`,
    `이메일: ${email || "미입력"}`,
    `문의유형: ${type}`,
    "",
    "문의내용:",
    message,
    "",
    `접수시간: ${receivedAt}`
  ].join("\n");

  try {
    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject,
      text: body,
      ...(replyToEmail ? { replyTo: replyToEmail } : {})
    });

    if (error) {
      console.error("[contact] Resend email send failed", {
        error,
        fromEmail,
        toEmail,
        subject
      });
      return contactError("Failed to send email", 502, error);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Unexpected contact email error", {
      error,
      fromEmail,
      toEmail,
      subject
    });
    return contactError("Failed to send email", 502, error);
  }
}
