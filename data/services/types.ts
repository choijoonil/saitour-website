export type ServiceQuickInfo = {
  label: string;
  value: string;
};

export type ServiceContentCard = {
  title: string;
  description: string;
  items?: string[];
  media?: ServiceMediaSlot;
};

export type ServiceMediaSlot = {
  src?: string;
  alt: string;
  placeholder?: string;
  fit?: "cover" | "contain";
  width?: number;
  height?: number;
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

export type ServiceTableSection = {
  eyebrow: string;
  title: string;
  description: string;
  columns: Array<{ key: string; label: string }>;
  rows: Array<{
    label: string;
    details?: string[];
    values: Record<string, string>;
  }>;
  notes?: string[];
  media?: ServiceMediaSlot;
  ctaLabel?: string;
};

export type ServiceChecklistSection = {
  eyebrow: string;
  title: string;
  description?: string;
  items: string[];
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
  itineraryTitle?: string;
  highlights?: ServiceContentCard[];
  vehicleInfo?: ServiceContentCard[];
  vehicleInfoTitle?: string;
  pricing?: ServiceTableSection;
  checklist?: ServiceChecklistSection;
  usageInfo?: ServiceQuickInfo[];
  included?: string[];
  excluded?: string[];
  notices?: string[];
  reviews?: ServiceReview[];
  faq?: ServiceFaq[];
  contactType: string;
  ctaLabel?: string;
};

// 기존 목록 카드와 외부 import가 계속 사용할 수 있는 이름입니다.
export type Tour = ServiceDetail;
