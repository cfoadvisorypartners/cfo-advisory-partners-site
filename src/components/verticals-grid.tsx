import { verticals } from "@/lib/site-content";

export function VerticalsGrid() {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {verticals.map((item) => (
        <div
          key={item}
          className="rounded-[2rem] border border-slate-200 bg-stone-50 p-6 text-center text-lg font-medium text-slate-800 shadow-sm"
        >
          {item}
        </div>
      ))}
    </div>
  );
}