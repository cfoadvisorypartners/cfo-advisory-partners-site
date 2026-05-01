import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none">
      <path
        d="M12 3 5 6v5c0 4.5 2.8 8.5 7 10 4.2-1.5 7-5.5 7-10V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none">
      <path
        d="M6 21V7h12v14"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9 21v-4h6v4M9 10h1M14 10h1M9 14h1M14 14h1M4 21h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none">
      <path
        d="M4 16 9 11l4 4 7-8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 7h5v5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-white">
          <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
            {/* LEFT CONTENT */}
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-700">
                About Us
              </p>

              <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Financial clarity. Stronger decisions. Built for what’s next.
              </h1>

              {/* UPDATED COPY */}
              <div className="mt-7 max-w-2xl space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  With over 15 years of combined experience in accounting, finance, and advisory, CFO Advisory Partners works with businesses to bring clarity and structure to their financials.
                </p>

                <p>
                  We collaborate closely with our partners to better understand where they stand today, where they want to go, and how to get there.
                </p>

                <p>
                  By combining reporting, insight, and practical business perspective, we help translate financial information into decisions—so business owners and leadership teams can move forward with confidence.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="/lead"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-8 py-4 text-base font-semibold !text-white shadow-lg shadow-slate-950/20 transition hover:bg-blue-700 hover:!text-white"
                >
                  Schedule Your Free Discovery Call
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative hidden h-[560px] overflow-hidden rounded-[2rem] lg:block">
              <img
                src="/images/about/about-hero.jpg"
                alt="Business owner reviewing financial strategy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-white/40" />
            </div>
          </div>
        </section>

        {/* WHO WE WORK WITH */}
        <section className="border-y border-slate-200 bg-white px-6 py-16 lg:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-900">
              Who We Work With
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Established businesses seeking stronger financial insight and confident decision-making.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <ShieldIcon />
                <h2 className="mt-5 text-lg font-medium text-slate-900">
                  Private Businesses
                </h2>
              </div>

              <div className="flex flex-col items-center border-slate-200 text-center md:border-x">
                <BuildingIcon />
                <h2 className="mt-5 text-lg font-medium text-slate-900">
                  Entrepreneurial Companies
                </h2>
              </div>

              <div className="flex flex-col items-center text-center">
                <GrowthIcon />
                <h2 className="mt-5 text-lg font-medium text-slate-900">
                  Growth-Minded Leaders
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white lg:px-10">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-blue-400/40" />
            <div className="absolute -right-10 top-24 h-72 w-72 rounded-full border border-blue-400/30" />
            <div className="absolute bottom-[-120px] left-[-120px] h-96 w-96 rounded-full border border-blue-400/20" />
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight">
              Confidence comes from clarity.
            </h2>

            <p className="mt-6 text-xl leading-8 text-slate-200">
              Let’s start a conversation about your business.
            </p>

            <div className="mt-10">
              <Link
                href="/lead"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Schedule Your Free Discovery Call
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}