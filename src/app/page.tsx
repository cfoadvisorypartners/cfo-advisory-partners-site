import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialGrid } from "@/components/testimonial-grid";
import { VerticalsGrid } from "@/components/verticals-grid";
import {
  commonChallenges,
  serviceItems,
  siteContent,
  valueItems,
} from "@/lib/site-content";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <SiteHeader />

      <section className="relative">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-500">
              Fractional CFO Services
            </div>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight">
              {siteContent.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              {siteContent.subheadline}
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/lead"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-white !text-white"
              >
                Schedule Your Free Discovery Call
              </Link>
              <Link href="/about" className="rounded-2xl border px-6 py-3">
                Learn More
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] bg-white p-8 shadow-xl">
              <div className="text-sm text-slate-500">Common Challenges</div>
              <ul className="mt-6 space-y-4 text-slate-700">
                {commonChallenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-slate-900 px-6 py-3 text-white !text-white">
              <div className="text-sm text-slate-400">What we provide</div>
              <p className="mt-4 text-xl">
                Clear reporting, structured processes, and ongoing financial
                guidance to support better decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {valueItems.map((item) => (
            <div key={item.title} className="rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="text-xl font-semibold">{item.title}</div>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            eyebrow="About"
            title="Practical financial leadership for growing businesses."
            description={siteContent.about}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading eyebrow="Services" title="How we create clarity" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {serviceItems.map((item) => (
            <div key={item.title} className="rounded-[2rem] bg-stone-100 p-8">
              <div className="text-xl font-semibold">{item.title}</div>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            eyebrow="Who We Work With"
            title="Broad industry support with practical financial discipline."
            description="We work with established businesses that already have bookkeeping support in place but need stronger structure, better reporting, and clearer financial direction."
          />
          <VerticalsGrid />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading
          eyebrow="Client Feedback"
          title="Trusted by business leaders who needed more clarity from their numbers."
        />
        <TestimonialGrid />
      </section>

      <section className="bg-stone-100">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="rounded-[2rem] bg-slate-950 p-10 text-white">
            <h2 className="text-3xl font-semibold">
              You have bookkeeping in place. Now you need financial clarity.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              If your business is producing numbers but not enough decision-making
              clarity, start with a focused conversation.
            </p>
            <div className="mt-8">
              <Link
                href="/lead"
                className="rounded-2xl bg-white px-6 py-3 text-slate-900 !text-slate-900 font-medium shadow-md hover:bg-gray-100 transition"
              >
                Click to Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}