import { imagePaths } from "@/data/images";
import type { ServiceDetail } from "@/data/services/types";

export const corporateService: ServiceDetail = {
  slug: "corporate-events",
  category: "CORPORATE EVENTS",
  englishTitle: "CORPORATE EVENTS & INCENTIVE",
  title: "기업행사 & MICE",
  subtitle: "해외 임직원과 기업·기관 방문단의 한국 일정을 한 번에 준비합니다.",
  heroDescription: "공항 영접부터 차량, 가이드·통역, 호텔, 식사, 회의와 관광 프로그램, 출국 샌딩까지 행사 목적과 일정에 맞춰 필요한 서비스를 구성합니다.",
  summary: "기업·기관 방문단의 한국 일정을 필요한 서비스와 함께 준비합니다.",
  description: "고객이 확정한 공식 방문 일정과 행사 목적, 참가 인원과 이동 동선을 확인한 뒤 공항 이동부터 차량, 가이드·통역, 숙박, 식사, 회의와 관광 프로그램까지 필요한 서비스를 함께 구성합니다. 기업 방문, 해외 임직원 일정, 인센티브와 MICE 등 행사 성격에 맞춰 상담합니다.",
  heroImage: imagePaths.services.corporateEvents,
  image: imagePaths.services.corporateEvents,
  duration: "상담 후 확정",
  recommendedFor: ["해외 임직원·방문단", "MICE·인센티브", "VIP·비즈니스"],
  quickInfo: [
    { label: "행사 유형", value: "기업·기관·MICE 맞춤 행사" },
    { label: "대상", value: "해외 임직원·외국인 방문단" },
    { label: "견적", value: "행사별 맞춤 견적" }
  ],
  coursesEyebrow: "CORPORATE SERVICES",
  coursesTitle: "주요 지원 분야",
  coursesColumns: 2,
  courses: [
    {
      title: "해외 임직원·기업 방문단",
      description: "확정된 공식 일정에 맞춰 공항 이동, 호텔, 방문 일정 간 이동과 필요한 부대 일정을 구성합니다."
    },
    {
      title: "MICE·인센티브",
      description: "행사 일정과 참가 인원에 맞춰 차량, 가이드·통역, 숙박, 식사와 관광 프로그램을 함께 구성합니다."
    },
    {
      title: "VIP·비즈니스 의전",
      description: "임원과 주요 방문객의 일정에 맞춰 전용 차량, 가이드·통역과 필요한 이동 서비스를 준비합니다."
    },
    {
      title: "기업·기관 연수 및 단체 프로그램",
      description: "연수와 단체 일정에 필요한 이동, 식사, 관광·문화 프로그램과 현장 진행을 행사 일정에 맞춰 구성합니다."
    }
  ],
  itineraryTitle: "행사 준비 과정",
  itinerary: [
    { title: "행사 문의", description: "행사 날짜와 기본 요청사항을 알려주세요." },
    { title: "일정·인원 확인", description: "행사 일정, 참가 인원과 방문 목적을 확인합니다." },
    { title: "이동·부대 일정 구성", description: "확정된 공식 일정에 맞춰 이동 동선과 필요한 숙박·식사·관광 등의 구성을 검토합니다." },
    { title: "차량·가이드·예약 확정", description: "차량, 가이드·통역과 필요한 예약사항을 확인하고 최종 견적을 안내합니다." },
    { title: "현장 진행", description: "확정된 일정에 따라 필요한 이동과 행사 서비스를 진행합니다." }
  ],
  vehicleInfoTitle: "차량·가이드·통역 안내",
  vehicleInfoColumns: 2,
  vehicleInfo: [
    {
      title: "행사 차량",
      description: "카니발·스타리아, 쏠라티, 대형버스 중 참가 인원과 행사 일정, 이동 동선에 맞는 차량을 안내합니다."
    },
    {
      title: "가이드·통역",
      description: "영어·일본어·중국어 가이드 또는 통역을 행사 목적과 일정, 필요한 업무 범위를 확인한 뒤 안내합니다."
    }
  ],
  checklist: {
    eyebrow: "QUOTE INFORMATION",
    title: "견적에 필요한 정보",
    items: [
      "행사 날짜",
      "참가 인원",
      "행사 목적",
      "확정된 공식 일정",
      "공항 및 항공편 정보",
      "숙박 또는 이용 호텔",
      "필요한 차량·가이드·통역",
      "식사·회의·관광 등 추가 요청사항"
    ]
  },
  includedTitle: "맞춤 구성 가능",
  excludedTitle: "별도 확인사항",
  included: [
    "전용 차량",
    "공항 픽업·샌딩",
    "가이드·통역",
    "호텔",
    "식사",
    "회의장",
    "관광 일정",
    "관광지 입장",
    "공연·크루즈·티켓",
    "현장 담당자·행사 운영 인력"
  ],
  excluded: [
    "항공권 및 개인 비용",
    "고객이 별도로 예약한 서비스",
    "확정 견적에 포함되지 않은 비용",
    "최종 포함 범위와 비용은 행사 내용과 예약 조건을 확인한 뒤 맞춤 견적에서 안내합니다."
  ],
  contactType: "기업행사",
  ctaTitle: "기업·기관 방문단의 한국 일정을 준비하고 계신가요?",
  ctaDescription: "행사 일정과 인원, 필요한 서비스를 알려주시면 맞춤 구성과 견적을 안내해드립니다.",
  ctaLabel: "기업행사 견적 문의하기"
};
