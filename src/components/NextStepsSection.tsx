"use client";

import { useEffect, useMemo, useState } from "react";

type NextStepItem = {
  title: string;
  description: string;
  image: string;
};

function NextStepsSection() {
  const steps: NextStepItem[] = useMemo(
    () => [
      {
        title: "Build Your Accounting Infrastructure",
        description:
          "Create the reporting structure, monthly close process, chart of accounts, and financial foundation your business needs to operate with clarity.",
        image: "/images/next-steps/accounting-infrastructure.jpg",
      },
      {
        title: "Build Your Accounting Team",
        description:
          "Put the right people in place — and make sure they are operating at the right level.",
        image: "/images/next-steps/accounting-team.jpg",
      },
      {
        title: "Build Your Business",
        description:
          "Use better financial visibility to make stronger decisions around cash flow, profitability, hiring, and growth.",
        image: "/images/next-steps/build-your-business.jpg",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [steps.length]);

  const activeStep = steps[activeIndex];

  return (
    <section className="relative bg-[#f7f3ee] lg:h-[165vh]">
      <div className="lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-lg font-semibold uppercase tracking-[0.16em] text-orange-400 sm:text-xl">
              Next Steps
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              A clear path forward, based on where your business is today
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              
              {/* IMAGE SIDE (FIXED) */}
              <div className="relative flex h-[420px] items-center justify-center bg-slate-100 p-6">
                <img
                  src={activeStep.image}
                  alt={activeStep.title}
                  className="max-h-full max-w-full object-contain transition-all duration-700 ease-in-out"
                />
              </div>

              {/* TEXT SIDE */}
              <div className="flex min-h-[420px] flex-col justify-center p-8 text-center lg:p-12 lg:text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                  Step {activeIndex + 1}
                </p>

                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                  {activeStep.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {activeStep.description}
                </p>

                <div className="mt-8 flex justify-center gap-3 lg:justify-start">
                  {steps.map((step, index) => (
                    <button
                      key={step.title}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`h-3 rounded-full transition-all ${
                        index === activeIndex
                          ? "w-10 bg-orange-400"
                          : "w-3 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="/lead"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold !text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500 hover:!text-white"
            >
              Schedule Your Free Discovery Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NextStepsSection;