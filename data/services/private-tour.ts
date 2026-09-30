import { imagePaths } from "@/data/images";
import type { ServiceDetail } from "@/data/services/types";

export const privateTourService: ServiceDetail = {
  slug: "private-tour",
  category: "PRIVATE TOUR",
  englishTitle: "PRIVATE TOUR",
  title: "맞춤형 프라이빗 투어",
  subtitle: "정해진 상품보다 고객의 일정과 목적을 먼저 살핍니다.",
  summary: "고객 일정과 목적에 맞춘 프라이빗 여정을 설계합니다.",
  description: "정해진 코스보다 고객 상황에 맞는 일정을 우선하여 현실적인 여정 계획을 제안합니다.",
  heroImage: imagePaths.services.privateTour,
  image: imagePaths.services.privateTour,
  duration: "상담 후 확정",
  recommendedFor: ["가족여행", "프라이빗 투어", "특수 목적 방문"],
  quickInfo: [
    { label: "일정", value: "희망 일정과 목적에 맞춰 설계" },
    { label: "지역", value: "서울 · 수도권 · 근교 상담" },
    { label: "운영 구성", value: "차량과 가이드 조합 상담" }
  ],
  categories: [
    { title: "서울", description: "서울의 역사, 문화, 대표 명소를 관심사에 맞춰 구성합니다." },
    { title: "수도권", description: "서울과 연결할 수 있는 수도권 일정을 상담합니다." },
    { title: "근교", description: "이동 시간과 체류 일정을 고려한 근교 여행을 상담합니다." },
    { title: "맞춤 목적", description: "가족 방문, 비즈니스 손님 등 여행 목적에 맞춰 조율합니다." }
  ],
  itinerary: [
    { title: "문의 접수", description: "여행 목적, 인원, 일정을 확인합니다." },
    { title: "희망 일정 확인", description: "꼭 방문하고 싶은 장소와 필요한 지원을 확인합니다." },
    { title: "동선 제안", description: "이동 시간과 체류 시간을 고려해 제안합니다." },
    { title: "세부 조율", description: "차량, 가이드와 포함사항을 정리합니다." },
    { title: "일정 확정", description: "합의된 운영 내용을 최종 안내합니다." }
  ],
  vehicleInfo: [
    { title: "차량 중심", description: "전용 차량 이동이 필요한 일정으로 구성할 수 있습니다." },
    { title: "가이드 중심", description: "전문 안내가 필요한 일정으로 구성할 수 있습니다." },
    { title: "차량 + 가이드", description: "이동과 현장 안내를 함께 조율할 수 있습니다." }
  ],
  included: ["일정 상담", "차량 및 가이드 조율", "현지 운영 안내"],
  excluded: ["항공권", "호텔", "개별 예약 비용"],
  notices: ["운영 지역과 세부 코스는 희망 일정 및 현지 상황을 확인한 뒤 확정합니다."],
  contactType: "맞춤여행"
};
