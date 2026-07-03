const saitourLetters = [
  { letter: "S", className: "text-brand-logo-s" },
  { letter: "A", className: "text-brand-logo-a" },
  { letter: "I", className: "text-brand-logo-i" },
  { letter: "T", className: "text-brand-logo-t" },
  { letter: "O", className: "text-brand-logo-o" },
  { letter: "U", className: "text-brand-logo-u" },
  { letter: "R", className: "text-brand-logo-r" }
];

export default function BrandLogoText({ className = "" }: { className?: string }) {
  return (
    <span className={className} aria-label="SAITOUR">
      {saitourLetters.map((item) => (
        <span key={item.letter} className={item.className}>
          {item.letter}
        </span>
      ))}
    </span>
  );
}
