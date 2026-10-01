import { imagePaths } from "@/data/images";
import type { ServiceDetail } from "@/data/services/types";

export const dmzService: ServiceDetail = {
  slug: "dmz-tour",
  category: "DMZ TOUR",
  englishTitle: "DMZ TOUR",
  title: "DMZ 투어",
  subtitle: "서울에서 출발해 DMZ의 주요 현장을\n둘러보는 맞춤형 투어입니다.",
  heroDescription: "임진각, 제3땅굴, 도라전망대와 통일촌을 전용 차량과 사이투어 전문 가이드로 만나보세요.",
  summary: "분단의 역사와 현재의 한반도, 평화와 안보의 현장을 직접 살펴보는 특별한 일정입니다.",
  description: "외국인 고객과 비즈니스 방문객, 역사·문화에 관심 있는 고객의 일정과 인원에 맞춰 DMZ 단독 투어 또는 서울 연계 일정을 안내합니다.",
  heroImage: imagePaths.services.dmz,
  image: imagePaths.services.dmz,
  duration: "반일 또는 종일",
  recommendedFor: ["외국인 고객", "비즈니스 방문", "역사 문화 투어"],
  compactIntroduction: true,
  quickInfo: [
    { label: "투어 형태", value: "DMZ 단독 또는 맞춤 연계 일정" },
    { label: "출발", value: "서울 호텔·지정 장소 또는 임진각 조인" },
    { label: "가이드", value: "영어·일본어·중국어 상담 가능" }
  ],
  coursesEyebrow: "DMZ HIGHLIGHTS",
  coursesTitle: "주요 방문지",
  coursesColumns: 2,
  courses: [
    {
      title: "임진각",
      description: "DMZ 관광을 준비하고 관련 전시와 평화 관광 공간을 살펴보는 출발 거점입니다.",
      media: {
        src: "/images/services/dmz-imjingak.webp",
        alt: "임진각 평화누리공원 인근 자유의 다리",
        credit: "Photo: JoshBerglund19",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Imjingak_Park_%26_the_Freedom_Bridge.jpg",
        license: "CC BY 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by/2.0/"
      }
    },
    {
      title: "제3땅굴",
      description: "지하 이동 구간을 직접 걸으며 DMZ의 역사적 배경을 살펴보는 코스입니다.",
      media: {
        src: "/images/services/dmz-third-tunnel.webp",
        alt: "제3땅굴 내부 이동 통로",
        credit: "Photo: Daugilas",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Inside_the_3rd_infiltration_tunnel_from_North_to_South_Korea_-_panoramio.jpg",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/"
      }
    },
    {
      title: "도라전망대",
      description: "전망 공간에서 접경 지역의 풍경을 살펴보는 DMZ 대표 방문지입니다.",
      media: {
        src: "/images/services/dmz-dora-observatory.webp",
        alt: "도라전망대 건물 전경",
        credit: "Photo: Dwxn",
        creditUrl: "https://commons.wikimedia.org/wiki/File:20240602_110854_Dora_Observatory,_Demilitarized_Zone_(DMZ),_South_Korea_01.jpg",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
      }
    },
    {
      title: "통일촌",
      description: "DMZ 인근 지역의 생활 모습을 살펴보는 코스입니다.",
      media: {
        src: "/images/services/dmz-unification-village.webp",
        alt: "DMZ 전망대 망원경으로 바라본 접경 지역"
      }
    }
  ],
  itineraryTitle: "DMZ 투어 일정 예시",
  itineraryRoomy: true,
  itineraryColumns: 3,
  itinerary: [
    { title: "약 07:00 · 서울 출발", description: "서울 호텔 또는 지정 장소에서 출발합니다." },
    { title: "오전 · 임진각", description: "임진각에 도착해 DMZ 관광을 준비합니다." },
    { title: "이후 · 제3땅굴", description: "제3땅굴을 방문합니다." },
    { title: "이후 · 도라전망대", description: "도라전망대에서 접경 지역을 살펴봅니다." },
    { title: "이후 · 통일촌", description: "현지 출입 상황을 확인해 통일촌을 방문합니다." },
    { title: "약 15:00 · 서울 일정 종료", description: "DMZ 일정만 진행하는 경우 서울에서 종료합니다." }
  ],
  itineraryNotes: [
    "상기 일정은 예시이며 현지 출입 통제 및 운영 상황에 따라 방문 장소, 순서 및 시간이 변경될 수 있습니다.",
    "DMZ 관광 후 서울 시내관광, 식사 또는 별도 일정을 맞춤형으로 추가할 수 있습니다."
  ],
  importantNotice: {
    eyebrow: "IMPORTANT NOTICE",
    title: "예약 전 반드시 확인해 주세요",
    description: "DMZ는 일반 관광지와 운영 조건이 다른 특수 관광지역입니다.",
    items: [
      "DMZ 투어는 군사통제지역을 포함하는 특수 관광 일정입니다. 군사·안보 상황, 현지 출입 통제, 기상 및 안전상의 사유에 따라 방문 장소와 일정이 예고 없이 변경되거나 일부 또는 전체 일정이 중단될 수 있습니다.",
      "외국인 고객은 투어 당일 유효한 여권 원본을 반드시 지참해 주세요.",
      "외국인 고객의 참가자 명단은 투어 2일 전까지 확인이 필요합니다. 영문 이름, 성별, 국적을 준비해 주세요.",
      "고객님의 안전과 군사시설 보호를 위해 일부 DMZ 코스에서는 사진 및 영상 촬영이 제한될 수 있습니다. 현장 안내 및 촬영 가능 구역을 반드시 따라주시기 바랍니다.",
      "제3땅굴 내부는 경사가 가파르고 이동 구간이 길어 상당한 체력이 필요할 수 있습니다. 연세가 많으신 분이나 보행이 불편한 분, 체력적으로 부담이 있는 분께는 내부 관람을 권장하지 않습니다."
    ]
  },
  usageInfo: [
    { label: "출발", value: "서울 호텔·지정 장소 또는 임진각 조인" },
    { label: "차량", value: "인원에 따라 카니발·스타리아, 쏠라티, 대형버스 안내" },
    { label: "가이드", value: "영어·일본어·중국어 사이투어 전문 가이드 상담 가능" }
  ],
  usageInfoColumns: 3,
  checklist: {
    eyebrow: "BOOKING INFORMATION",
    title: "예약 시 필요한 정보",
    description: "외국인 고객의 참가자 명단은 투어 2일 전까지 확인이 필요합니다.",
    items: [
      "이용 날짜",
      "인원",
      "참가자 영문 이름",
      "성별",
      "국적",
      "희망 출발 장소",
      "DMZ 종료 후 추가 일정 여부",
      "희망 가이드 언어"
    ]
  },
  includedTitle: "포함사항",
  excludedTitle: "별도·선택사항",
  included: ["전용 차량", "전문 가이드", "DMZ 관광 기본 입장료"],
  excluded: ["식사", "개인 비용", "DMZ 종료 후 추가 일정은 상담 후 견적 안내"],
  notices: [
    "DMZ 내부 이동은 현지 운영 방식에 따라 셔틀을 이용하며, 단체는 인원과 현지 출입 조건에 따라 단체 차량 이용 가능 여부를 확인합니다.",
    "투어 요금은 인원, 차량, 가이드와 일정에 따라 맞춤 견적으로 안내합니다."
  ],
  contactType: "DMZ 투어",
  ctaTitle: "DMZ 투어 맞춤 견적을 받아보세요.",
  ctaLabel: "DMZ 투어 문의하기"
};
