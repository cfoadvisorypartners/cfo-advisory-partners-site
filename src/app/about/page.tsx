import Link from "next/link";
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

        {/* CTA SECTION */}
        <section className="mt-16 rounded-2xl bg-slate-900 p-10 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-white">
            Ready for better financial clarity?
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-200">
            Schedule a free discovery call to talk through your business,
            your financial challenges, and where you need better visibility.
          </p>

          <div className="mt-6">
            <Link href="/contact" className="inline-block no-underline">
              <span
                className="inline-block rounded-lg bg-white px-6 py-3 text-base font-medium hover:bg-slate-100"
                style={{ color: "#0f172a" }}
              >
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