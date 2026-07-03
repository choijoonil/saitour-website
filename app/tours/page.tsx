import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";

export const metadata: Metadata = {
  title: "서비스",
  description: "외국인 한국여행부터 기업행사까지, 고객의 목적에 맞는 맞춤형 서비스를 확인하세요."
};

export default function ToursPage() {
  return (
    <section className="section-y bg-paper">
      <div className="container-px mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="SERVICE"
          title="사이투어 서비스"
          description="외국인 한국여행부터 기업행사까지, 고객의 목적에 맞는 맞춤형 서비스를 제공합니다."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
