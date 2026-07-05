"use client";

import type { FormEvent } from "react";
import { useRef, useState } from "react";

type ContactFormErrors = Partial<Record<"name" | "phone" | "email" | "message" | "privacy", string>>;
type SubmitState = "idle" | "submitting" | "success" | "error";
type ContactFormPayload = {
  name: string;
  phone: string;
  email: string;
  type: string;
  message: string;
  privacy: boolean;
};

const inquiryTypes = ["DMZ 투어", "서울 시티투어", "공항픽업", "기업행사", "맞춤여행", "가이드 문의", "일반문의"];
const officeAddress = "서울시 강서구 마곡중앙로 161-17, 712호";
const naverMapUrl = "https://map.naver.com/p/search/사이투어";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+\-\s()]+$/;

function getFormString(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

function getContactFormPayload(form: HTMLFormElement): ContactFormPayload {
  const formData = new FormData(form);
  const privacyInput = form.elements.namedItem("privacy");

  return {
    name: getFormString(formData, "name"),
    phone: getFormString(formData, "phone"),
    email: getFormString(formData, "email"),
    type: getFormString(formData, "type"),
    message: getFormString(formData, "message"),
    privacy: privacyInput instanceof HTMLInputElement ? privacyInput.checked === true : false
  };
}

function validateContactForm(payload: ContactFormPayload) {
  const errors: ContactFormErrors = {};
  const phoneDigitCount = (payload.phone.match(/\d/g) || []).length;

  if (!payload.name) {
    errors.name = "이름을 입력해주세요.";
  } else if (payload.name.length > 50) {
    errors.name = "이름은 50자 이하로 입력해주세요.";
  }

  if (!payload.phone) {
    errors.phone = "연락처를 입력해주세요.";
  } else if (payload.phone.length > 30) {
    errors.phone = "연락처는 30자 이하로 입력해주세요.";
  } else if (!phonePattern.test(payload.phone) || phoneDigitCount < 5) {
    errors.phone = "연락 가능한 번호를 입력해주세요.";
  }

  if (payload.email && !emailPattern.test(payload.email)) {
    errors.email = "올바른 이메일 주소를 입력해주세요.";
  }

  if (!payload.message) {
    errors.message = "문의 내용을 입력해주세요.";
  } else if (payload.message.length < 4) {
    errors.message = "문의 내용은 4글자 이상 입력해주세요.";
  } else if (payload.message.length > 2000) {
    errors.message = "문의 내용은 2,000자 이하로 입력해주세요.";
  }

  if (!payload.privacy) {
    errors.privacy = "개인정보 수집 및 이용에 동의해주세요.";
  }

  return errors;
}

export default function ContactCTA() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const submitContactForm = async (form: HTMLFormElement) => {
    const payload = getContactFormPayload(form);
    const nextErrors = validateContactForm(payload);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState("idle");
      return;
    }

    setSubmitState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: payload.name,
          phone: payload.phone,
          email: payload.email,
          type: payload.type,
          message: payload.message,
          privacy: payload.privacy
        })
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void submitContactForm(event.currentTarget);
  };

  const handleButtonClick = () => {
    if (!formRef.current || submitState === "submitting") {
      return;
    }

    void submitContactForm(formRef.current);
  };

  const handleFormChange = (event: FormEvent<HTMLFormElement>) => {
    if (submitState === "error") {
      setSubmitState("idle");
    }

    if (Object.keys(errors).length > 0) {
      setErrors(validateContactForm(getContactFormPayload(event.currentTarget)));
    }
  };

  return (
    <section id="contact" className="section-y scroll-mt-24 bg-paper">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="eyebrow">CONTACT</p>
          <h2 className="mt-4 text-3xl font-bold tracking-normal text-navy sm:text-4xl">여행 문의하기</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            궁금하신 내용을 남겨주시면
            <br className="hidden sm:block" />
            빠르게 확인 후 연락드리겠습니다.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="card h-full sm:p-8">
              <div className="rounded-2xl border border-dashed border-brand-blue/35 bg-white p-6">
                <p className="text-sm font-bold text-brand-blue">MAP</p>
                <h3 className="mt-3 text-2xl font-bold text-navy">오시는 길</h3>
                <div className="mt-6 space-y-6">
                  <div className="border-b border-slate-100 pb-5">
                    <p className="text-sm font-semibold text-slate-500">주소</p>
                    <p className="mt-2 text-lg font-bold leading-7 text-navy">{officeAddress}</p>
                  </div>
                  <div className="border-b border-slate-100 pb-5">
                    <p className="text-sm font-semibold text-slate-500">위치 안내</p>
                    <p className="mt-2 text-base leading-7 text-slate-600">
                      마곡나루역 인근에 위치해 있습니다.
                      <br />
                      방문 상담은 사전 예약 후 안내드립니다.
                    </p>
                    <p className="mt-3 text-xs font-semibold text-slate-400">마곡나루역 인근 · 방문 상담 사전 예약제</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500">상담 방식</p>
                    <p className="mt-2 text-base font-semibold leading-7 text-navy">
                      방문 상담 / 전화 상담 / 이메일 상담 가능
                    </p>
                  </div>
                </div>
                <a
                  href={naverMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex min-h-10 items-center justify-center rounded-full border border-brand-blue px-4 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                >
                  네이버지도 보기
                </a>
              </div>
            </div>
          </div>

          <form ref={formRef} className="card sm:p-8" noValidate onSubmit={handleSubmit} onChange={handleFormChange}>
            <h3 className="text-2xl font-bold text-navy">간단 문의</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-slate-600">이름</span>
                <input
                  name="name"
                  className={`mt-2 min-h-12 w-full rounded-xl border bg-white px-4 text-sm text-navy outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 ${
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
                  inputMode="tel"
                  className={`mt-2 min-h-12 w-full rounded-xl border bg-white px-4 text-sm text-navy outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 ${
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
                  className={`mt-2 min-h-12 w-full rounded-xl border bg-white px-4 text-sm text-navy outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 ${
                    errors.email ? "border-brand-error" : "border-slate-200"
                  }`}
                  placeholder="이메일 주소"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email ? <p className="mt-2 text-xs font-semibold text-brand-error">{errors.email}</p> : null}
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-slate-600">문의 유형</span>
                <select
                  name="type"
                  defaultValue=""
                  className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-navy outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
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
                  className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm leading-6 text-navy outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 ${
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
                className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue"
                aria-invalid={Boolean(errors.privacy)}
              />
              <span>
                문의 접수를 위해 이름, 연락처, 문의 내용을 수집하며 상담 목적 외에는 사용하지 않습니다.
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

            <button
              type="button"
              className="btn-primary mt-6 w-full sm:w-auto"
              disabled={submitState === "submitting"}
              onClick={handleButtonClick}
            >
              {submitState === "submitting" ? "전송 중..." : "문의 보내기"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
