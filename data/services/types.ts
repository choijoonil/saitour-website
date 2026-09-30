export type ServiceQuickInfo = {
  label: string;
  value: string;
};

export type ServiceContentCard = {
  title: string;
  description: string;
  items?: string[];
};

export type ServiceItineraryStep = {
  title: string;
  description?: string;
};

export type ServiceReview = {
  quote: string;
  source?: string;
  url?: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceDetail = {
  slug: string;
  category: string;
  englishTitle: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  heroImage: string;
  image: string;
  duration: string;
  recommendedFor: string[];
  quickInfo?: ServiceQuickInfo[];
  categories?: ServiceContentCard[];
  courses?: ServiceContentCard[];
  itinerary?: ServiceItineraryStep[];
  highlights?: ServiceContentCard[];
  vehicleInfo?: ServiceContentCard[];
  usageInfo?: ServiceQuickInfo[];
  included?: string[];
  excluded?: string[];
  notices?: string[];
  reviews?: ServiceReview[];
  faq?: ServiceFaq[];
  contactType: string;
};

// 기존 목록 카드와 외부 import가 계속 사용할 수 있는 이름입니다.
export type Tour = ServiceDetail;
