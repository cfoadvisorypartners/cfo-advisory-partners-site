"use client";

import { useEffect, useState } from "react";
import ServicesScrollSection from "@/components/ServicesScrollSection";
import OwnerIssuesScrollSection from "@/components/OwnerIssuesScrollSection";

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

  const services = [
    {
      title: "Cash Flow Clarity",
      description:
        "See where cash is going, what is coming in, and what needs attention before it becomes a problem.",
    },
    {
      title: "Profitability Insight",
      description:
        "Understand what is actually driving profit so you can make better operating decisions.",
    },
    {
      title: "Decision Support",
      description:
        "Get experienced CFO guidance without hiring a full-time CFO.",
    },
  ];

  const testimonials = [
    {
      quote:
        "John helped us understand what our numbers were actually saying and gave us a much clearer path forward.",
      name: "Client Name",
      role: "CEO, Example Company",
    },
    {
      quote:
        "We finally had visibility into cash flow and profitability in a way that helped us make decisions quickly.",
      name: "Client Name",
      role: "Owner, Example Company",
    },
  ];

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
                    We’ll bring clarity to your&nbsp;
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

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              What we do
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Fractional CFO support built for growing companies
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We bring structure, insight, and financial decision-making support
              to companies that have outgrown basic reporting.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-800"
            >
              Book Your Complimentary Discovery Call
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] bg-slate-900 p-10 text-white lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Why it matters
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Financial leadership without hiring a full-time CFO
            </h2>
          </div>

          <div className="rounded-3xl bg-white/5 p-6">
            <p className="text-4xl font-semibold">Clear reporting</p>
            <p className="mt-2 text-slate-300">
              Build an accounting framework you can actually run the business
              on.
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 p-6">
            <p className="text-4xl font-semibold">Better decisions</p>
            <p className="mt-2 text-slate-300">
              Turn monthly numbers into practical guidance for owners and
              leadership teams.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Credibility
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Trusted guidance for owners who need clarity fast
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.quote}
                className="rounded-3xl border border-slate-200 p-8 shadow-sm"
              >
                <blockquote className="text-lg leading-8 text-slate-700">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <div className="font-semibold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-500">{testimonial.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Next step
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            Get the financial clarity you need to lead with confidence
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            If your numbers are not helping you make better decisions, let’s
            talk.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-500"
            >
              Schedule Your Free Discovery Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}