import { imagePaths } from "@/data/images";
import type { ServiceDetail } from "@/data/services/types";

export const privateTourService: ServiceDetail = {
  slug: "private-tour",
  category: "PRIVATE TOUR",
  englishTitle: "PRIVATE TOUR",
  title: "맞춤형 프라이빗 투어",
  subtitle: "원하는 일정에 맞춰 나만의 한국 여행을 준비해보세요.",
  heroDescription: "서울부터 전국 각지까지, 당일 여행부터 여러 날의 일정까지 여행 목적과 일정에 맞춰 전용 차량과 전문 가이드를 함께 구성합니다.",
  summary: "정해진 패키지에 일정을 맞추지 않고, 고객이 원하는 여행에서 시작합니다.",
  description: "여행 목적과 인원, 일정, 희망 방문지를 먼저 확인한 뒤 이동 동선과 필요한 서비스를 함께 구성합니다. 가족·소규모 여행부터 VIP·비즈니스 방문까지 목적에 맞는 일정을 상담해드립니다. 서울 호텔 또는 인천·김포공항 픽업과 관광 일정도 연계할 수 있습니다.",
  heroImage: imagePaths.services.privateTour,
  image: imagePaths.services.privateTour,
  duration: "상담 후 확정",
  recommendedFor: ["가족·소규모 여행", "VIP·비즈니스 방문", "전국 맞춤여행"],
  quickInfo: [
    { label: "여행 일정", value: "당일 또는 다일 맞춤 일정" },
    { label: "여행 지역", value: "서울·근교부터 전국까지" },
    { label: "차량·가이드", value: "인원과 일정에 맞춰 상담" }
  ],
  coursesEyebrow: "PRIVATE TOUR IDEAS",
  coursesTitle: "이런 여행이 가능합니다",
  courses: [
    {
      title: "서울 & 근교 프라이빗 투어",
      description: "서울의 주요 명소와 남이섬·수원 등 근교 여행을 희망 일정과 관심사에 맞춰 구성합니다."
    },
    {
      title: "지방 & 다일 맞춤여행",
      description: "서울 외 지역 또는 1박 이상의 여행을 여행 기간과 희망 지역에 맞춰 구성합니다."
    },
    {
      title: "VIP & 비즈니스 맞춤 일정",
      description: "VIP, 기업 임원과 비즈니스 방문객의 방문 목적과 일정에 맞춰 차량과 가이드를 구성합니다."
    }
  ],
  itineraryTitle: "맞춤 일정 준비 과정",
  itinerary: [
    { title: "여행 문의", description: "희망 날짜와 간단한 여행 계획을 남겨주세요." },
    { title: "일정·인원 확인", description: "여행 기간과 참가 인원을 확인합니다." },
    { title: "희망 지역·방문지 확인", description: "가고 싶은 지역과 꼭 방문하고 싶은 장소를 확인합니다." },
    { title: "차량·가이드 및 일정 제안", description: "이동 동선에 맞춰 차량, 가이드와 여행 일정을 제안합니다." },
    { title: "최종 일정 확정", description: "상담 내용을 반영해 최종 일정과 맞춤 견적을 안내합니다." }
  ],
  vehicleInfoTitle: "차량·가이드 안내",
  vehicleInfo: [
    {
      title: "전용 차량",
      description: "카니발·스타리아, 쏠라티, 대형버스 중 인원과 이동 일정에 맞는 차량을 안내합니다."
    },
    {
      title: "전문 가이드",
      description: "영어·일본어·중국어 가이드 상담이 가능하며 여행 목적과 일정에 맞춰 안내합니다."
    }
  ],
  checklist: {
    eyebrow: "BOOKING INFORMATION",
    title: "예약 시 필요한 정보",
    items: [
      "이용 날짜",
      "인원",
      "희망 지역 또는 방문지",
      "출발 장소",
      "종료 장소",
      "당일 또는 다일 일정",
      "희망 가이드 언어",
      "기타 요청사항"
    ]
  },
  includedTitle: "맞춤 구성 가능",
  excludedTitle: "별도 확인사항",
  included: ["전용 차량", "전문 가이드", "관광 일정 구성", "관광지 입장료", "식사", "호텔", "공항 픽업·샌딩 연계"],
  excluded: [
    "개인 비용",
    "고객이 별도로 예약한 서비스",
    "확정 견적에 포함되지 않은 비용",
    "최종 포함 범위와 비용은 상담 후 확정 견적에서 안내"
  ],
  contactType: "맞춤여행",
  ctaTitle: "원하는 일정으로 프라이빗 투어를 준비해보세요.",
  ctaLabel: "프라이빗 투어 문의하기"
};
