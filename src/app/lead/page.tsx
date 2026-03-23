import { LeadForm } from "@/components/lead-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { leadPageBullets } from "@/lib/site-content";

export default function LeadPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 rounded-[2rem] bg-slate-950 p-10 text-white lg:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400">For owners, presidents, and CEOs</div>
            <h1 className="mt-4 text-4xl font-semibold">You have accounting. Now you need financial clarity.</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Most growing businesses have bookkeeping in place but still lack clear visibility into cash, profitability, and forward planning.
            </p>
            <ul className="mt-8 space-y-4 text-slate-200">
              {leadPageBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <LeadForm />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}