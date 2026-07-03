export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  categorySlug: BlogCategorySlug;
  url: string;
};

export const blogCategories = [
  {
    slug: "airport-pickup",
    title: "공항픽업 안내",
    description: "인천공항과 김포공항 도착 후 목적지까지 편안하게 이동하는 방법을 안내합니다."
  },
  {
    slug: "seoul-city-tour",
    title: "서울 시티투어",
    description: "경복궁, 북촌, N서울타워 등 서울 주요 명소 여행 정보를 정리합니다."
  },
  {
    slug: "dmz-tour",
    title: "DMZ 투어",
    description: "DMZ, 자유의 다리, 제3땅굴 등 비무장지대 투어 준비 정보를 안내합니다."
  }
] as const;

export type BlogCategorySlug = (typeof blogCategories)[number]["slug"];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "airport-pickup-guide",
    title: "공항픽업 안내",
    excerpt: "인천공항과 김포공항 도착 후 목적지까지 편안하게 이동하는 방법을 안내합니다.",
    date: "네이버 블로그",
    category: "공항픽업 안내",
    categorySlug: "airport-pickup",
    url: "https://blog.naver.com/cji6157/223517177859"
  },
  {
    id: 2,
    slug: "seoul-city-tour-guide",
    title: "서울 시티투어",
    excerpt: "경복궁, 북촌, N서울타워 등 서울 주요 명소를 효율적으로 둘러보는 방법을 안내합니다.",
    date: "네이버 블로그",
    category: "서울 시티투어",
    categorySlug: "seoul-city-tour",
    url: "https://blog.naver.com/cji6157/223944511084"
  },
  {
    id: 3,
    slug: "dmz-tour-guide",
    title: "DMZ 투어",
    excerpt: "DMZ 투어와 자유의 다리, 제3땅굴 방문 전 확인하면 좋은 준비 정보를 정리했습니다.",
    date: "네이버 블로그",
    category: "DMZ 투어",
    categorySlug: "dmz-tour",
    url: "https://blog.naver.com/cji6157/222886895145"
  }
];

export function getBlogCategory(slug: string) {
  return blogCategories.find((category) => category.slug === slug);
}

export function getBlogPostsByCategory(slug: string) {
  return blogPosts.filter((post) => post.categorySlug === slug);
}
