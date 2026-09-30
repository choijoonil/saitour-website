import { imagePaths } from "@/data/images";
import type { ServiceDetail } from "@/data/services/types";

export const dmzService: ServiceDetail = {
  slug: "dmz-tour",
  category: "DMZ TOUR",
  englishTitle: "DMZ TOUR",
  title: "DMZ 투어",
  subtitle: "방문 가능 일정부터 이동과 가이드 운영까지 함께 준비합니다.",
  summary: "자유의 다리, 제3땅굴 등 주요 코스를 목적에 맞게 안내합니다.",
  description: "외국인 고객과 비즈니스 방문객을 위한 DMZ 일정, 이동, 가이드 운영을 안정적으로 준비합니다.",
  heroImage: imagePaths.services.dmz,
  image: imagePaths.services.dmz,
  duration: "반일 또는 종일",
  recommendedFor: ["외국인 고객", "비즈니스 방문", "역사 문화 투어"],
  quickInfo: [
    { label: "운영 형태", value: "반일 또는 종일" },
    { label: "일정", value: "방문 가능 일정 확인 후 조율" },
    { label: "운영 지원", value: "차량 및 전문 가이드 조율" }
  ],
  categories: [
    { title: "코스 상담", description: "방문 목적과 일정에 맞춰 가능한 DMZ 코스를 확인합니다." },
    { title: "출발·이동 안내", description: "출발 장소와 차량 이동 흐름을 일정에 맞춰 조율합니다." },
    { title: "현장 운영", description: "가이드 배정과 현장 진행에 필요한 내용을 사전에 안내합니다." }
  ],
  itinerary: [
    { title: "문의 접수", description: "희망 일정과 인원을 확인합니다." },
    { title: "방문 가능 일정 확인", description: "운영 가능 여부와 필요한 준비사항을 확인합니다." },
    { title: "코스 및 차량 조율", description: "출발 장소와 이동 구성을 정리합니다." },
    { title: "가이드 배정", description: "요청 언어와 일정에 맞춰 조율합니다." },
    { title: "현장 진행", description: "확정된 일정에 따라 투어를 운영합니다." }
  ],
  usageInfo: [
    { label: "신분 확인", value: "예약 전 필요한 신분증 또는 여권 정보를 확인합니다." },
    { label: "출입 안내", value: "출입 및 운영 관련 사항은 상담 시 최신 기준으로 안내합니다." },
    { label: "일정 확정", value: "방문 가능 여부를 확인한 뒤 최종 일정을 확정합니다." }
  ],
  included: ["일정 상담", "전용 차량 조율", "가이드 운영 여부 상담", "입장료 포함 여부 상담 후 확정"],
  excluded: ["식사", "개인 비용"],
  notices: [
    "DMZ 운영 및 출입 관련 조건은 시기에 따라 달라질 수 있어 예약 전 확인이 필요합니다.",
    "확정 코스와 출발 정보는 상담 후 안내합니다."
  ],
  contactType: "DMZ 투어"
};
