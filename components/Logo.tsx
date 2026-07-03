import Image from "next/image";
import Link from "next/link";
import BrandLogoText from "@/components/BrandLogoText";

export default function Logo({ light = false }: { light?: boolean }) {
  const logoSrc = "/images/logo/saitour-logo.png";

  return (
    <Link href="/" className="inline-flex items-center gap-3.5" aria-label="사이투어 홈">
      <Image
        src={logoSrc}
        alt="사이투어 로고"
        width={253}
        height={236}
        className="h-11 w-auto shrink-0 sm:h-12"
        sizes="48px"
        priority
      />
      <span className="leading-tight">
        <span className={`block text-[17px] font-bold transition-colors duration-300 ${light ? "text-white" : "text-[#111827]"}`}>
          사이투어
        </span>
        <BrandLogoText className="block text-[10px] font-bold uppercase tracking-[0.16em]" />
      </span>
    </Link>
  );
}
