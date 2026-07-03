import type { Metadata } from "next";
import ManagedImage from "@/components/ManagedImage";
import SectionTitle from "@/components/SectionTitle";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from "@/constants/site";
import { imagePaths } from "@/data/images";

export const metadata: Metadata = {
  title: "회사소개",
  description: "외국인 한국여행부터 기업행사까지 맞춤형 서비스를 제공하는 사이투어를 소개합니다."
};

const philosophy = [
  {
    title: "정확한 상담",
    description: "고객의 목적, 인원, 예산, 일정을 먼저 확인하고 필요한 정보를 분명하게 안내합니다."
  },
  {
    title: "현실적인 일정",
    description: "이동 시간과 현장 상황을 고려해 무리 없는 여행 동선을 설계합니다."
  },
  {
    title: "책임 있는 운영",
    description: "공항픽업부터 일정 종료까지 필요한 내용을 차분하게 확인합니다."
  }
];

export default function CompanyPage() {
  return (
    <>
      <section className="bg-white">
        <div className="container-px mx-auto grid max-w-7xl gap-10 py-14 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-20">
          <div>
            <p className="eyebrow">회사소개</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-normal text-navy sm:text-5xl">
              사이투어
            </h1>
            <p className="mt-5 text-xl font-semibold text-slate-800">Always Good Buddy</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              사이투어는 외국인 한국여행부터 기업행사까지, 고객의 목적에 맞는 맞춤형 서비스를 제공하는 여행 파트너입니다.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-paper shadow-soft sm:aspect-[16/10]">
            <ManagedImage
              src={imagePaths.about.main}
              alt="사이투어 인바운드 여행 서비스"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionTitle
              eyebrow="STORY"
              title="사이투어 이야기"
              description="정확한 상담과 책임 있는 운영을 기본으로 생각합니다."
            />
            <div className="space-y-4 text-base leading-8 text-slate-600">
              <p>
                사이투어는 외국인 한국여행, DMZ 투어, 서울 시티투어, 공항 이동, 기업행사까지 고객 여정에 필요한 운영 요소를 함께 확인합니다.
              </p>
              <p>
                화려한 설명보다 중요한 것은 정확한 상담과 안정적인 운영입니다. 사이투어는 여정의 시작부터 마무리까지 필요한 순간에 함께합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="운영철학"
            title="기본을 지키는 여행 운영"
            description="상담, 일정, 현장 운영의 기본을 차분하게 지키겠습니다."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {philosophy.map((item) => (
              <article key={item.title} className="card card-hover">
                <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-px mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <div className="card">
            <h2 className="text-xl font-bold text-navy">회사 정보</h2>
            <dl className="mt-5 space-y-3 text-sm text-slate-600">
              <div className="flex justify-between gap-4">
                <dt className="font-semibold text-slate-800">회사명</dt>
                <dd>사이투어</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="font-semibold text-slate-800">주소</dt>
                <dd className="text-right">서울시 강서구 마곡중앙로 161-17, 712호</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="font-semibold text-slate-800">전화</dt>
                <dd>{CONTACT_PHONE_DISPLAY}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="font-semibold text-slate-800">이메일</dt>
                <dd>{CONTACT_EMAIL}</dd>
              </div>
            </dl>
          </div>
          <div className="card">
            <h2 className="text-xl font-bold text-navy">오시는 길</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              서울시 강서구 마곡중앙로 161-17, 712호
            </p>
            <p className="mt-3 text-xs font-semibold text-slate-400">
              방문 상담은 사전 연락 후 안내드립니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
