import { testimonials } from "@/lib/site-content";

export function TestimonialGrid() {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      {testimonials.map((item) => (
        <div key={item.quote} className="rounded-[2rem] bg-white p-8 shadow-sm">
          <p className="text-lg leading-8 text-slate-700">“{item.quote.replace(/^“|”$/g, "")}"</p>
          <div className="mt-6 text-sm uppercase tracking-[0.2em] text-slate-500">{item.source}</div>
        </div>
      ))}
    </div>
  );
}