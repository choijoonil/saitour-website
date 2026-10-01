type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  headingLevel?: "h1" | "h2";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
  headingLevel = "h2"
}: SectionTitleProps) {
  const Heading = headingLevel;

  return (
    <div className="mb-9 max-w-2xl">
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <Heading className={`text-3xl font-bold leading-tight tracking-normal [word-break:keep-all] sm:text-4xl ${light ? "text-white" : "text-navy"}`}>
        {title}
      </Heading>
      {description ? (
        <p className={`mt-4 text-base leading-7 ${light ? "text-slate-300" : "text-slate-600"}`}>{description}</p>
      ) : null}
    </div>
  );
}
