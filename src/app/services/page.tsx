import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { serviceItems } from "@/lib/site-content";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading
          eyebrow="Services"
          title="Build the structure behind better financial decisions."
          description="Our work helps leadership teams move from having numbers to actually having clarity."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {serviceItems.map((item) => (
            <div key={item.title} className="rounded-[2rem] bg-stone-100 p-8">
              <div className="text-xl font-semibold">{item.title}</div>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA SECTION */}
        <section className="mt-16 rounded-2xl bg-white p-10 shadow-sm ring-1 ring-stone-200 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-900">
            Ready to bring clarity to your financial decisions?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Schedule a free discovery call to walk through your current financial
            structure, identify gaps, and determine what level of support your
            business needs.
          </p>
          <div className="mt-6">
            <Link
  href="/contact"
  className="inline-block rounded-lg bg-slate-900 px-6 py-3 text-base font-medium transition hover:bg-slate-800"
  style={{ color: "#ffffff", textDecoration: "none" }}
>
  <span style={{ color: "#ffffff" }}>
    Schedule Your Free Discovery Call
  </span>
</Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}