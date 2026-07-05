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
    title: "DMZ 투어",
    description: "비무장지대와 평화 관광지를 전문적으로 안내합니다.",
    image: imagePaths.services.dmz,
    imageAlt: "DMZ 투어 서비스",
    imagePosition: "center"
  },
  {
    english: "SEOUL CITY TOUR",
    title: "서울 시티투어",
    description: "경복궁, 북촌, 명동, 한강 등 서울의 매력을 맞춤 일정으로 소개합니다.",
    image: imagePaths.services.seoulCity,
    imageAlt: "서울 시티투어 서비스",
    imagePosition: "center"
  },
  {
    english: "AIRPORT TRANSFER",
    title: "공항픽업 & 샌딩",
    description: "인천공항·김포공항에서 호텔까지 편안하게 연결합니다.",
    image: imagePaths.services.airportTransfer,
    imageAlt: "공항픽업 및 샌딩 서비스",
    imagePosition: "center"
  },
  {
    english: "PRIVATE TOUR",
    title: "프라이빗 투어",
    description: "인원, 일정, 목적에 맞춘 단독 맞춤 투어를 제공합니다.",
    image: imagePaths.services.privateTour,
    imageAlt: "프라이빗 투어 서비스",
    imagePosition: "center"
  },
  {
    english: "GUIDE SERVICE",
    title: "통역 가이드",
    description: "영어·일본어·중국어 가이드 수배가 가능합니다.",
    image: imagePaths.services.guideService,
    imageAlt: "통역 가이드 서비스",
    imagePosition: "center"
  },
  {
    english: "CORPORATE EVENTS",
    title: "기업행사",
    description: "기업 방문, 인센티브, 국제행사, 단체 운영을 지원합니다.",
    image: imagePaths.services.corporateEvents,
    imageAlt: "기업행사 운영 서비스",
    imagePosition: "center"
  }
];
