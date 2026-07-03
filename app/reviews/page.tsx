import type { Metadata } from "next";
import ReviewCard from "@/components/ReviewCard";
import SectionTitle from "@/components/SectionTitle";
import { reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "여행후기",
  description: "사이투어를 이용한 고객들의 짧은 후기입니다."
};

export default function ReviewsPage() {
  return (
    <section className="section-y bg-paper">
      <div className="container-px mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="REVIEWS"
          title="여행후기"
          description="사이투어를 이용한 고객들의 짧은 후기를 확인해보세요."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
