import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  type?: string;
  message?: string;
  privacy?: boolean;
  website?: string;
};

const requestHistory = new Map<string, number>();
const RATE_LIMIT_MS = 15_000;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
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
  const phone = clean(payload.phone);
  const email = clean(payload.email);
  const type = clean(payload.type) || "일반문의";
  const message = clean(payload.message);
  const privacy = payload.privacy === true;
  const honeypot = clean(payload.website);

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !phone || !message || !privacy) {
    return jsonError("Required fields are missing");
  }

  if (message.length < 5) {
    return jsonError("Message is too short");
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
      replyTo: email || undefined
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
