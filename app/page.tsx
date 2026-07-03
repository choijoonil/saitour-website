import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import ManagedImage from "@/components/ManagedImage";
import SectionTitle from "@/components/SectionTitle";
import { heroImage } from "@/data/hero";
import { imagePaths } from "@/data/images";
import { representativeServices } from "@/data/services";

const whySaitourCards = [
  {
    icon: "calendar",
    title: "맞춤 기획",
    description: "고객의 목적, 인원, 예산에 맞춰 가장 효율적인 일정을 제안합니다."
  },
  {
    icon: "shield",
    title: "현장 운영",
    description: "공항 도착부터 일정 종료까지 현장에서 필요한 부분을 꼼꼼하게 관리합니다."
  },
  {
    icon: "users",
    title: "전문 네트워크",
    description: "전용차량, 식당, 가이드, 체험 프로그램까지 검증된 파트너와 함께합니다."
  },
  {
    icon: "message",
    title: "빠른 상담",
    description: "전화, 이메일, 카카오 상담을 통해 문의부터 진행까지 신속하게 안내합니다."
  }
];

const aboutKeywords = [
  "외국인 한국여행",
  "DMZ 투어",
  "서울 시티투어",
  "공항픽업",
  "프라이빗 투어",
  "통역 가이드"
];

export default function Home() {
  return (
    <>
      <section className="home-hero relative min-h-[760px] overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <ManagedImage
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/58" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/42 to-navy/18" />
        </div>

        <div className="container-px relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center pt-24 pb-20 sm:pt-28 lg:pt-32">
          <div className="max-w-[680px]">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-mint sm:text-base">
              SAITOUR · Always Good Buddy
            </p>
            <h1 className="mt-6 max-w-4xl font-bold tracking-normal text-white">
              <span className="block text-3xl leading-tight sm:text-4xl lg:text-5xl">
                인바운드 · DMZ투어 · 서울시티투어
              </span>
              <span className="mt-4 block text-5xl leading-tight sm:text-6xl lg:text-[4.5rem]">
                사이투어가 함께합니다.
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/78 sm:text-lg sm:leading-9">
              외국인 한국여행부터 기업행사까지,
              <br className="hidden sm:block" />
              고객의 목적에 맞는 맞춤형 서비스를 제공합니다.
            </p>
            <div className="mt-9 flex">
              <Link
                href="#contact"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-mint px-8 text-base font-bold text-white shadow-[0_14px_34px_rgba(34,184,176,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-mint-dark hover:shadow-[0_18px_42px_rgba(34,184,176,0.3)] focus:outline-none focus:ring-2 focus:ring-mint focus:ring-offset-2 focus:ring-offset-navy"
              >
                여행 문의하기
              </Link>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-white/76">
            <span>아래로</span>
            <span className="scroll-indicator h-8 w-px bg-white/70" />
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <SectionTitle
              eyebrow="SERVICE"
              title="대표 서비스"
              description="외국인 한국여행부터 기업행사까지, 고객의 목적에 맞는 맞춤형 서비스를 제공합니다."
            />
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {representativeServices.map((service) => (
              <Link
                key={service.english}
                href="#contact"
                className="group relative block aspect-video overflow-hidden rounded-[20px] bg-navy shadow-soft focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
              >
                <ManagedImage
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  style={{ objectPosition: service.imagePosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/88 via-navy/42 to-navy/14 transition duration-300 group-hover:from-navy/92 group-hover:via-navy/48" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/72">
                    {service.english}
                  </p>
                  <h3 className="mt-2 text-xl font-bold leading-tight text-white sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/78">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper/60 py-14 sm:py-16 lg:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="eyebrow">WHY SAITOUR</p>
            <h2 className="mt-4 text-3xl font-bold tracking-normal text-navy sm:text-4xl">
              왜 사이투어일까요?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              일정 기획부터 차량, 가이드, 현장 운영까지
              <br className="hidden sm:block" />
              고객의 여정이 편안하게 진행되도록 세심하게 준비합니다.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whySaitourCards.map((card) => (
              <article key={card.title} className="card card-hover min-h-[230px]">
                <div className="icon-circle">
                  <WhyIcon type={card.icon} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">About SAITOUR</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-normal text-navy sm:text-4xl">
              고객의 여정을 함께 설계하는 여행 파트너
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                사이투어는 외국인 한국여행부터 기업행사까지, 고객의 목적에 맞는 맞춤형 서비스를 제공합니다.
              </p>
              <p>
                공항 픽업부터 전용차량, 전문 가이드, 일정 운영까지 여행의 시작부터 마무리까지
                세심하게 함께합니다.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {aboutKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full bg-mint-light px-4 py-2 text-sm font-bold text-mint"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-paper shadow-soft sm:aspect-[16/10]">
            <ManagedImage
              src={imagePaths.about.main}
              alt="사이투어 인바운드 여행 서비스"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/24 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

function WhyIcon({ type }: { type: string }) {
  if (type === "calendar") {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 3v4M16 3v4M4 9h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m9 15 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "users") {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M16 19a4 4 0 0 0-8 0M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM20 18a3.5 3.5 0 0 0-3-3.4M17 5.4a2.5 2.5 0 0 1 0 4.8M4 18a3.5 3.5 0 0 1 3-3.4M7 5.4a2.5 2.5 0 0 0 0 4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "car") {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 17h14M7 17v2M17 17v2M6 13l1.5-5h9L18 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 13h14v4H5v-4ZM8 15h.01M16 15h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "guide") {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v14H7a3 3 0 0 0-3 3V6.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 8h8M8 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21s7-3.5 7-10V5l-7-3-7 3v6c0 6.5 7 10 7 10Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 12a8 8 0 0 1-8 8H8l-5 3 1.6-4.8A8 8 0 1 1 21 12Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
