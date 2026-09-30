import { imagePaths } from "@/data/images";
import type { ServiceDetail } from "@/data/services/types";

export const airportService: ServiceDetail = {
  slug: "airport-transfer",
  category: "AIRPORT TRANSFER",
  englishTitle: "AIRPORT PICK-UP & SEND-OFF",
  title: "공항 픽업 & 샌딩",
  subtitle: "항공편과 이동 인원에 맞춰 공항 이동을 준비합니다.",
  summary: "인천공항과 김포공항에서 목적지까지 편안하게 연결합니다.",
  description: "항공편 도착 시간에 맞춰 전용 차량 이동과 기본 안내를 준비합니다.",
  heroImage: imagePaths.services.airportTransfer,
  image: imagePaths.services.airportTransfer,
  duration: "편도 기준",
  recommendedFor: ["입국 고객", "단체 이동", "비즈니스 방문"],
  quickInfo: [
    { label: "공항", value: "인천공항 · 김포공항" },
    { label: "이동 형태", value: "픽업 또는 샌딩" },
    { label: "차량", value: "인원과 수하물 확인 후 조율" }
  ],
  categories: [
    { title: "PICK-UP", description: "항공편 도착 시간과 미팅 정보를 확인해 목적지 이동을 준비합니다." },
    { title: "SEND-OFF", description: "출발 항공편과 출발지를 기준으로 공항 이동 일정을 조율합니다." }
  ],
  itinerary: [
    { title: "항공편 확인", description: "편명, 도착·출발 시간, 이용 공항을 확인합니다." },
    { title: "인원·수하물 확인", description: "적합한 차량을 조율하기 위한 정보를 확인합니다." },
    { title: "미팅 정보 안내", description: "확정된 만남 장소와 이동 정보를 전달합니다." },
    { title: "목적지 이동", description: "확정된 출발지와 목적지 사이를 운행합니다." }
  ],
  vehicleInfo: [
    { title: "차량 종류", description: "인원과 수하물 수량을 확인한 뒤 적합한 차량을 안내합니다." },
    { title: "수용 인원", description: "차량별 수용 기준은 실제 탑승 인원과 짐을 함께 확인해 결정합니다." },
    { title: "수하물", description: "예약 시 캐리어 등 수하물 수량과 크기를 알려주세요." }
  ],
  usageInfo: [
    { label: "미팅 방법", value: "공항과 항공편에 맞춰 상담 후 안내" },
    { label: "대기 안내", value: "항공편 및 현장 상황을 확인해 예약 시 안내" },
    { label: "요금", value: "구간·인원·차량 확인 후 견적 안내" }
  ],
  included: ["전용 차량", "드라이버", "공항 미팅 안내", "주차비·통행료 포함 여부 상담 후 확정"],
  excluded: ["경유지 추가 여부"],
  notices: ["정확한 차량 배정을 위해 항공편, 인원, 수하물 정보를 알려주세요.", "요금표는 운영 기준 확인 후 별도 데이터로 추가할 수 있습니다."],
  contactType: "공항픽업 & 샌딩"
};
