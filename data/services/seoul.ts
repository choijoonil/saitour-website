import { imagePaths } from "@/data/images";
import type { ServiceDetail } from "@/data/services/types";

export const seoulService: ServiceDetail = {
  slug: "seoul-city-tour",
  category: "SEOUL CITY TOUR",
  englishTitle: "SEOUL CITY TOUR",
  title: "서울 시티투어",
  subtitle: "반일 또는 종일, 관심사에 맞춰 서울 대표 명소를 만나는 맞춤 시티투어입니다.",
  heroDescription: "경복궁·북촌의 역사와 전통부터 명동, N서울타워, 한강까지 원하는 서울의 모습을 선택해보세요. 전용 차량과 전문 가이드는 인원과 요청사항에 따라 안내합니다.",
  summary: "서울을 처음 방문하는 외국인 고객부터 가족과 비즈니스 게스트까지, 한정된 시간 안에 서울의 역사·전통·도심·전망 명소를 효율적으로 둘러볼 수 있습니다.",
  description: "방문하고 싶은 장소와 체류시간을 확인해 코스를 안내하며, 전용 차량과 전문 가이드는 인원과 요청사항에 따라 안내합니다.",
  heroImage: imagePaths.services.seoulCity,
  image: imagePaths.services.seoulCity,
  duration: "반일 또는 종일",
  recommendedFor: ["외국인 한국여행", "가족 방문", "비즈니스 게스트"],
  compactIntroduction: true,
  quickInfo: [
    { label: "투어 형태", value: "반일 또는 종일" },
    { label: "코스", value: "관심사와 체류 일정에 맞춘 맞춤 코스" },
    { label: "차량·가이드", value: "인원과 요청사항 확인 후 안내" }
  ],
  courses: [
    {
      title: "역사·전통",
      description: "경복궁과 북촌을 중심으로 서울의 역사와 전통문화를 경험하는 테마입니다.",
      media: {
        src: "/images/services/seoul-history-tradition.webp",
        alt: "서울 경복궁과 한복 차림의 관광객"
      }
    },
    {
      title: "서울 핵심 명소",
      description: "명동 등 서울의 대표 도심 명소를 관심사와 체류시간에 맞춰 살펴봅니다.",
      media: {
        src: "/images/services/seoul-city-highlights.webp",
        alt: "서울 명동 도심 거리 풍경"
      }
    },
    {
      title: "전망·야경",
      description: "N서울타워에서 서울 전경과 야간 풍경을 즐기는 테마입니다.",
      media: {
        src: "/images/services/seoul-night-view.webp",
        alt: "N서울타워에서 바라본 서울 야경"
      }
    },
    {
      title: "한강",
      description: "한강을 따라 서울의 도시 풍경과 여유로운 분위기를 경험합니다.",
      media: {
        src: "/images/services/seoul-hangang.webp",
        alt: "한강과 N서울타워가 보이는 서울 도심 풍경"
      }
    }
  ],
  coursesEyebrow: "SEOUL TOUR THEMES",
  coursesTitle: "서울 추천 코스 & 테마",
  coursesColumns: 2,
  itinerary: [
    { title: "방문 일정 확인", description: "방문일, 인원, 원하는 투어 시간을 확인합니다." },
    { title: "관심 테마 확인", description: "역사·전통, 서울 핵심 명소, 전망·야경 등 관심사를 확인합니다." },
    { title: "맞춤 코스 안내", description: "체류시간과 관심사에 맞는 서울 코스를 안내합니다." },
    { title: "차량·가이드 확인", description: "인원과 요청사항에 따라 필요한 차량과 가이드를 안내합니다." },
    { title: "최종 일정 확인", description: "확정된 방문지와 미팅 정보를 확인한 후 투어를 진행합니다." }
  ],
  itineraryTitle: "투어 준비 절차",
  itineraryRoomy: true,
  usageInfo: [
    { label: "코스", value: "희망 장소와 체류시간을 확인한 후 안내" },
    { label: "이동", value: "인원과 이동 동선에 맞는 차량 안내" },
    { label: "가이드", value: "요청 언어와 일정을 확인한 후 안내" }
  ],
  usageInfoColumns: 3,
  checklist: {
    eyebrow: "BOOKING INFORMATION",
    title: "예약 시 필요한 정보",
    description: "원하는 서울 여행을 안내할 수 있도록 문의 시 아래 정보를 알려주세요.",
    items: [
      "이용 날짜",
      "인원",
      "반일 또는 종일",
      "관심 있는 관광지 또는 테마",
      "희망 출발 장소",
      "희망 종료 장소",
      "차량 필요 여부",
      "가이드 필요 여부 및 희망 언어"
    ]
  },
  included: ["맞춤 코스 상담", "차량 이용 여부 안내", "전문 가이드 이용 여부 안내", "방문지 입장료 포함 여부 확인"],
  excluded: ["식사", "개인 비용"],
  notices: ["방문지 운영일과 교통 상황에 따라 동선은 조정될 수 있습니다.", "최종 코스와 포함사항은 상담 후 확정합니다."],
  contactType: "서울 시티투어",
  ctaTitle: "나에게 맞는 서울 시티투어를 상담해보세요.",
  ctaLabel: "서울 시티투어 문의하기"
};
