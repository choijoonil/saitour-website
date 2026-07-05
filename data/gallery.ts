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
    alt: "DMZ 투어 운영 사진",
    title: "DMZ"
  },
  {
    id: 2,
    src: imagePaths.gallery[1],
    alt: "서울 시티투어 운영 사진",
    title: "서울"
  },
  {
    id: 3,
    src: imagePaths.gallery[2],
    alt: "공항픽업 운영 사진",
    title: "공항픽업"
  },
  {
    id: 4,
    src: imagePaths.gallery[3],
    alt: "기업행사 운영 사진",
    title: "기업행사"
  },
  {
    id: 5,
    src: imagePaths.gallery[4],
    alt: "통역 가이드 운영 사진",
    title: "가이드"
  }
];
