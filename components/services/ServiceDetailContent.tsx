import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import ManagedImage from "@/components/ManagedImage";
import type {
  ServiceContentCard,
  ServiceDetail,
  ServiceItineraryStep,
  ServiceQuickInfo
} from "@/data/services/types";

export default function ServiceDetailContent({ service }: { service: ServiceDetail }) {
  return (
    <>
      <ServiceHero service={service} />
      {hasItems(service.quickInfo) ? <QuickInfo items={service.quickInfo} /> : null}

      <section className="section-y bg-white">
        <div className="container-px mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-14">
          <div>
            <p className="eyebrow">ABOUT THE SERVICE</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-navy sm:text-4xl">서비스 소개</h2>
          </div>
          <div>
            <p className="text-lg font-semibold leading-8 text-slate-800">{service.summary}</p>
            <p className="mt-4 text-base leading-8 text-slate-600">{service.description}</p>
            {hasItems(service.recommendedFor) ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {service.recommendedFor.map((item) => (
                  <span key={item} className="rounded-full bg-brand-surface px-4 py-2 text-sm font-semibold text-brand-blue">
                    {item}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {hasItems(service.categories) ? (
        <CardSection eyebrow="SERVICE TYPES" title="서비스 구성" items={service.categories} />
      ) : null}
      {hasItems(service.courses) ? (
        <CardSection eyebrow="COURSES" title="추천 코스" items={service.courses} background="white" />
      ) : null}
      {hasItems(service.itinerary) ? <ItinerarySection items={service.itinerary} /> : null}
      {hasItems(service.highlights) ? (
        <CardSection eyebrow="HIGHLIGHTS" title="주요 방문지와 테마" items={service.highlights} background="white" />
      ) : null}
      {hasItems(service.vehicleInfo) ? (
        <CardSection eyebrow="VEHICLE & OPTIONS" title="차량 및 운영 옵션" items={service.vehicleInfo} />
      ) : null}
      {hasItems(service.usageInfo) ? <UsageInfoSection items={service.usageInfo} /> : null}
      {hasItems(service.included) || hasItems(service.excluded) ? (
        <IncludedSection included={service.included} excluded={service.excluded} />
      ) : null}
      {hasItems(service.notices) ? <NoticeSection items={service.notices} /> : null}
      {hasItems(service.reviews) ? (
        <section className="section-y bg-paper">
          <div className="container-px mx-auto max-w-7xl">
            <SectionHeading eyebrow="REVIEWS" title="실제 운영사례와 후기" />
            <div className="grid gap-5 md:grid-cols-2">
              {service.reviews.map((review) => (
                <blockquote key={review.quote} className="card text-base leading-8 text-slate-600">
                  <p>“{review.quote}”</p>
                  {review.source ? <footer className="mt-4 text-sm font-bold text-navy">{review.source}</footer> : null}
                  {review.url ? (
                    <a className="mt-4 inline-flex text-sm font-bold text-brand-blue" href={review.url} target="_blank" rel="noopener noreferrer">
                      후기 원문 보기
                    </a>
                  ) : null}
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      {hasItems(service.faq) ? (
        <section className="section-y bg-white">
          <div className="container-px mx-auto max-w-4xl">
            <SectionHeading eyebrow="FAQ" title="자주 묻는 질문" />
            <div className="space-y-3">
              {service.faq.map((item) => (
                <details key={item.question} className="rounded-[20px] border border-slate-100 bg-white p-5 shadow-soft sm:p-6">
                  <summary className="cursor-pointer font-bold text-navy">{item.question}</summary>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-navy py-12 text-white sm:py-14">
        <div className="container-px mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-green">PLAN WITH SAITOUR</p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{service.title}, 상담부터 함께 준비합니다.</h2>
          </div>
          <Link href="#contact" className="btn-primary shrink-0 bg-brand-mint hover:bg-brand-blue">
            이 서비스 문의하기
          </Link>
        </div>
      </section>

      <ContactCTA defaultInquiryType={service.contactType} />
    </>
  );
}

function ServiceHero({ service }: { service: ServiceDetail }) {
  return (
    <section className="bg-white">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-14 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-20">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-paper shadow-soft sm:aspect-[16/10] lg:aspect-[4/3]">
          <ManagedImage
            src={service.heroImage}
            alt={`${service.title} 대표 이미지`}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 55vw, 100vw"
          />
        </div>
        <div>
          <p className="eyebrow">{service.englishTitle}</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">{service.title}</h1>
          <p className="mt-5 text-xl font-semibold leading-8 text-slate-800">{service.subtitle}</p>
          <p className="mt-4 text-base leading-8 text-slate-600">{service.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="#contact" className="btn-primary">
              여행 문의하기
            </Link>
            <Link href="/tours" className="btn-secondary">
              전체 서비스 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickInfo({ items }: { items: ServiceQuickInfo[] }) {
  return (
    <section className="border-y border-slate-100 bg-paper">
      <div className="container-px mx-auto grid max-w-7xl gap-px py-7 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.label} className="px-1 py-3 sm:px-5 lg:border-l lg:first:border-l-0 lg:border-slate-200">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">{item.label}</p>
            <p className="mt-2 text-base font-bold leading-7 text-navy">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CardSection({
  eyebrow,
  title,
  items,
  background = "paper"
}: {
  eyebrow: string;
  title: string;
  items: ServiceContentCard[];
  background?: "paper" | "white";
}) {
  return (
    <section className={`section-y ${background === "paper" ? "bg-paper" : "bg-white"}`}>
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="card h-full">
              <h3 className="text-xl font-bold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              {hasItems(item.items) ? (
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                  {item.items.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-mint" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ItinerarySection({ items }: { items: ServiceItineraryStep[] }) {
  return (
    <section className="section-y bg-navy text-white">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="HOW IT WORKS" title="일정 예시" light />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {items.map((item, index) => (
            <li key={`${item.title}-${index}`} className="rounded-[20px] border border-white/10 bg-white/5 p-5">
              <span className="text-xs font-bold tracking-[0.14em] text-brand-green">STEP {index + 1}</span>
              <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
              {item.description ? <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function UsageInfoSection({ items }: { items: ServiceQuickInfo[] }) {
  return (
    <section className="section-y bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="INFORMATION" title="이용정보" />
        <dl className="grid overflow-hidden rounded-[20px] border border-slate-100 bg-white shadow-soft md:grid-cols-2">
          {items.map((item) => (
            <div key={item.label} className="border-b border-slate-100 p-5 last:border-b-0 sm:p-6 md:border-r md:last:border-r-0">
              <dt className="text-sm font-bold text-brand-blue">{item.label}</dt>
              <dd className="mt-2 text-base font-semibold leading-7 text-navy">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function IncludedSection({ included, excluded }: { included?: string[]; excluded?: string[] }) {
  return (
    <section className="section-y bg-paper">
      <div className="container-px mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
        {hasItems(included) ? <ListCard title="서비스 구성" items={included} tone="included" /> : null}
        {hasItems(excluded) ? <ListCard title="별도 확인사항" items={excluded} tone="excluded" /> : null}
      </div>
    </section>
  );
}

function ListCard({ title, items, tone }: { title: string; items: string[]; tone: "included" | "excluded" }) {
  return (
    <article className="card h-full">
      <h2 className="text-xl font-bold text-navy">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold ${
                tone === "included" ? "bg-brand-mint/10 text-brand-mint" : "bg-slate-100 text-slate-500"
              }`}
              aria-hidden="true"
            >
              {tone === "included" ? "✓" : "–"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function NoticeSection({ items }: { items: string[] }) {
  return (
    <section className="section-y bg-white">
      <div className="container-px mx-auto max-w-4xl">
        <div className="rounded-[20px] border border-brand-yellow/40 bg-brand-yellow/10 p-6 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-orange">PLEASE NOTE</p>
          <h2 className="mt-3 text-2xl font-bold text-navy">이용 시 유의사항</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
            {items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="font-bold text-brand-orange">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="mb-9 max-w-3xl">
      <p className={`text-sm font-bold uppercase tracking-[0.18em] ${light ? "text-brand-green" : "text-brand-blue"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-bold tracking-normal sm:text-4xl ${light ? "text-white" : "text-navy"}`}>{title}</h2>
    </div>
  );
}

function hasItems<T>(items: T[] | undefined): items is T[] {
  return Boolean(items?.length);
}
