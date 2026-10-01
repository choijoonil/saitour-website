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
  credit?: string;
  creditUrl?: string;
  license?: string;
  licenseUrl?: string;
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

export type ServiceImportantNoticeSection = {
  eyebrow?: string;
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
  heroDescription?: string;
  summary: string;
  description: string;
  heroImage: string;
  image: string;
  duration: string;
  recommendedFor: string[];
  compactIntroduction?: boolean;
  quickInfo?: ServiceQuickInfo[];
  categories?: ServiceContentCard[];
  courses?: ServiceContentCard[];
  coursesEyebrow?: string;
  coursesTitle?: string;
  coursesColumns?: 2 | 3;
  itinerary?: ServiceItineraryStep[];
  itineraryTitle?: string;
  itineraryRoomy?: boolean;
  itineraryNotes?: string[];
  itineraryColumns?: 3 | 5;
  importantNotice?: ServiceImportantNoticeSection;
  highlights?: ServiceContentCard[];
  vehicleInfo?: ServiceContentCard[];
  vehicleInfoTitle?: string;
  vehicleInfoColumns?: 2 | 3;
  pricing?: ServiceTableSection;
  checklist?: ServiceChecklistSection;
  usageInfo?: ServiceQuickInfo[];
  usageInfoColumns?: 2 | 3;
  included?: string[];
  excluded?: string[];
  includedTitle?: string;
  excludedTitle?: string;
  notices?: string[];
  reviews?: ServiceReview[];
  faq?: ServiceFaq[];
  contactType: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaLabel?: string;
};

// 기존 목록 카드와 외부 import가 계속 사용할 수 있는 이름입니다.
export type Tour = ServiceDetail;
