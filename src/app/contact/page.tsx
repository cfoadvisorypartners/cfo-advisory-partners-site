import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/lib/site-content";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s start the conversation"
          description="Whether you need stronger reporting, better cash visibility, or a more reliable monthly cadence, we can start with a focused conversation."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-500">Contact</div>
            <div className="mt-3 text-xl font-semibold text-slate-900">{siteContent.contactEmail}</div>
            <p className="mt-2 text-slate-600">(972) 310-7252</p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-500">Scheduling</div>
            <div className="mt-3 text-xl font-semibold text-slate-900">30-minute discovery call</div>
            <Link href="/lead" className="mt-6 inline-block rounded-2xl bg-slate-900 px-5 py-3 text-white !text-white">
              Schedule
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}