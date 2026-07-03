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
    return jsonError("Email service is not configured", 500);
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
      return jsonError("Failed to send email", 502);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return jsonError("Failed to send email", 502);
  }
}
