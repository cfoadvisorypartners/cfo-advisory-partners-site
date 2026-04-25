"use client";

import { useEffect, useState } from "react";

const steps = [
  {
    title: "Build Your Accounting Infrastructure",
    description:
      "Create reliable reporting, cash visibility, and financial systems you can trust.",
    image: "/images/infrastructure.jpg",
  },
  {
    title: "Build Your Accounting Team",
    description:
      "Put the right people in place — and make sure they’re operating at the right level.",
    image: "/images/team.jpg",
  },
  {
    title: "Build Your Business",
    description:
      "Use financial clarity to make better decisions, improve margins, and grow with confidence.",
    image: "/images/business.jpg",
  },
];

export default function NextStepsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % steps.length);
    }, 7500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f7f3ee] px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Next Steps
        </p>

        <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          A clear path forward, based on where your business is today
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-lg leading-8 text-slate-600">
          Every business reaches a point where better financial structure,
          stronger people, or clearer strategy becomes the priority. We help you
          focus on what matters most — and build from there.
        </p>

        <div className="relative mx-auto flex h-[340px] max-w-3xl items-center justify-center">
          {steps.map((step, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={step.title}
                className={`absolute h-[300px] w-full overflow-hidden rounded-3xl border border-black/5 shadow-xl shadow-black/10 transition-all duration-700 ease-out ${
                  isActive
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-5 scale-[0.98] opacity-0"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${step.image})` }}
                />

                <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
                  <h3 className="mb-4 max-w-xl text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                    {step.title}
                  </h3>

                  <p className="max-w-lg text-base leading-7 text-slate-600 md:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
          >
            Schedule Your Free Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}