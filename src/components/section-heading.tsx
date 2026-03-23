type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs uppercase tracking-[0.35em] text-slate-500">{eyebrow}</div>
      <h2 className="mt-4 text-4xl font-semibold text-slate-950">{title}</h2>
      {description ? <p className="mt-6 text-lg text-slate-600">{description}</p> : null}
    </div>
  );
}