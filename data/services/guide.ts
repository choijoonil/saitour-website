import { imagePaths } from "@/data/images";
import type { ServiceDetail } from "@/data/services/types";

export const guideService: ServiceDetail = {
  slug: "guide-service",
  category: "GUIDE SERVICE",
  englishTitle: "INTERPRETATION GUIDE SERVICE",
  title: "통역 가이드 서비스",
  subtitle: "일정 성격과 필요한 언어에 맞는 가이드 운영을 조율합니다.",
  summary: "일정 성격에 맞는 전문 가이드를 수배하고 운영을 지원합니다.",
  description: "기업 방문, 시티투어, DMZ 투어에 필요한 언어별 가이드 운영을 조율합니다.",
  heroImage: imagePaths.services.guideService,
  image: imagePaths.services.guideService,
  duration: "상담 후 확정",
  recommendedFor: ["외국인 고객", "기업 행사", "전문 안내"],
  quickInfo: [
    { label: "언어", value: "영어 · 일본어 · 중국어" },
    { label: "업무", value: "투어 안내 또는 비즈니스 수행" },
    { label: "차량", value: "포함·불포함 옵션 상담" }
  ],
  categories: [
    { title: "투어 가이드", description: "시티투어와 DMZ 등 여행 일정의 안내를 조율합니다." },
    { title: "비즈니스 수행", description: "기업 방문과 업무 일정에 필요한 커뮤니케이션을 상담합니다." },
    { title: "행사 가이드", description: "기업행사와 단체 일정의 안내 업무를 상담합니다." }
  ],
  itinerary: [
    { title: "언어 확인", description: "필요한 안내 언어를 확인합니다." },
    { title: "일정 성격 확인", description: "투어, 기업 방문 등 업무 범위를 확인합니다." },
    { title: "가이드 수배", description: "요청 내용에 맞는 가이드를 조율합니다." },
    { title: "운영 안내", description: "확정 일정과 만남 정보를 공유합니다." },
    { title: "일정 종료", description: "약속된 업무 범위에 따라 마무리합니다." }
  ],
  usageInfo: [
    { label: "지원 언어", value: "영어 · 일본어 · 중국어" },
    { label: "업무 범위", value: "일정 및 목적 확인 후 확정" },
    { label: "차량 옵션", value: "가이드 단독 또는 차량 포함 구성 상담" }
  ],
  included: ["가이드 수배", "일정 공유", "현장 커뮤니케이션"],
  excluded: ["차량", "입장료", "식사"],
  notices: ["전문 분야와 업무 범위는 상담 시 구체적으로 알려주세요.", "차량 포함 여부와 현장 비용은 확정 전 별도로 안내합니다."],
  contactType: "가이드 문의"
};
