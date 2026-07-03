import { imagePaths } from "@/data/images";

export type Tour = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  duration: string;
  itinerary: string[];
  included: string[];
  excluded: string[];
  recommendedFor: string[];
};

export const tours: Tour[] = [
  {
    slug: "dmz-tour",
    category: "DMZ TOUR",
    title: "DMZ 투어",
    summary: "자유의 다리, 제3땅굴 등 주요 코스를 목적에 맞게 안내합니다.",
    description: "외국인 고객과 비즈니스 방문객을 위한 DMZ 일정, 이동, 가이드 운영을 안정적으로 준비합니다.",
    image: imagePaths.services.dmz,
    duration: "반일 또는 종일",
    itinerary: ["문의 접수", "방문 가능 일정 확인", "코스 및 차량 조율", "가이드 배정", "현장 진행"],
    included: ["일정 상담", "전용 차량 조율", "전문 가이드", "입장료"],
    excluded: ["식사", "개인 비용"],
    recommendedFor: ["외국인 고객", "비즈니스 방문", "역사 문화 투어"]
  },
  {
    slug: "seoul-city-tour",
    category: "SEOUL CITY TOUR",
    title: "서울 시티투어",
    summary: "경복궁, 북촌, N서울타워 등 서울 대표 코스를 맞춤형으로 운영합니다.",
    description: "고객의 관심사와 체류 일정에 맞춰 서울의 역사, 문화, 전망 명소를 효율적으로 연결합니다.",
    image: imagePaths.services.seoulCity,
    duration: "반일 또는 종일",
    itinerary: ["희망 일정 확인", "서울 코스 설계", "차량 및 가이드 조율", "현장 안내", "일정 종료"],
    included: ["맞춤 코스 상담", "전문 가이드", "차량 조율", "입장료"],
    excluded: ["식사", "개인 비용"],
    recommendedFor: ["외국인 한국여행", "가족 방문", "비즈니스 게스트"]
  },
  {
    slug: "airport-transfer",
    category: "AIRPORT TRANSFER",
    title: "공항 픽업 & 샌딩",
    summary: "인천공항과 김포공항에서 목적지까지 편안하게 연결합니다.",
    description: "항공편 도착 시간에 맞춰 전용 차량 이동과 기본 안내를 준비합니다.",
    image: imagePaths.services.airportTransfer,
    duration: "편도 기준",
    itinerary: ["항공편 확인", "공항 미팅", "수하물 이동 안내", "목적지 도착"],
    included: ["전용 차량", "드라이버", "공항 미팅 안내", "주차비", "통행료"],
    excluded: ["경유지 추가 여부"],
    recommendedFor: ["입국 고객", "단체 이동", "비즈니스 방문"]
  },
  {
    slug: "corporate-events",
    category: "CORPORATE EVENTS",
    title: "기업행사 & 인센티브",
    summary: "기업 방문, 워크숍, 인센티브 목적에 맞는 행사를 운영합니다.",
    description: "행사 목적과 인원, 이동 동선을 기준으로 차량, 가이드, 현장 운영 흐름을 조율합니다.",
    image: imagePaths.services.corporateEvents,
    duration: "상담 후 확정",
    itinerary: ["문의 접수", "행사 목적 확인", "일정 및 이동 설계", "운영 인력 조율", "현장 진행"],
    included: ["행사 일정 상담", "차량 및 가이드 조율", "현장 운영 안내"],
    excluded: ["항공권", "숙박", "개별 선택 비용"],
    recommendedFor: ["기업 방문", "워크숍", "인센티브"]
  },
  {
    slug: "private-tour",
    category: "PRIVATE TOUR",
    title: "맞춤형 프라이빗 투어",
    summary: "고객 일정과 목적에 맞춘 프라이빗 여정을 설계합니다.",
    description: "정해진 코스보다 고객 상황에 맞는 일정을 우선하여 현실적인 여정 계획을 제안합니다.",
    image: imagePaths.services.privateTour,
    duration: "상담 후 확정",
    itinerary: ["문의 접수", "희망 일정 확인", "동선 제안", "세부 조율", "일정 확정"],
    included: ["일정 상담", "차량 및 가이드 조율", "현지 운영 안내"],
    excluded: ["항공권", "호텔", "개별 예약 비용"],
    recommendedFor: ["가족여행", "프라이빗 투어", "특수 목적 방문"]
  },
  {
    slug: "guide-service",
    category: "GUIDE SERVICE",
    title: "통역 가이드 서비스",
    summary: "일정 성격에 맞는 전문 가이드를 수배하고 운영을 지원합니다.",
    description: "기업 방문, 시티투어, DMZ 투어에 필요한 언어별 가이드 운영을 조율합니다.",
    image: imagePaths.services.guideService,
    duration: "상담 후 확정",
    itinerary: ["언어 확인", "일정 성격 확인", "가이드 수배", "운영 안내", "일정 종료"],
    included: ["가이드 수배", "일정 공유", "현장 커뮤니케이션"],
    excluded: ["차량", "입장료", "식사"],
    recommendedFor: ["외국인 고객", "기업 행사", "전문 안내"]
  }
];

export function getTour(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}
