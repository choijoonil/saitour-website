import { imagePaths } from "@/data/images";
import type { ServiceDetail } from "@/data/services/types";

export const airportService: ServiceDetail = {
  slug: "airport-transfer",
  category: "AIRPORT TRANSFER",
  englishTitle: "AIRPORT PICK-UP & SEND-OFF",
  title: "공항 픽업 & 샌딩",
  subtitle: "인천국제공항과 김포공항의 픽업·샌딩 이동을 제공합니다.",
  summary: "항공편, 탑승 인원, 수하물에 맞는 차량으로 공항과 목적지를 연결합니다.",
  description: "전문기사가 예약 정보를 확인하고 공항 픽업 또는 출발지 픽업부터 목적지 이동까지 함께합니다.",
  heroImage: imagePaths.services.airportTransfer,
  image: imagePaths.services.airportTransfer,
  duration: "편도 기준",
  recommendedFor: ["입국 고객", "단체 이동", "비즈니스 방문"],
  quickInfo: [
    { label: "공항", value: "인천국제공항 · 김포공항" },
    { label: "이동 형태", value: "픽업 또는 샌딩" },
    { label: "차량", value: "인원과 수하물 확인 후 적합한 차량 안내" }
  ],
  categories: [
    {
      title: "PICK-UP",
      description: "항공편 도착정보를 확인한 전문기사가 피켓으로 고객을 맞이한 뒤 예약된 목적지까지 이동합니다.",
      media: {
        alt: "공항 미팅 및 피켓 서비스",
        placeholder: "공항 미팅·피켓 서비스 사진 교체 영역"
      }
    },
    {
      title: "SEND-OFF",
      description: "출발지, 이용 공항, 출발 항공편과 이동시간을 확인하여 공항까지 이동합니다."
    }
  ],
  itinerary: [
    { title: "항공편 정보 확인", description: "예약 시 항공편명과 도착 정보를 확인합니다." },
    { title: "전문기사 공항 대기", description: "담당 전문기사가 항공편 도착정보를 확인하고 고객 도착에 맞춰 미팅을 준비합니다." },
    { title: "피켓 미팅", description: "고객이 원하는 이름 또는 단체명이 표시된 피켓을 들고 공항에서 고객을 맞이합니다." },
    { title: "인사 및 목적지 확인", description: "고객과 인사 후 예약된 호텔 또는 목적지를 다시 확인합니다." },
    { title: "차량 이동 및 출발", description: "기사와 함께 주차장까지 이동한 뒤 배정된 차량에 탑승하여 목적지로 출발합니다." }
  ],
  itineraryTitle: "이용 절차",
  vehicleInfo: [
    {
      title: "카니발 / 스타리아",
      description: "1~5명의 소규모 개인·가족·비즈니스 이동에 이용합니다. 실제 차량은 인원과 수하물을 확인한 뒤 안내합니다.",
      media: {
        alt: "카니발 또는 스타리아 차량",
        placeholder: "카니발·스타리아 실제 차량 사진 교체 영역"
      }
    },
    {
      title: "쏠라티",
      description: "최대 14인승 차량이며, 공항 이동은 수하물을 고려해 약 10명까지 권장합니다. 실제 배정은 인원과 수하물을 확인한 뒤 안내합니다.",
      media: {
        alt: "쏠라티 차량",
        placeholder: "쏠라티 실제 차량 사진 교체 영역"
      }
    },
    {
      title: "대형버스",
      description: "단체 또는 수하물이 많은 고객에게 안내합니다. 실제 차량 배정은 인원과 수하물을 확인한 뒤 안내합니다.",
      media: {
        alt: "공항 이동 대형버스",
        placeholder: "대형버스 실제 차량 사진 교체 영역"
      }
    }
  ],
  vehicleInfoTitle: "차량 및 탑승 안내",
  pricing: {
    eyebrow: "SEOUL AIRPORT TRANSFER FARES",
    title: "서울 지역별 공항 픽업·샌딩 요금",
    description: "서울 지역을 5개 구역으로 나누어 김포공항과 인천공항 픽업·샌딩 기본요금을 안내합니다.",
    columns: [
      { key: "gimpo", label: "김포공항" },
      { key: "incheon", label: "인천공항" }
    ],
    rows: [
      { label: "제1구역", details: ["강서구"], values: { gimpo: "70,000원", incheon: "110,000원" } },
      {
        label: "제2구역",
        details: ["은평구", "서대문구", "마포구", "양천구", "영등포구", "구로구"],
        values: { gimpo: "80,000원", incheon: "120,000원" }
      },
      {
        label: "제3구역",
        details: ["종로구", "중구", "용산구", "동작구", "금천구", "관악구"],
        values: { gimpo: "90,000원", incheon: "130,000원" }
      },
      {
        label: "제4구역",
        details: ["강북구", "성북구", "동대문구", "성동구", "서초구", "강남구"],
        values: { gimpo: "100,000원", incheon: "140,000원" }
      },
      {
        label: "제5구역",
        details: ["도봉구", "노원구", "중랑구", "광진구", "강동구", "송파구"],
        values: { gimpo: "110,000원", incheon: "150,000원" }
      }
    ],
    notes: [
      "서울 외 지역은 출발지·목적지 및 이동거리를 확인한 후 별도 상담을 통해 요금을 안내드립니다.",
      "심야·새벽 운행(23:00~06:00)은 기본요금의 10% 할증이 적용됩니다.",
      "심야 할증은 차량 출발시간 기준으로 적용됩니다.",
      "추가 경유 및 별도 요청사항은 예약 시 최종 요금을 안내드립니다."
    ],
    media: {
      src: "/images/services/seoul-airport-transfer-zones.png",
      alt: "사이투어 서울 5개 구역 공항 픽업·샌딩 요금 안내 지도",
      fit: "contain",
      width: 1416,
      height: 861
    },
    ctaLabel: "공항 픽업 견적 문의"
  },
  checklist: {
    eyebrow: "BOOKING INFORMATION",
    title: "예약 시 필요한 정보",
    description: "정확한 차량과 이동 일정을 안내할 수 있도록 예약 시 아래 정보를 알려주세요.",
    items: [
      "이용 날짜",
      "항공편명",
      "도착 또는 출발 시간",
      "이용 공항",
      "탑승 인원",
      "수하물 정보",
      "출발지",
      "목적지",
      "피켓에 표시할 이름 또는 단체명"
    ]
  },
  included: ["전용 차량", "전문기사", "공항 픽업 또는 샌딩", "피켓 미팅(PICK-UP)"],
  excluded: ["주차비·통행료 포함 여부는 예약 조건에 따라 안내", "추가 경유는 상담 시 확인"],
  notices: [
    "정확한 차량 배정을 위해 탑승 인원과 수하물 정보를 알려주세요.",
    "대기 관련 안내와 주차비·통행료 포함 여부는 예약 조건에 따라 안내합니다."
  ],
  contactType: "공항픽업 & 샌딩",
  ctaLabel: "공항 픽업 견적 문의"
};
