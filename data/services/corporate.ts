import { imagePaths } from "@/data/images";
import type { ServiceDetail } from "@/data/services/types";

export const corporateService: ServiceDetail = {
  slug: "corporate-events",
  category: "CORPORATE EVENTS",
  englishTitle: "CORPORATE EVENTS & INCENTIVE",
  title: "기업행사 & 인센티브",
  subtitle: "행사 목적과 인원, 이동 동선을 기준으로 운영을 조율합니다.",
  summary: "기업 방문, 워크숍, 인센티브 목적에 맞는 행사를 운영합니다.",
  description: "행사 목적과 인원, 이동 동선을 기준으로 차량, 가이드, 현장 운영 흐름을 조율합니다.",
  heroImage: imagePaths.services.corporateEvents,
  image: imagePaths.services.corporateEvents,
  duration: "상담 후 확정",
  recommendedFor: ["기업 방문", "워크숍", "인센티브"],
  quickInfo: [
    { label: "행사 유형", value: "기업 방문 · 워크숍 · 인센티브" },
    { label: "이동", value: "단체차량 및 동선 조율" },
    { label: "운영", value: "가이드와 현장 운영 지원" }
  ],
  categories: [
    { title: "기업 방문", description: "방문 목적과 일정에 맞춰 이동 및 운영 흐름을 조율합니다." },
    { title: "VIP 의전", description: "고객 동선과 필요한 지원 범위를 확인해 준비합니다." },
    { title: "인센티브", description: "단체의 목적과 규모에 맞는 여행 운영을 상담합니다." },
    { title: "단체차량", description: "인원과 이동 동선을 기준으로 차량 운영을 조율합니다." },
    { title: "가이드", description: "필요 언어와 일정에 맞는 가이드 운영을 상담합니다." },
    { title: "현장 운영", description: "확정된 일정의 현장 진행과 커뮤니케이션을 지원합니다." }
  ],
  itinerary: [
    { title: "문의 접수", description: "행사 일정과 기본 정보를 확인합니다." },
    { title: "행사 목적 확인", description: "참가자와 필요한 운영 범위를 정리합니다." },
    { title: "일정 및 이동 설계", description: "방문지와 이동 동선을 조율합니다." },
    { title: "운영 인력 조율", description: "차량, 가이드와 현장 지원을 구성합니다." },
    { title: "현장 진행", description: "확정된 운영안에 따라 행사를 지원합니다." }
  ],
  usageInfo: [
    { label: "필수 정보", value: "일정 · 인원 · 방문 목적 · 이동 동선" },
    { label: "차량", value: "참가 인원과 운영 동선 확인 후 조율" },
    { label: "가이드", value: "필요 언어와 업무 범위 확인 후 조율" }
  ],
  included: ["행사 일정 상담", "차량 및 가이드 조율", "현장 운영 안내"],
  excluded: ["항공권", "숙박", "개별 선택 비용"],
  notices: ["구체적인 운영 범위와 포함사항은 행사 정보 확인 후 확정합니다."],
  contactType: "기업행사"
};
