import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import ManagedImage from "@/components/ManagedImage";
import type {
  ServiceChecklistSection,
  ServiceContentCard,
  ServiceDetail,
  ServiceImportantNoticeSection,
  ServiceItineraryStep,
  ServiceMediaSlot,
  ServiceQuickInfo,
  ServiceTableSection
} from "@/data/services/types";

export default function ServiceDetailContent({ service }: { service: ServiceDetail }) {
  return (
    <>
      <ServiceHero service={service} />
      {hasItems(service.quickInfo) ? <QuickInfo items={service.quickInfo} /> : null}

      <section
        className={
          service.compactIntroduction
            ? "bg-white pt-14 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12"
            : "section-y bg-white"
        }
      >
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
        <CardSection
          eyebrow={service.coursesEyebrow || "COURSES"}
          title={service.coursesTitle || "추천 코스"}
          items={service.courses}
          background="white"
          columns={service.coursesColumns}
        />
      ) : null}
      {hasItems(service.itinerary) ? (
        <ItinerarySection
          items={service.itinerary}
          title={service.itineraryTitle}
          roomy={service.itineraryRoomy}
          notes={service.itineraryNotes}
          columns={service.itineraryColumns}
          keepTitles={service.slug === "private-tour"}
        />
      ) : null}
      {service.importantNotice ? <ImportantNoticeSection section={service.importantNotice} /> : null}
      {hasItems(service.highlights) ? (
        <CardSection eyebrow="HIGHLIGHTS" title="주요 방문지와 테마" items={service.highlights} background="white" />
      ) : null}
      {hasItems(service.vehicleInfo) ? (
        <CardSection
          eyebrow="VEHICLE & OPTIONS"
          title={service.vehicleInfoTitle || "차량 및 운영 옵션"}
          items={service.vehicleInfo}
        />
      ) : null}
      {service.pricing ? <PricingSection section={service.pricing} /> : null}
      {hasItems(service.usageInfo) ? (
        <UsageInfoSection items={service.usageInfo} columns={service.usageInfoColumns} />
      ) : null}
      {service.checklist ? (
        <ChecklistSection section={service.checklist} compactAfter={service.slug === "private-tour"} />
      ) : null}
      {hasItems(service.included) || hasItems(service.excluded) ? (
        <IncludedSection
          included={service.included}
          excluded={service.excluded}
          includedTitle={service.includedTitle}
          excludedTitle={service.excludedTitle}
          compactBefore={service.slug === "private-tour"}
        />
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
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              {service.ctaTitle || `${service.title}, 상담부터 함께 준비합니다.`}
            </h2>
          </div>
          <Link href="#contact" className="btn-primary shrink-0 bg-brand-mint hover:bg-brand-blue">
            {service.ctaLabel || "이 서비스 문의하기"}
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
          <p
            className={`mt-5 text-xl font-semibold leading-8 text-slate-800 ${
              service.slug === "dmz-tour" ? "whitespace-normal lg:whitespace-pre-line" : ""
            }`}
          >
            {service.subtitle}
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">{service.heroDescription || service.description}</p>
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
  background = "paper",
  columns = 3
}: {
  eyebrow: string;
  title: string;
  items: ServiceContentCard[];
  background?: "paper" | "white";
  columns?: 2 | 3;
}) {
  return (
    <section className={`section-y ${background === "paper" ? "bg-paper" : "bg-white"}`}>
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className={`grid gap-5 md:grid-cols-2 ${columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
          {items.map((item) => (
            <article key={item.title} className="card h-full">
              {item.media ? <MediaSlot media={item.media} /> : null}
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

function ItinerarySection({
  items,
  title = "일정 예시",
  roomy = false,
  notes,
  columns = 5,
  keepTitles = false
}: {
  items: ServiceItineraryStep[];
  title?: string;
  roomy?: boolean;
  notes?: string[];
  columns?: 3 | 5;
  keepTitles?: boolean;
}) {
  return (
    <section className={`${roomy ? "py-16 sm:py-20 lg:py-24" : "section-y"} bg-navy text-white`}>
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="HOW IT WORKS" title={title} light />
        <ol className={`grid gap-4 md:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-5"}`}>
          {items.map((item, index) => (
            <li key={`${item.title}-${index}`} className="rounded-[20px] border border-white/10 bg-white/5 p-5">
              <span className="text-xs font-bold tracking-[0.14em] text-brand-green">
                STEP {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={`mt-4 text-lg font-bold ${keepTitles ? "[word-break:keep-all]" : ""}`}>{item.title}</h3>
              {item.description ? <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p> : null}
            </li>
          ))}
        </ol>
        {hasItems(notes) ? (
          <ul className="mt-6 space-y-2 rounded-[20px] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/75 sm:p-6">
            {notes.map((note) => (
              <li key={note} className="flex gap-3">
                <span className="shrink-0 font-bold text-brand-green" aria-hidden="true">※</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

function PricingSection({ section }: { section: ServiceTableSection }) {
  return (
    <section className="section-y bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} />
        <p className="-mt-5 max-w-3xl text-base leading-7 text-slate-600">{section.description}</p>

        {section.media ? (
          <div className="mt-8">
            <MediaSlot media={section.media} large />
          </div>
        ) : null}

        <div className="mt-8 hidden overflow-hidden rounded-[20px] border border-slate-100 bg-white shadow-soft md:block">
          <table className="w-full border-collapse text-left">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-5 py-4 text-sm font-bold">구역 및 해당 지역</th>
                {section.columns.map((column) => (
                  <th key={column.key} className="px-5 py-4 text-sm font-bold">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row) => (
                <tr key={row.label} className="border-t border-slate-100">
                  <th className="px-5 py-5 align-top text-base font-bold text-navy">
                    {row.label}
                    {hasItems(row.details) ? (
                      <span className="mt-2 block max-w-xl text-sm font-normal leading-6 text-slate-600">
                        {row.details.join(" · ")}
                      </span>
                    ) : null}
                  </th>
                  {section.columns.map((column) => (
                    <td key={column.key} className="whitespace-nowrap px-5 py-5 align-top text-base font-bold text-brand-blue">
                      {row.values[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-4 md:hidden">
          {section.rows.map((row) => (
            <article key={row.label} className="card">
              <h3 className="text-xl font-bold text-navy">{row.label}</h3>
              {hasItems(row.details) ? <p className="mt-2 text-sm leading-6 text-slate-600">{row.details.join(" · ")}</p> : null}
              <dl className="mt-5 grid grid-cols-2 gap-3">
                {section.columns.map((column) => (
                  <div key={column.key} className="rounded-2xl bg-paper p-4">
                    <dt className="text-xs font-bold text-slate-500">{column.label}</dt>
                    <dd className="mt-2 text-base font-bold text-brand-blue">{row.values[column.key]}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        {hasItems(section.notes) ? (
          <ul className="mt-6 space-y-2 rounded-[20px] border border-brand-yellow/40 bg-brand-yellow/10 p-5 text-sm leading-6 text-slate-700 sm:p-6">
            {section.notes.map((note) => (
              <li key={note} className="flex gap-2">
                <span className="shrink-0 font-bold text-brand-orange" aria-hidden="true">
                  ※
                </span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {section.ctaLabel ? (
          <div className="mt-8 flex justify-center">
            <Link href="#contact" className="btn-primary">
              {section.ctaLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ChecklistSection({
  section,
  compactAfter = false
}: {
  section: ServiceChecklistSection;
  compactAfter?: boolean;
}) {
  return (
    <section
      className={
        compactAfter
          ? "bg-paper pt-14 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-12"
          : "section-y bg-paper"
      }
    >
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} />
        {section.description ? <p className="-mt-5 max-w-3xl text-base leading-7 text-slate-600">{section.description}</p> : null}
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item) => (
            <li key={item} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-sm font-semibold text-navy shadow-soft">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-mint/10 font-bold text-brand-mint" aria-hidden="true">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function MediaSlot({ media, large = false }: { media: ServiceMediaSlot; large?: boolean }) {
  const isContainedImage = media.src && media.fit === "contain";
  const aspectRatio = media.width && media.height ? `${media.width} / ${media.height}` : undefined;

  return (
    <div
      className={`relative mb-5 overflow-hidden rounded-[20px] ${
        isContainedImage
          ? "mx-auto w-full max-w-5xl border border-slate-100 bg-white"
          : `bg-brand-surface ${large ? "aspect-[16/7]" : "aspect-video"}`
      }`}
      style={isContainedImage && aspectRatio ? { aspectRatio } : undefined}
    >
      {media.src ? (
        <>
          <ManagedImage
            src={media.src}
            alt={media.alt}
            fill
            className={media.fit === "contain" ? "object-contain" : "object-cover"}
            sizes={large ? "(min-width: 1280px) 1024px, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          />
          {media.credit && media.creditUrl ? (
            <p className="absolute right-2 bottom-2 rounded-full bg-navy/75 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
              <a href={media.creditUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {media.credit}
              </a>
              {media.license && media.licenseUrl ? (
                <>
                  <span aria-hidden="true"> · </span>
                  <a href={media.licenseUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {media.license}
                  </a>
                </>
              ) : null}
            </p>
          ) : null}
        </>
      ) : (
        <div className="absolute inset-0 grid place-items-center border border-dashed border-brand-blue/30 p-6 text-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">IMAGE</p>
            {media.placeholder ? <p className="mt-2 text-sm font-semibold text-slate-500">{media.placeholder}</p> : null}
          </div>
        </div>
      )}
    </div>
  );
}

function UsageInfoSection({ items, columns = 2 }: { items: ServiceQuickInfo[]; columns?: 2 | 3 }) {
  return (
    <section className="section-y bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="INFORMATION" title="이용정보" />
        <dl
          className={`grid overflow-hidden rounded-[20px] border border-slate-100 bg-white shadow-soft ${
            columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
          }`}
        >
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

function IncludedSection({
  included,
  excluded,
  includedTitle = "서비스 구성",
  excludedTitle = "별도 확인사항",
  compactBefore = false
}: {
  included?: string[];
  excluded?: string[];
  includedTitle?: string;
  excludedTitle?: string;
  compactBefore?: boolean;
}) {
  return (
    <section
      className={
        compactBefore
          ? "bg-paper pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pt-12 lg:pb-20"
          : "section-y bg-paper"
      }
    >
      <div className="container-px mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
        {hasItems(included) ? <ListCard title={includedTitle} items={included} tone="included" /> : null}
        {hasItems(excluded) ? <ListCard title={excludedTitle} items={excluded} tone="excluded" /> : null}
      </div>
    </section>
  );
}

function ImportantNoticeSection({ section }: { section: ServiceImportantNoticeSection }) {
  return (
    <section className="section-y bg-white">
      <div className="container-px mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[24px] border-2 border-brand-orange/35 bg-brand-yellow/10 shadow-soft">
          <div className="border-b border-brand-orange/20 bg-brand-orange px-6 py-5 text-white sm:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/85">
              {section.eyebrow || "IMPORTANT NOTICE"}
            </p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{section.title}</h2>
            {section.description ? <p className="mt-3 max-w-3xl text-sm leading-7 text-white/90">{section.description}</p> : null}
          </div>
          <ol className="divide-y divide-brand-orange/15 px-6 sm:px-8">
            {section.items.map((item, index) => (
              <li key={item} className="flex gap-4 py-5 text-sm font-semibold leading-7 text-slate-800 sm:text-base">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-orange text-xs font-bold text-white" aria-hidden="true">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
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
