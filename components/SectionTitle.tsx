type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionTitle({ eyebrow, title, description, light = false }: SectionTitleProps) {
  return (
    <div className="mb-9 max-w-2xl">
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className={`text-3xl font-bold leading-tight tracking-normal sm:text-4xl ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 ${light ? "text-slate-300" : "text-slate-600"}`}>{description}</p>
      ) : null}
    </div>
  );
}
