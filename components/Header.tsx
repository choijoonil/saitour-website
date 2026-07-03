"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

const navItems = [
  { href: "/company", label: "회사소개" },
  { href: "/tours", label: "대표 서비스" },
  { href: "/blog", label: "블로그" },
  { href: "/contact", label: "여행 문의" }
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHomeTop = pathname === "/" && !scrolled;
  const headerIsLight = isHomeTop && !mobileOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition duration-300 ${
        headerIsLight
          ? "border-b border-white/10 bg-transparent"
          : "border-b border-slate-100/80 bg-white/88 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl"
      }`}
    >
      <div className="container-px mx-auto flex h-[76px] max-w-7xl items-center justify-between">
        <Logo light={headerIsLight} />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="주요 메뉴">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative py-2 text-[15px] font-semibold tracking-normal transition-colors duration-200 ${
                  headerIsLight
                    ? active
                      ? "text-white"
                      : "text-white/84 hover:text-brand-primary"
                    : active
                      ? "text-brand-primary"
                      : "text-slate-700 hover:text-brand-primary"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-[2px] origin-left rounded-full transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  } ${headerIsLight ? "bg-white" : "bg-brand-primary"}`}
                />
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className={`relative grid h-11 w-11 place-items-center rounded-full border transition-colors duration-200 ${
              headerIsLight
                ? "border-white/30 text-white hover:bg-white/10"
                : "border-slate-200 text-navy hover:border-brand-primary hover:text-brand-primary"
            }`}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span
              className={`absolute h-px w-5 rounded-full bg-current transition duration-300 ${
                mobileOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-px w-5 rounded-full bg-current transition duration-200 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-px w-5 rounded-full bg-current transition duration-300 ${
                mobileOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate-100 bg-white/96 shadow-[0_18px_36px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="container-px mx-auto max-w-7xl py-4" aria-label="모바일 메뉴">
          <div
            className={`transition duration-300 ${
              mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
          >
            <div className="grid gap-1">
              {navItems.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-12 items-center justify-between rounded-lg px-3 text-base font-semibold transition ${
                      active
                        ? "bg-brand-surface text-brand-primary"
                        : "text-navy hover:bg-brand-surface hover:text-brand-primary"
                    }`}
                  >
                    {item.label}
                    {active ? <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" /> : null}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
