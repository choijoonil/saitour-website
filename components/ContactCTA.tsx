"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF } from "@/constants/site";

type ContactFormErrors = Partial<Record<"name" | "phone" | "message" | "privacy", string>>;
type SubmitState = "idle" | "submitting" | "success" | "error";

const contactInfo = [
  {
    label: "회사명",
    value: "사이투어"
  },
  {
    label: "전화",
    value: CONTACT_PHONE_DISPLAY,
    href: CONTACT_PHONE_HREF
  },
  {
    label: "이메일",
    value: CONTACT_EMAIL
  },
  {
    label: "주소",
    value: "서울시 강서구 마곡중앙로 161-17, 712호"
  }
];

const inquiryTypes = ["공항픽업", "서울 시티투어", "DMZ 투어", "프라이빗 투어", "기업행사", "가이드 서비스", "기타"];

function validateContactForm(formData: FormData) {
  const errors: ContactFormErrors = {};
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const privacy = formData.get("privacy") === "on";

  if (!name) {
    errors.name = "이름을 입력해주세요.";
  }

  if (!phone) {
    errors.phone = "연락처를 입력해주세요.";
  }

  if (!message) {
    errors.message = "문의 내용을 입력해주세요.";
  }

  if (!privacy) {
    errors.privacy = "개인정보 수집 및 이용에 동의해주세요.";
  }

  return errors;
}

export default function ContactCTA() {
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors = validateContactForm(formData);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState("idle");
      return;
    }

    setSubmitState("submitting");

    const payload = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      type: String(formData.get("type") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      privacy: formData.get("privacy") === "on",
      website: String(formData.get("website") || "")
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      form.reset();
      setErrors({});
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <section id="contact" className="section-y scroll-mt-24 bg-paper">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="eyebrow">CONTACT</p>
          <h2 className="mt-4 text-3xl font-bold tracking-normal text-navy sm:text-4xl">여행 문의하기</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            외국인 한국여행부터 기업행사까지 문의를 남겨주시면
            <br className="hidden sm:block" />
            고객의 목적에 맞는 맞춤형 서비스를 정확하게 안내해드립니다.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="card sm:p-8">
              <h3 className="text-2xl font-bold text-navy">문의 정보</h3>
              <dl className="mt-6 space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="border-b border-slate-100 pb-5 last:border-b-0 last:pb-0">
                    <dt className="text-sm font-semibold text-slate-500">{item.label}</dt>
                    <dd className="mt-1 text-lg font-bold text-navy">
                      {item.href ? (
                        <a href={item.href} className="transition hover:text-mint">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
                <div className="border-b border-slate-100 pb-5 last:border-b-0 last:pb-0">
                  <dt className="text-sm font-semibold text-slate-500">카카오 상담</dt>
                  <dd className="mt-1 text-lg font-bold text-navy">
                    우측 하단 카카오 상담 버튼 이용
                  </dd>
                </div>
              </dl>
            </div>

            <div className="card min-h-[220px] overflow-hidden sm:p-8">
              <div className="flex h-full min-h-[180px] flex-col justify-between rounded-2xl border border-dashed border-mint/35 bg-white p-6">
                <div>
                  <p className="text-sm font-bold text-mint">MAP</p>
                  <h3 className="mt-3 text-xl font-bold text-navy">오시는 길</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    서울시 강서구 마곡중앙로 161-17, 712호
                  </p>
                </div>
                <p className="mt-8 text-xs font-semibold text-slate-400">
                  마곡나루역 인근에 위치해 있습니다. 방문 상담은 사전 연락 후 안내드립니다.
                </p>
              </div>
            </div>
          </div>

          <form className="card sm:p-8" noValidate onSubmit={handleSubmit}>
            <h3 className="text-2xl font-bold text-navy">간단 문의 폼</h3>
            <input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-slate-600">이름</span>
                <input
                  name="name"
                  className={`mt-2 min-h-12 w-full rounded-xl border bg-white px-4 text-sm text-navy outline-none transition focus:border-mint focus:ring-2 focus:ring-mint/20 ${
                    errors.name ? "border-brand-error" : "border-slate-200"
                  }`}
                  placeholder="이름을 입력해주세요"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name ? <p className="mt-2 text-xs font-semibold text-brand-error">{errors.name}</p> : null}
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-600">연락처</span>
                <input
                  name="phone"
                  className={`mt-2 min-h-12 w-full rounded-xl border bg-white px-4 text-sm text-navy outline-none transition focus:border-mint focus:ring-2 focus:ring-mint/20 ${
                    errors.phone ? "border-brand-error" : "border-slate-200"
                  }`}
                  placeholder="연락 가능한 번호"
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone ? <p className="mt-2 text-xs font-semibold text-brand-error">{errors.phone}</p> : null}
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-slate-600">이메일</span>
                <input
                  name="email"
                  type="email"
                  className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-navy outline-none transition focus:border-mint focus:ring-2 focus:ring-mint/20"
                  placeholder="이메일 주소"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-slate-600">문의 유형</span>
                <select
                  name="type"
                  defaultValue=""
                  className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-navy outline-none transition focus:border-mint focus:ring-2 focus:ring-mint/20"
                >
                  <option value="">문의 유형 선택</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-slate-600">문의 내용</span>
                <textarea
                  name="message"
                  rows={6}
                  className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm leading-6 text-navy outline-none transition focus:border-mint focus:ring-2 focus:ring-mint/20 ${
                    errors.message ? "border-brand-error" : "border-slate-200"
                  }`}
                  placeholder="일정, 인원, 목적, 희망 서비스를 간단히 남겨주세요"
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message ? <p className="mt-2 text-xs font-semibold text-brand-error">{errors.message}</p> : null}
              </label>
            </div>

            <label className="mt-5 flex gap-3 rounded-2xl bg-paper p-4 text-sm leading-6 text-slate-600">
              <input
                name="privacy"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300 text-mint focus:ring-mint"
                aria-invalid={Boolean(errors.privacy)}
              />
              <span>
                문의 응대를 위해 이름, 연락처, 문의 내용을 수집하며 상담 목적 외에는 사용하지 않습니다.
              </span>
            </label>
            {errors.privacy ? <p className="mt-2 text-xs font-semibold text-brand-error">{errors.privacy}</p> : null}

            {submitState === "success" ? (
              <p className="mt-5 rounded-2xl bg-brand-surface p-4 text-sm font-semibold text-brand-primary">
                문의가 접수되었습니다. 확인 후 빠르게 연락드리겠습니다.
              </p>
            ) : null}

            {submitState === "error" ? (
              <p className="mt-5 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-brand-error">
                전송 중 오류가 발생했습니다. 카카오 상담 또는 전화로 문의해주세요.
              </p>
            ) : null}

            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto" disabled={submitState === "submitting"}>
              {submitState === "submitting" ? "전송 중..." : "문의 보내기"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
