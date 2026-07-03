import { imagePaths } from "@/data/images";

export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  title: string;
};

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: imagePaths.gallery[0],
    alt: "서울 도심과 인바운드 여행 장면",
    title: "서울 인바운드"
  },
  {
    id: 2,
    src: imagePaths.gallery[1],
    alt: "인바운드 한국여행 운영 장면",
    title: "인바운드"
  },
  {
    id: 3,
    src: imagePaths.gallery[2],
    alt: "공항 픽업 차량 이동 서비스",
    title: "공항 픽업"
  },
  {
    id: 4,
    src: imagePaths.gallery[3],
    alt: "단체여행 자연 코스 장면",
    title: "단체여행"
  },
  {
    id: 5,
    src: imagePaths.gallery[4],
    alt: "기업연수 서울 일정 장면",
    title: "기업연수"
  },
  {
    id: 6,
    src: imagePaths.gallery[5],
    alt: "전문 가이드와 함께하는 한국 여행",
    title: "가이드 투어"
  },
  {
    id: 7,
    src: imagePaths.gallery[6],
    alt: "맞춤 여행 자연 코스 장면",
    title: "맞춤 여행"
  },
  {
    id: 8,
    src: imagePaths.gallery[7],
    alt: "여행 시작을 돕는 픽업 서비스",
    title: "편안한 이동"
  }
];
