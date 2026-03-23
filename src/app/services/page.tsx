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
      </main>
      <SiteFooter />
    </div>
  );
}