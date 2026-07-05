import { brandLogoColors } from "@/constants/brandColors";

const saitourLetters = [
  { letter: "S", color: brandLogoColors.s },
  { letter: "A", color: brandLogoColors.a },
  { letter: "I", color: brandLogoColors.i },
  { letter: "T", color: brandLogoColors.t },
  { letter: "O", color: brandLogoColors.o },
  { letter: "U", color: brandLogoColors.u },
  { letter: "R", color: brandLogoColors.r }
];

export default function BrandLogoText({ className = "" }: { className?: string }) {
  return (
    <span className={className} aria-label="SAITOUR">
      {saitourLetters.map((item) => (
        <span key={item.letter} style={{ color: item.color }}>
          {item.letter}
        </span>
      ))}
    </span>
  );
}
