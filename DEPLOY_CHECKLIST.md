# SAITOUR 2.0 Beta Deploy Checklist

## Build

- npm run build: 성공 확인 완료 (2026-07-03, saitour.net beta)
- TypeScript / ESLint / Next.js build 오류 없음 확인 완료

## Domain

- 베타 도메인: https://www.saitour.net
- Open Graph URL: https://www.saitour.net
- canonical URL: https://www.saitour.net
- robots.txt sitemap URL: https://www.saitour.net/sitemap.xml
- sitemap.xml 대표 URL: https://www.saitour.net/

## Environment Variables

- 현재 코드에 필수 민감 환경변수 없음
- NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY: 카카오 JavaScript SDK 기능을 추가할 때만 배포 환경에 등록
- 카카오 상담 URL: 공개 링크로 constants/site.ts에서 관리
- 네이버 블로그 URL: 공개 링크로 constants/site.ts에서 관리

## Before Domain Connection

- DNS A/CNAME 설정 확인
- 배포 플랫폼의 production domain에 www.saitour.net 등록
- HTTPS 인증서 발급 완료 확인
- /robots.txt 접근 확인
- /sitemap.xml 접근 확인
- /images/common/og-image.jpg 접근 확인
- favicon 표시 확인

## DOREGI DNS Connection

- DOREGI 도메인 관리에서 www.saitour.net DNS 설정 진입
- 배포 플랫폼이 제공하는 CNAME 또는 A 레코드 값을 확인
- www 호스트에 배포 플랫폼 안내값 연결
- 루트 도메인 saitour.net도 사용할 경우 배포 플랫폼 안내에 따라 A 레코드 또는 리다이렉트 설정
- DNS 전파 후 https://www.saitour.net 접속 확인
- SSL/HTTPS 인증서 활성화 확인

## After Deploy

- 홈: https://www.saitour.net/
- 회사소개: https://www.saitour.net/company
- 대표 서비스: https://www.saitour.net/tours
- 블로그: https://www.saitour.net/blog
- 여행 문의: https://www.saitour.net/contact
- 카카오 상담 버튼 새 창 열림 테스트
- 네이버 블로그 링크 새 창 열림 테스트
- 전화 링크 tel:0263410042 테스트
- 문의폼 Resend 이메일 발송 테스트

## Device QA

- PC Chrome 화면 확인
- 모바일 Chrome 화면 확인
- iPhone Safari 기준 메뉴/CTA 확인
- Header scroll effect 확인
- Footer 링크/브랜드 영역 확인

## Search Registration

- 베타 피드백 기간에는 검색 등록 보류 가능
- 검색 노출을 시작할 경우 네이버 서치어드바이저 등록
- 검색 노출을 시작할 경우 구글 서치콘솔 등록
- sitemap.xml 제출
