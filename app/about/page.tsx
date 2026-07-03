import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "회사소개",
  description: "사이투어의 운영 방향과 상담 원칙을 소개합니다."
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="container-px mx-auto max-w-7xl py-14">
          <p className="eyebrow">ABOUT 사이투어</p>
          <h1 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">실무에 충실한 한국 여행 파트너</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            사이투어는 실제 상담과 현장 운영에 집중합니다. 이동, 투어, 맞춤 일정에 필요한 내용을 먼저 확인합니다.
          </p>
        </div>
      </section>
      <section className="section-y bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionTitle title="운영 원칙" description="짧고 명확하게 안내하고, 무리한 일정은 권하지 않습니다." />
          <div className="grid gap-5 md:grid-cols-3">
            {["상담은 구체적으로", "일정은 현실적으로", "현장은 차분하게"].map((item) => (
              <div key={item} className="card card-hover">
                <h2 className="text-xl font-bold text-navy">{item}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  여행 목적, 인원, 이동 시간을 기준으로 필요한 내용을 확인합니다.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
