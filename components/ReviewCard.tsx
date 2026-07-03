import type { Review } from "@/data/reviews";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="card card-hover flex h-full flex-col">
      <div className="flex gap-1 text-mint" aria-label="별점 5점">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} aria-hidden="true">★</span>
        ))}
      </div>
      <h3 className="mt-4 text-xl font-bold leading-7 text-navy">{review.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{review.body}</p>
      <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4 text-sm">
        <span className="font-semibold text-mint">{review.tour}</span>
        <span className="text-slate-500">{review.date}</span>
      </div>
    </article>
  );
}
