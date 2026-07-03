export type Review = {
  id: number;
  name: string;
  location: string;
  title: string;
  body: string;
  tour: string;
  date: string;
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "고객 후기",
    location: "기업연수",
    title: "기업연수 후기",
    body: "인원 이동과 일정 안내가 차분하게 진행되어 연수 일정을 안정적으로 마칠 수 있었습니다.",
    tour: "기업연수",
    date: "고객 후기"
  },
  {
    id: 2,
    name: "고객 후기",
    location: "인바운드",
    title: "인바운드 후기",
    body: "외국인 고객 일정에 맞춰 이동과 가이드 운영을 꼼꼼하게 준비해주셨습니다.",
    tour: "인바운드",
    date: "고객 후기"
  },
  {
    id: 3,
    name: "고객 후기",
    location: "공항픽업",
    title: "공항픽업 후기",
    body: "도착 시간에 맞춰 친절하게 안내해주셔서 목적지까지 편하게 이동했습니다.",
    tour: "공항픽업",
    date: "고객 후기"
  }
];
