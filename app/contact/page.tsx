import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "문의하기",
  description: "외국인 한국여행부터 기업행사까지, 고객의 목적에 맞는 맞춤형 서비스 상담은 사이투어와 함께 확인해보세요."
};

export default function ContactPage() {
  return <ContactCTA />;
}
