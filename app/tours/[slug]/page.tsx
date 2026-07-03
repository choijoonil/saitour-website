import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactCTA from "@/components/ContactCTA";
import ManagedImage from "@/components/ManagedImage";
import { getTour, tours } from "@/data/tours";

type TourDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: TourDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);

  if (!tour) {
    return {
      title: "서비스"
    };
  }

  return {
    title: tour.title,
    description: tour.summary,
    openGraph: {
      title: `${tour.title} | 사이투어`,
      description: tour.summary,
      images: [tour.image]
    }
  };
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { slug } = await params;
  const tour = getTour(slug);

  if (!tour) {
    notFound();
  }

  return (
    <>
      <section className="bg-white">
        <div className="container-px mx-auto grid max-w-7xl gap-10 py-14 sm:py-16 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:py-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-paper shadow-soft">
            <ManagedImage src={tour.image} alt={tour.title} fill priority className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" />
          </div>
          <div>
            <p className="eyebrow">{tour.category}</p>
            <h1 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">{tour.title}</h1>
            <p className="mt-4 text-lg font-semibold text-slate-800">{tour.summary}</p>
            <p className="mt-4 text-base leading-7 text-slate-600">{tour.description}</p>
            <div className="mt-6 rounded-[20px] bg-paper p-6">
              <p className="text-sm font-semibold text-slate-500">예상 소요시간</p>
              <p className="mt-1 text-xl font-bold text-navy">{tour.duration}</p>
            </div>
            <div className="mt-6">
              <Link href="/contact" className="btn-primary">
                여행 문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-px mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <DetailBlock title="진행 방식" items={tour.itinerary} ordered />
          <DetailBlock title="추천 대상" items={tour.recommendedFor} />
          <DetailBlock title="포함 사항" items={tour.included} />
          <DetailBlock title="별도 확인 사항" items={tour.excluded} />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

function DetailBlock({
  title,
  items,
  ordered = false
}: {
  title: string;
  items: string[];
  ordered?: boolean;
}) {
  const List = ordered ? "ol" : "ul";

  return (
    <section className="card">
      <h2 className="text-xl font-bold text-navy">{title}</h2>
      <List className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
        {items.map((item, index) => (
          <li key={item} className="flex gap-3">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint-light text-xs font-bold text-mint">
              {ordered ? index + 1 : "•"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </List>
    </section>
  );
}
