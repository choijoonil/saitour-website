import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KakaoFloatingButton from "@/components/KakaoFloatingButton";
import { imagePaths } from "@/data/images";
import { SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "사이투어 | 인바운드 · DMZ투어 · 서울시티투어 전문 여행사",
    template: "%s | 사이투어"
  },
  alternates: {
    canonical: "/"
  },
  description:
    "사이투어는 외국인 한국방문, DMZ 투어, 서울 시티투어, 공항픽업, 프라이빗 투어, 통역 가이드 서비스를 제공하는 인바운드 전문 여행사입니다.",
  keywords: [
    "사이투어",
    "SAITOUR",
    "인바운드 여행사",
    "외국인 한국여행",
    "DMZ 투어",
    "서울 시티투어",
    "인천공항 픽업",
    "김포공항 픽업",
    "프라이빗 투어",
    "영어가이드",
    "일본어가이드",
    "중국어가이드"
  ],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png"
  },
  openGraph: {
    title: "사이투어 | 인바운드 · DMZ투어 · 서울시티투어",
    description:
      "외국인 한국방문부터 DMZ 투어, 서울 시티투어, 공항픽업, 전문 가이드까지 사이투어가 함께합니다.",
    siteName: "사이투어",
    locale: "ko_KR",
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: imagePaths.common.ogImage,
        width: 1200,
        height: 630,
        alt: "사이투어 인바운드 여행 서비스"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "사이투어 | 인바운드 · DMZ투어 · 서울시티투어",
    description:
      "외국인 한국방문부터 DMZ 투어, 서울 시티투어, 공항픽업, 전문 가이드까지 사이투어가 함께합니다.",
    images: [imagePaths.common.ogImage]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <KakaoFloatingButton />
        <Footer />
      </body>
    </html>
  );
}
