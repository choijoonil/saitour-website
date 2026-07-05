import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import ManagedImage from "@/components/ManagedImage";
import SectionTitle from "@/components/SectionTitle";
import TravelGallery from "@/components/TravelGallery";
import { galleryImages } from "@/data/gallery";
import { heroImage } from "@/data/hero";
import { representativeServices } from "@/data/services";
import { saitourStats } from "@/constants/homepageStats";

const whySaitourCards = [
  {
    icon: "calendar",
    title: "단독 맞춤 일정",
    description: "단체의 목적과 인원에 맞춰 일정을 유연하게 구성합니다."
  },
  {
    icon: "guide",
    title: "영어·일본어 가이드",
    description: "외국인 고객 응대에 필요한 전문 가이드 수배가 가능합니다."
  },
  {
    icon: "car",
    title: "공항픽업 가능",
    description: "인천공항·김포공항 도착부터 호텔 이동까지 편안하게 연결합니다."
  },
  {
    icon: "users",
    title: "기업행사 운영",
    description: "기업 방문, 인센티브, VIP 의전 등 단체 행사를 지원합니다."
  },
  {
    icon: "shield",
    title: "노쇼핑 투어",
    description: "불필요한 쇼핑 일정 없이 여행 목적에 집중합니다."
  },
  {
    icon: "message",
    title: "빠른 상담",
    description: "문의 내용을 확인 후 가능한 빠르게 회신드립니다."
  }
];

const howItWorksSteps = [
  {
    icon: "message",
    title: "문의 접수",
    description: "인원, 일정, 목적을 간단히 확인합니다."
  },
  {
    icon: "users",
    title: "맞춤 상담",
    description: "고객 유형과 이동 동선을 함께 검토합니다."
  },
  {
    icon: "calendar",
    title: "일정 제안",
    description: "투어, 차량, 가이드 구성을 제안합니다."
  },
  {
    icon: "car",
    title: "여행 진행",
    description: "현장 상황에 맞춰 안정적으로 운영합니다."
  },
  {
    icon: "shield",
    title: "사후 지원",
    description: "진행 후 필요한 내용을 확인하고 지원합니다."
  }
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
          <div className="absolute inset-0 bg-navy/62" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/84 via-navy/48 to-navy/20" />
        </div>

        <div className="container-px relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center pt-28 pb-24 sm:pt-32 lg:pt-36">
          <div className="max-w-[1080px]">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-green sm:text-base">
              SAITOUR · Always Good Buddy
            </p>
            <h1 className="hero-title mt-7 max-w-[1080px] font-bold tracking-normal text-white">
              <span className="block text-[2.05rem] leading-[1.16] sm:text-[3.1rem] lg:text-[4.6rem] xl:text-[5.3rem]">
                <span className="hero-nowrap">외국인을 위한</span>{" "}
                <span className="hero-nowrap">한국여행</span>
              </span>
              <span className="mt-3 block text-[1.08rem] font-semibold leading-[1.45] text-white/88 sm:mt-4 sm:text-[1.55rem] lg:text-[2.05rem] xl:text-[2.3rem]">
                <span className="hero-nowrap">DMZ</span>{" "}
                <span aria-hidden="true">·</span>{" "}
                <span className="hero-nowrap">서울시티투어</span>{" "}
                <span aria-hidden="true">·</span>{" "}
                <span className="hero-nowrap">공항픽업</span>
              </span>
              <span className="mt-4 block text-[1.85rem] leading-[1.18] sm:mt-5 sm:text-[2.75rem] lg:text-[3.55rem] xl:text-[4rem]">
                <span className="hero-nowrap">사이투어가</span>{" "}
                <span className="hero-nowrap">함께합니다.</span>
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/82 sm:mt-9 sm:text-lg sm:leading-9">
              외국인 한국여행부터 기업행사까지,
              <br className="hidden sm:block" />
              고객의 목적에 맞는 맞춤형 서비스를 제공합니다.
            </p>
            <div className="mt-10 flex">
              <Link
                href="#contact"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-brand-mint px-8 text-base font-bold text-white shadow-[0_14px_34px_rgba(18,183,172,0.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-brand-blue hover:shadow-[0_18px_42px_rgba(107,137,197,0.3)] focus:outline-none focus:ring-2 focus:ring-brand-mint focus:ring-offset-2 focus:ring-offset-navy"
              >
                여행 문의하기
              </Link>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-white/76">
            <span>SCROLL</span>
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
              description="DMZ 투어부터 서울 시티투어, 공항픽업까지 외국인 한국여행에 필요한 서비스를 맞춤형으로 제공합니다."
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
                <div className="absolute inset-0 bg-black/24 transition duration-300 group-hover:bg-black/28" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/12 via-black/42 to-black/84 transition duration-300 group-hover:to-black/88" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="service-card-eyebrow text-[10px] font-bold uppercase tracking-[0.2em] drop-shadow-sm sm:text-[11px]">
                    {service.english}
                  </p>
                  <h3 className="service-card-title mt-2 text-xl font-bold leading-tight drop-shadow-sm sm:text-[1.45rem]">
                    {service.title}
                  </h3>
                  <p className="service-card-description mt-2.5 line-clamp-2 text-sm leading-6 drop-shadow-sm">
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
              왜 사이투어인가
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              외국인 한국여행과 기업행사를 실제 운영 경험을 바탕으로
              <br className="hidden sm:block" />
              안전하고 유연하게 준비합니다.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whySaitourCards.map((card) => (
              <article key={card.title} className="card card-hover min-h-[200px]">
                <div className="icon-circle">
                  <WhyIcon type={card.icon} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy sm:text-xl">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow">SAITOUR IN NUMBERS</p>
            <h2 className="mt-4 text-3xl font-bold tracking-normal text-navy sm:text-4xl">
              숫자로 보는 사이투어
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {saitourStats.map((stat) => (
              <article key={stat.label} className="rounded-[20px] border border-slate-100 bg-white p-6 shadow-soft">
                <p className="text-[2.35rem] font-bold leading-none tracking-normal text-brand-blue sm:text-[2.7rem]">
                  {stat.value}
                </p>
                <p className="mt-4 text-sm font-bold text-slate-600">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TravelGallery
        images={galleryImages}
        eyebrow="실제 운영사진"
        title="현장에서 만나는 사이투어"
        description="DMZ, 서울, 공항픽업, 기업행사, 가이드 서비스까지 실제 운영 장면을 한눈에 확인해보세요."
      />

      <section className="section-y bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="eyebrow">HOW IT WORKS</p>
            <h2 className="mt-4 text-3xl font-bold tracking-normal text-navy sm:text-4xl">
              고객 이용 절차
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {howItWorksSteps.map((step, index) => (
              <article key={step.title} className="rounded-[20px] border border-slate-100 bg-white p-5 shadow-soft">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
                    STEP {index + 1}
                  </span>
                  <span className="icon-circle h-10 w-10">
                    <WhyIcon type={step.icon} />
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
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
