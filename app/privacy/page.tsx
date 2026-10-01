import type { Metadata } from "next";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF } from "@/constants/site";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "사이투어의 개인정보 처리 목적, 수집 항목, 보유기간과 정보주체의 권리를 안내합니다.",
  alternates: { canonical: "/privacy" }
};

const sections = [
  {
    title: "1. 개인정보의 처리 목적",
    content: (
      <>
        <p>㈜사이투어는 다음 목적을 위해 개인정보를 처리합니다.</p>
        <ul>
          <li>여행 및 서비스 문의 접수</li>
          <li>상담 및 견적 안내</li>
          <li>여행 일정 및 서비스 관련 연락</li>
          <li>예약 및 여행 서비스 제공</li>
          <li>고객 문의 및 요청사항 처리</li>
        </ul>
        <p>처리 목적이 변경되는 경우에는 필요한 절차를 거쳐 안내하겠습니다.</p>
      </>
    )
  },
  {
    title: "2. 처리하는 개인정보 항목",
    content: (
      <>
        <p className="font-semibold text-navy">홈페이지 문의 단계</p>
        <ul>
          <li>필수항목: 이름, 연락처, 문의 내용</li>
          <li>선택항목: 이메일, 문의 유형</li>
        </ul>
        <p>고객이 문의 내용에 직접 작성한 정보도 문의 처리 과정에서 함께 처리될 수 있습니다.</p>
        <p>
          여행 예약 및 진행 단계에서는 서비스 수행에 필요한 경우 이용 일정, 인원, 항공편 정보, 숙박정보,
          여행 일정과 예약에 필요한 고객정보 등을 추가로 요청할 수 있습니다.
        </p>
      </>
    )
  },
  {
    title: "3. 개인정보의 보유 및 이용기간",
    content: (
      <>
        <p>홈페이지 문의정보는 문의 접수일로부터 1년간 보유합니다.</p>
        <p>
          처리 목적이 달성되거나 보유기간이 지난 개인정보는 지체 없이 파기합니다. 다만 관계 법령에 따라
          보존할 필요가 있는 경우에는 해당 법령에서 정한 기간 동안 보관할 수 있습니다.
        </p>
      </>
    )
  },
  {
    title: "4. 개인정보의 제3자 제공",
    content: (
      <>
        <p>
          ㈜사이투어는 해당 서비스의 예약 및 이행에 필요한 경우, 필요한 최소 범위에서 관련 서비스 제공자에게
          개인정보를 제공할 수 있습니다.
        </p>
        <ul>
          <li>제공 대상: 차량·운송 서비스 제공자, 가이드·통역 서비스 제공자, 호텔·숙박업체</li>
          <li>제공 대상: 현지 여행사·랜드사, 관광시설·공연·예약 서비스 제공자</li>
          <li>제공 목적: 예약, 배차, 고객 확인, 일정 진행, 숙박 및 관광 서비스 제공</li>
          <li>제공 항목: 이름, 연락처, 일정, 항공편 정보 등 해당 서비스 수행에 필요한 최소 정보</li>
        </ul>
        <p>관련 법령에 근거가 있거나 필요한 절차를 거친 경우를 제외하고 목적 범위를 넘어 제공하지 않습니다.</p>
      </>
    )
  },
  {
    title: "5. 개인정보 처리의 위탁 및 국외 이전",
    content: (
      <>
        <p>
          홈페이지 문의는 Resend 이메일 전송 서비스를 통해 ㈜사이투어의 상담용 이메일로 전달됩니다. 이
          과정에서 이메일 전송에 포함되는 정보가 미국에서 처리될 수 있습니다.
        </p>
        <dl className="grid gap-3 rounded-2xl bg-paper p-4 sm:grid-cols-[9rem_1fr] sm:p-5">
          <dt className="font-semibold text-navy">이전받는 자</dt>
          <dd className="[overflow-wrap:anywhere] [word-break:normal]">Plus Five Five, Inc. (Resend)</dd>
          <dt className="font-semibold text-navy">소재지</dt>
          <dd>미국(United States)</dd>
          <dt className="font-semibold text-navy">공식 DPA상 주소</dt>
          <dd className="[overflow-wrap:anywhere] [word-break:normal]">
            2261 Market Street #5039, San Francisco, CA 94114, United States
          </dd>
          <dt className="font-semibold text-navy">처리·저장 국가</dt>
          <dd>미국(United States)</dd>
          <dt className="font-semibold text-navy">이전 항목</dt>
          <dd>
            이름, 연락처, 이메일(입력한 경우), 문의 유형, 문의 내용 등 이메일 전송에 포함되는 정보와 전송
            과정에 필요한 메시지 내용 및 관련 메타데이터
          </dd>
          <dt className="font-semibold text-navy">이용 목적</dt>
          <dd>홈페이지 문의 내용을 ㈜사이투어 상담용 이메일로 전송</dd>
          <dt className="font-semibold text-navy">이전 시점</dt>
          <dd>고객이 홈페이지 문의를 제출할 때</dd>
          <dt className="font-semibold text-navy">이전 방법</dt>
          <dd>Resend API를 통한 전자적 전송</dd>
        </dl>
        <p>
          Resend 공식 정책상 일반 Free·Pro·Scale 플랜의 이메일 및 로그 데이터는 30일간 보관되며,
          Enterprise 플랜은 계약 조건에 따라 달라질 수 있습니다.
        </p>
        <p>
          위 보관기간은 Resend가 이메일 전송 서비스를 제공하는 과정에서 적용되는 정책에 관한 안내입니다.
          ㈜사이투어가 상담 및 문의 대응을 위해 홈페이지 문의정보를 문의 접수일로부터 1년간 보유하는 것과는
          별도로 구분됩니다.
        </p>
      </>
    )
  },
  {
    title: "6. 개인정보의 파기",
    content: (
      <p>
        보유기간이 지나거나 처리 목적이 달성된 개인정보는 지체 없이 파기합니다. 전자적 정보는 복구하기 어려운
        방법으로 삭제하며, 출력물이 있는 경우에는 분쇄 또는 이에 준하는 적절한 방법으로 파기합니다.
      </p>
    )
  },
  {
    title: "7. 정보주체의 권리와 행사 방법",
    content: (
      <p>
        고객은 자신의 개인정보에 대해 열람, 정정, 삭제 또는 처리정지를 요청할 수 있습니다. 관련 요청은
        <a className="mx-1 font-semibold text-brand-blue hover:text-brand-primary" href={CONTACT_PHONE_HREF}>
          {CONTACT_PHONE_DISPLAY}
        </a>
        또는
        <a className="ml-1 break-all font-semibold text-brand-blue hover:text-brand-primary" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        로 접수할 수 있습니다.
      </p>
    )
  },
  {
    title: "8. 개인정보 보호책임자",
    content: (
      <dl className="grid gap-3 sm:grid-cols-[9rem_1fr]">
        <dt className="font-semibold text-navy">개인정보 보호책임자</dt>
        <dd>최준일</dd>
        <dt className="font-semibold text-navy">전화</dt>
        <dd><a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE_DISPLAY}</a></dd>
        <dt className="font-semibold text-navy">이메일</dt>
        <dd><a className="break-all" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></dd>
      </dl>
    )
  },
  {
    title: "9. 개인정보의 안전성 확보조치",
    content: (
      <p>
        ㈜사이투어는 개인정보 취급 범위를 업무상 필요한 인원으로 제한하고, 불필요한 개인정보가 보관되지 않도록
        관리하며, 관련 시스템의 접근을 관리하는 등 개인정보 보호를 위한 합리적인 조치를 시행합니다.
      </p>
    )
  },
  {
    title: "10. 쿠키 및 자동수집",
    content: <p>현재 홈페이지에서는 광고·분석 목적의 쿠키를 별도로 운영하지 않습니다.</p>
  },
  {
    title: "11. 개인정보처리방침의 변경",
    content: (
      <>
        <p>본 개인정보처리방침은 관련 내용의 변경이 있는 경우 홈페이지를 통해 안내합니다.</p>
        <p className="font-semibold text-navy">시행일: 2026년 10월 1일</p>
      </>
    )
  }
] as const;

