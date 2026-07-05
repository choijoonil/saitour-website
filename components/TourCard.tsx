import Link from "next/link";
import ManagedImage from "@/components/ManagedImage";
import type { Tour } from "@/data/tours";

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden p-0">
      <div className="relative aspect-[4/3] sm:aspect-[16/10]">
        <ManagedImage
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-bold text-brand-blue">{tour.category}</p>
        <h3 className="mt-2 text-xl font-bold leading-7 text-navy">{tour.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{tour.summary}</p>
        <div className="mt-5">
          <p className="text-xs font-bold text-slate-500">추천 대상</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {tour.recommendedFor.slice(0, 3).map((item) => (
              <span key={item} className="rounded-full bg-brand-surface px-3 py-1 text-xs font-semibold text-brand-blue">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto pt-6">
          <Link href={`/tours/${tour.slug}`} className="btn-primary w-full">
            자세히 보기
          </Link>
        </div>
      </div>
    </article>
  );
}
