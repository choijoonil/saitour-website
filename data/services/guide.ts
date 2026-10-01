import { imagePaths } from "@/data/images";
import type { ServiceDetail } from "@/data/services/types";

export const guideService: ServiceDetail = {
  slug: "guide-service",
  category: "GUIDE SERVICE",
  englishTitle: "SAITOUR GUIDE SERVICE",
  title: "외국어 전문 가이드",
  subtitle: "좋은 여행에는 좋은 가이드가 필요합니다.",
  heroDescription: "영어·일본어·중국어 가이드와 함께 서울 시티투어와 DMZ, 지방여행부터 기업·VIP 일정까지 맞춤 가이드 서비스를 제공합니다. 사이투어는 일정과 고객을 이해하고 책임감 있게 함께하는 가이드 서비스를 중요하게 생각합니다.",
  summary: "좋은 가이드는 여행의 목적과 현장을 이해하고 고객과 책임감 있게 소통합니다.",
  description: "같은 일정이라도 누가 안내하느냐에 따라 여행의 경험은 달라질 수 있습니다. 사이투어는 단순히 외국어가 가능한 가이드를 연결하는 데 그치지 않고, 일정에 대한 이해와 현장 경험, 책임감 있는 응대와 고객과의 소통을 중요하게 생각합니다.",
  heroImage: imagePaths.services.guideService,
  image: imagePaths.services.guideService,
  duration: "상담 후 확정",
  recommendedFor: [],
  compactIntroduction: true,
  introductionTitle: "가이드는 여행의 얼굴입니다.",
  heroCtaLabel: "가이드 문의하기",
  quickInfo: [
    { label: "ENGLISH", value: "English Guide" },
    { label: "日本語", value: "日本語ガイド" },
    { label: "中文", value: "中文导游" }
  ],
  categoriesEyebrow: "OUR SERVICE PRINCIPLES",
  categoriesTitle: "SAITOUR GUIDE STANDARD",
  categoriesDescription: "사이투어가 가이드 서비스를 준비할 때 중요하게 생각하는 네 가지 기준입니다.",
  categoriesColumns: 2,
  categories: [
    { title: "PROFESSIONAL", description: "일정과 방문 목적을 이해하고 고객에게 필요한 안내를 제공합니다." },
    { title: "EXPERIENCED", description: "관광과 행사 현장의 경험을 바탕으로 현장 상황에 유연하게 대응합니다." },
    { title: "RESPONSIBLE", description: "약속된 일정과 고객 응대에 책임감을 갖고 성실하게 함께합니다." },
    { title: "COMMUNICATION", description: "단순한 언어 전달을 넘어 고객과 자연스럽고 원활하게 소통합니다." }
  ],
  coursesEyebrow: "GUIDE SERVICE FOR",
  coursesTitle: "이런 일정에 함께합니다",
  coursesColumns: 2,
  courses: [
    { title: "서울·DMZ 관광", description: "서울 주요 관광지와 DMZ 등 외국인 고객의 관광 일정에 맞는 가이드 서비스를 상담합니다." },
    { title: "지방·다일 여행", description: "서울 외 지역과 1박 이상의 여행도 일정과 이동 동선에 맞춰 가이드 서비스를 상담합니다." },
    { title: "기업·기관 일정", description: "고객이 확정한 기업·기관 방문 일정과 행사 목적에 맞춰 필요한 가이드 서비스를 상담합니다." },
    { title: "VIP·비즈니스 일정", description: "임원과 주요 방문객의 일정 성격과 요청사항을 확인해 필요한 가이드 서비스를 상담합니다." }
  ],
  itineraryTitle: "가이드 서비스 준비 과정",
  itinerary: [
    { title: "가이드 문의", description: "이용 날짜와 필요한 언어를 알려주세요." },
    { title: "일정·목적 확인", description: "여행 또는 방문 목적과 전체 일정을 확인합니다." },
    { title: "업무 범위 확인", description: "관광 안내, 기업 일정 등 필요한 가이드 업무 범위를 확인합니다." },
    { title: "가이드 서비스 안내", description: "일정과 요청사항을 바탕으로 가이드 서비스와 견적을 안내합니다." },
    { title: "최종 일정 확인", description: "확정된 일정과 미팅 장소 등 필요한 내용을 최종 확인합니다." }
  ],
  usageInfoColumns: 3,
  usageInfo: [
    { label: "가이드 서비스", value: "영어·일본어·중국어 가이드 상담이 가능하며 일정과 여행 목적을 확인한 뒤 안내합니다." },
    { label: "차량 연계", value: "가이드 서비스와 차량이 함께 필요한 경우 카니발·스타리아, 쏠라티, 대형버스 중 일정과 인원에 맞춰 함께 상담할 수 있습니다." },
    { label: "전문 통역", value: "기업 미팅이나 전문 통역이 필요한 경우 업무 내용과 필요한 언어·분야를 확인한 뒤 상담해드립니다." }
  ],
  checklist: {
    eyebrow: "INQUIRY INFORMATION",
    title: "문의에 필요한 정보",
    description: "아직 모든 일정이 확정되지 않았더라도 확인된 내용만으로 문의하실 수 있습니다. 기업 미팅이나 전문 통역은 업무 내용과 필요한 분야를 추가로 확인합니다.",
    items: [
      "이용 날짜와 시간",
      "필요한 언어",
      "인원",
      "여행 또는 방문 목적",
      "확정된 일정과 방문 지역",
      "미팅 장소",
      "가이드 단독 또는 차량 연계 여부",
      "기타 요청사항"
    ]
  },
  contactType: "가이드 문의",
  ctaTitle: "좋은 가이드와 함께 한국 일정을 준비해보세요.",
  ctaDescription: "여행 목적과 일정, 필요한 언어를 알려주시면 사이투어가 적합한 가이드 서비스를 상담해드립니다.",
  ctaLabel: "가이드 문의하기"
};
