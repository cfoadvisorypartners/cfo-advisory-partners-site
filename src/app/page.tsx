"use client";

import { useEffect, useState } from "react";
import ServicesScrollSection from "@/components/ServicesScrollSection";
import OwnerIssuesScrollSection from "@/components/OwnerIssuesScrollSection";
import NextStepsSection from "@/components/NextStepsSection";

export default function HomePage() {
  const rotatingWords = ["cash flow", "profitability", "decision-making"];
  const [activeWord, setActiveWord] = useState(rotatingWords[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((current) => {
        const currentIndex = rotatingWords.indexOf(current);
        const nextIndex = (currentIndex + 1) % rotatingWords.length;
        return rotatingWords[nextIndex];
      });
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white text-slate-900">
      <section className="relative isolate min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/home-hero-poster.jpg"
          >
            <source src="/videos/cfo-hero-loop.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-slate-900/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/5 via-slate-900/10 to-slate-900/25" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
          <header className="mx-auto w-full max-w-6xl rounded-full border border-white/25 bg-white/80 px-4 py-3 shadow-lg shadow-slate-950/10 backdrop-blur-md">
            <div className="flex items-center justify-between gap-4">
              <a
                href="/"
                className="text-sm font-semibold tracking-wide text-slate-900 sm:text-base"
              >
                CFO ADVISORY PARTNERS
              </a>

              <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
                <a href="/about" className="transition hover:text-slate-950">
                  About
                </a>
                <a href="/services" className="transition hover:text-slate-950">
                  Services
                </a>
                <a href="/contact" className="transition hover:text-slate-950">
                  Contact
                </a>
              </nav>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-orange-400 px-5 py-2.5 text-sm font-semibold !text-white transition hover:bg-orange-300 hover:!text-white"
              >
                Schedule a Call
              </a>
            </div>
          </header>

          <div className="relative flex flex-1 items-start justify-center pt-24 sm:pt-28 lg:pt-32">
            <div className="mx-auto max-w-5xl px-2 text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                You lead your business.
              </h1>

              <div className="mt-2 flex justify-center">
                <div className="flex w-full max-w-4xl items-baseline justify-center text-center text-2xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  <span className="shrink-0">
                    We’ll bring the clarity to your&nbsp;
                  </span>
                  <span className="inline-block min-w-[17ch] text-left text-orange-400 transition-opacity duration-500">
                    {activeWord}
                  </span>
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-base font-semibold !text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500 hover:!text-white"
                >
                  Schedule Your Free Discovery Call
                </a>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <svg
                className="absolute left-[4%] top-[57%] z-10 h-48 w-[34rem]"
                viewBox="0 0 540 210"
                fill="none"
              >
                <path
                  d="M260 20 H420 Q430 20 430 45 V140 Q430 165 405 165 H350"
                  stroke="white"
                  strokeWidth="3"
                  strokeDasharray="8 8"
                  opacity="0.85"
                />
                <circle cx="275" cy="20" r="6" fill="#fb923c" />
                <circle cx="350" cy="165" r="6" fill="#fb923c" />
              </svg>

              <svg
                className="absolute right-[4%] top-[58%] z-10 h-48 w-[34rem]"
                viewBox="0 0 540 210"
                fill="none"
              >
                <path
                  d="M280 20 H120 Q110 20 110 45 V140 Q110 165 135 165 H190"
                  stroke="white"
                  strokeWidth="3"
                  strokeDasharray="8 8"
                  opacity="0.85"
                />
                <circle cx="265" cy="20" r="6" fill="#fb923c" />
                <circle cx="190" cy="165" r="6" fill="#fb923c" />
              </svg>

              <div className="absolute left-[4%] top-[48%] z-20 w-72 rounded-2xl border border-white/20 bg-white/92 p-5 text-left shadow-2xl shadow-slate-950/20 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
                  Owner
                </p>
                <p className="mt-3 text-sm leading-8 text-slate-800">
                  I’m not sure if we’re actually as profitable as we should be.
                </p>
              </div>

              <div className="absolute left-[5.5%] top-[68%] z-20 w-80 rounded-2xl border border-white/20 bg-white/92 p-5 text-left shadow-2xl shadow-slate-950/20 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
                  CFO Advisory Partners
                </p>
                <p className="mt-3 text-sm leading-8 text-slate-800">
                  We build the reporting and visibility needed to answer that
                  clearly.
                </p>
              </div>

              <div className="absolute right-[4%] top-[51%] z-20 w-72 rounded-2xl border border-white/20 bg-white/92 p-5 text-left shadow-2xl shadow-slate-950/20 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
                  CEO
                </p>
                <p className="mt-3 text-sm leading-8 text-slate-800">
                  Our numbers don’t help us decide what to do next.
                </p>
              </div>

              <div className="absolute right-[5.5%] top-[72%] z-20 w-80 rounded-2xl border border-white/20 bg-white/92 p-5 text-left shadow-2xl shadow-slate-950/20 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
                  CFO Advisory Partners
                </p>
                <p className="mt-3 text-sm leading-8 text-slate-800">
                  We turn your numbers into better decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OwnerIssuesScrollSection />

      <ServicesScrollSection />

      <NextStepsSection />
    </main>
  );
}