export default function PrivacyPage() {
  return (
    <section className="section-y bg-paper">
      <div className="container-px mx-auto max-w-4xl">
        <header className="mb-10 border-b border-slate-200 pb-8 sm:mb-12">
          <p className="eyebrow">PRIVACY POLICY</p>
          <h1 className="mt-4 text-3xl font-bold tracking-normal text-navy [word-break:keep-all] sm:text-4xl">
            개인정보처리방침
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 [word-break:keep-all]">
            ㈜사이투어는 고객의 개인정보를 중요하게 생각하며, 개인정보 처리와 보호에 관한 사항을 다음과 같이 안내합니다.
          </p>
        </header>

        <div className="space-y-5">
          {sections.map((section) => (
            <article key={section.title} className="rounded-[20px] border border-slate-100 bg-white p-5 shadow-soft sm:p-7">
              <h2 className="text-xl font-bold leading-8 text-navy [word-break:keep-all]">{section.title}</h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 [word-break:keep-all] [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:list-disc">
                {section.content}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[20px] bg-navy p-6 text-sm leading-7 text-white/80 [word-break:keep-all] sm:p-8">
          <p className="font-bold text-white">㈜사이투어 | SAI TOUR</p>
          <p className="mt-2">대표자 최준일 · 사업자등록번호 494-86-01377</p>
          <p>통신판매업 신고번호 제2019-서울강서-1795호</p>
          <p>관광사업등록번호 제2018-000032호</p>
          <p className="mt-2">서울시 강서구 마곡중앙로 161-17, 712호</p>
        </div>
      </div>
    </section>
  );
}
