import Link from "next/link";
import Logo from "@/components/Logo";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="container-px mx-auto grid max-w-7xl gap-9 py-10 md:grid-cols-[1.25fr_1fr_0.8fr] md:items-start">
        <div className="max-w-sm">
          <Logo light />
          <p className="mt-4 text-sm font-semibold text-slate-200">Always Good Buddy</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            외국인 한국여행부터 기업행사까지, 고객의 목적에 맞는 맞춤형 서비스를 제공합니다.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">회사 정보</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
            <li>서울시 강서구 마곡중앙로 161-17, 712호</li>
            <li>
              <a href={CONTACT_PHONE_HREF} className="transition hover:text-brand-primary">
                {CONTACT_PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-brand-primary">
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">메뉴</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>
              <Link href="/company" className="transition hover:text-brand-primary">
                회사소개
              </Link>
            </li>
            <li>
              <Link href="/tours" className="transition hover:text-brand-primary">
                대표 서비스
              </Link>
            </li>
            <li>
              <Link href="/blog" className="transition hover:text-brand-primary">
                블로그
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-brand-primary">
                여행 문의
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        © 2026 SAITOUR. All rights reserved.
      </div>
    </footer>
  );
}
