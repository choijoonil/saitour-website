import { imagePaths } from "@/data/images";
import type { ServiceDetail } from "@/data/services/types";

export const seoulService: ServiceDetail = {
  slug: "seoul-city-tour",
  category: "SEOUL CITY TOUR",
  englishTitle: "SEOUL CITY TOUR",
  title: "서울 시티투어",
  subtitle: "관심사와 체류 일정에 맞는 서울 여행을 구성합니다.",
  summary: "경복궁, 북촌, N서울타워 등 서울 대표 코스를 맞춤형으로 운영합니다.",
  description: "고객의 관심사와 체류 일정에 맞춰 서울의 역사, 문화, 전망 명소를 효율적으로 연결합니다.",
  heroImage: imagePaths.services.seoulCity,
  image: imagePaths.services.seoulCity,
  duration: "반일 또는 종일",
  recommendedFor: ["외국인 한국여행", "가족 방문", "비즈니스 게스트"],
  quickInfo: [
    { label: "일정 형태", value: "반일 또는 종일" },
    { label: "코스 구성", value: "관심사와 체류 일정에 맞춰 조율" },
    { label: "운영 지원", value: "차량 및 전문 가이드 조율" }
  ],
  courses: [
    { title: "역사·궁궐", description: "서울의 역사와 전통을 중심으로 코스를 구성할 수 있습니다." },
    { title: "서울 핵심 명소", description: "대표 명소를 체류 시간과 이동 동선에 맞춰 연결합니다." },
    { title: "전통문화", description: "전통문화에 관심 있는 고객을 위한 일정을 상담합니다." },
    { title: "서울 야경", description: "야간 시간대의 서울을 경험할 수 있는 코스를 상담합니다." }
  ],
  itinerary: [
    { title: "희망 일정 확인", description: "방문일, 인원, 관심사를 확인합니다." },
    { title: "서울 코스 설계", description: "체류 시간과 이동 동선을 기준으로 제안합니다." },
    { title: "차량 및 가이드 조율", description: "필요한 운영 구성을 확인합니다." },
    { title: "현장 안내", description: "확정된 코스로 일정을 진행합니다." },
    { title: "일정 종료", description: "약속된 장소까지 이동을 마무리합니다." }
  ],
  highlights: [
    { title: "역사", description: "궁궐과 전통 공간을 중심으로 구성할 수 있습니다." },
    { title: "문화", description: "서울의 생활문화와 대표 지역을 함께 살펴볼 수 있습니다." },
    { title: "전망·야경", description: "서울의 전경과 야간 명소를 일정에 포함할 수 있습니다." }
  ],
  usageInfo: [
    { label: "코스", value: "희망 장소와 운영 가능 여부 확인 후 확정" },
    { label: "이동", value: "인원과 동선에 맞춰 차량 조율" },
    { label: "안내", value: "요청 언어에 맞춰 가이드 조율" }
  ],
  included: ["맞춤 코스 상담", "가이드 운영 여부 상담", "차량 포함 여부 상담", "입장료 포함 여부 상담 후 확정"],
  excluded: ["식사", "개인 비용"],
  notices: ["방문지 운영일과 교통 상황에 따라 동선은 조정될 수 있습니다.", "최종 코스와 포함사항은 상담 후 확정합니다."],
  contactType: "서울 시티투어"
};
