import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
        <SectionHeading
          eyebrow="About Us"
          title="Financial guidance that is practical, clear, and built for real-world decisions."
          description="We partner with leaders who want more than clean books. They want to understand what is driving profit, where cash is going, and how to plan ahead with confidence."
        />
        <div className="mt-10 space-y-6 text-lg leading-8 text-slate-600">
          <p>
            CFO Advisory Partners works with established businesses that already have bookkeeping support in place but need a stronger financial framework, better reporting discipline, and more confident decision-making.
          </p>
          <p>
            Our role is to bring structure to the financial side of the business, establish a reliable monthly cadence, and provide strategic guidance that leadership can actually use.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}