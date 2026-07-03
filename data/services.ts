import { imagePaths } from "@/data/images";

export type RepresentativeService = {
  english: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
};

export const representativeServices: RepresentativeService[] = [
  {
    english: "DMZ TOUR",
    title: "비무장지대 전문 투어",
    description: "국내외 고객을 위한 DMZ 프라이빗 투어를 전문적으로 운영합니다.",
    image: imagePaths.services.dmz,
    imageAlt: "DMZ 투어 서비스",
    imagePosition: "center"
  },
  {
    english: "SEOUL CITY TOUR",
    title: "서울 시티투어",
    description: "서울 주요 명소와 고객의 관심사를 반영한 맞춤형 시티투어를 제공합니다.",
    image: imagePaths.services.seoulCity,
    imageAlt: "서울 시티투어 서비스",
    imagePosition: "center"
  },
  {
    english: "AIRPORT TRANSFER",
    title: "공항 픽업 & 샌딩",
    description: "인천공항 전용차량 이동부터 호텔 도착까지 편안하게 연결합니다.",
    image: imagePaths.services.airportTransfer,
    imageAlt: "공항 픽업 서비스",
    imagePosition: "center"
  },
  {
    english: "CORPORATE EVENTS",
    title: "기업행사 & 인센티브",
    description: "기업 방문, 워크숍, 인센티브, 해외시찰 등 목적에 맞는 행사를 운영합니다.",
    image: imagePaths.services.corporateEvents,
    imageAlt: "기업행사와 워크숍 운영 서비스",
    imagePosition: "center"
  },
  {
    english: "PRIVATE TOUR",
    title: "맞춤형 프라이빗 투어",
    description: "일정, 차량, 식사, 가이드까지 고객에게 맞춘 여행을 기획합니다.",
    image: imagePaths.services.privateTour,
    imageAlt: "프라이빗 투어 서비스",
    imagePosition: "center"
  },
  {
    english: "GUIDE SERVICE",
    title: "통역 가이드 서비스",
    description: "영어 · 일본어 · 중국어 전문 가이드 수배가 가능합니다.",
    image: imagePaths.services.guideService,
    imageAlt: "통역 가이드 서비스",
    imagePosition: "center"
  }
];
