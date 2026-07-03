# SAITOUR.NET Beta Deploy Guide

## Beta URL

- 기준 도메인: https://www.saitour.net
- 사이트 표기: 일반 홈페이지처럼 운영
- Beta 문구는 화면에 표시하지 않음

## Build Result

- 배포 전 명령: npm run build
- 빌드 결과 폴더: .next
- public 폴더의 이미지, robots.txt, sitemap.xml 포함 필요
- package.json, package-lock.json, next.config.ts 포함 필요

## Recommended Deployment

이 프로젝트는 Next.js App Router 기반입니다. 단순 HTML 업로드가 아니라 Node 기반 Next.js 실행 환경 또는 Vercel/Netlify 같은 Next.js 지원 배포 환경이 필요합니다.

1. 배포 플랫폼에 프로젝트 업로드
2. Build Command: npm run build
3. Start Command: npm run start
4. Node.js 버전은 배포 플랫폼 기본 LTS 또는 Next.js 15 지원 버전 사용
5. Production Domain에 www.saitour.net 추가
6. HTTPS 인증서 자동 발급 확인

## DOREGI Connection

1. DOREGI 도메인 관리에 접속
2. saitour.net DNS 관리로 이동
3. 배포 플랫폼에서 안내하는 DNS 값을 확인
4. www 호스트에 CNAME 또는 A 레코드 연결
5. 루트 도메인 saitour.net도 사용할 경우 배포 플랫폼 안내에 따라 A 레코드 또는 리다이렉트 설정
6. DNS 전파 후 https://www.saitour.net 접속 확인

## Post Deploy Test

- https://www.saitour.net/
- https://www.saitour.net/company
- https://www.saitour.net/tours
- https://www.saitour.net/blog
- https://www.saitour.net/contact
- https://www.saitour.net/robots.txt
- https://www.saitour.net/sitemap.xml
- 카카오 상담 버튼 새 창 열림
- 전화 링크 tel:0263410042
- 문의폼 Resend 이메일 발송
- 네이버 블로그 링크 새 창 열림
- PC / 모바일 Header, Footer, CTA 확인
