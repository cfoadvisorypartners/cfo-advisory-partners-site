"use client";

import { useEffect, useMemo, useState } from "react";

type IssueItem = {
  title: string;
  bubbleText: string;
  imageText: string;
  image: string;
};

function OwnerIssuesScrollSection() {
  const issues: IssueItem[] = useMemo(
    () => [
      {
        title: "We think we are profitable — but where is the money?",
        bubbleText:
          "Revenue looks strong, but cash still feels tight and unclear.",
        imageText:
          "We help owners connect profit, cash flow, receivables, payroll, debt, and spending so they can see where the money is actually going.",
        image: "/images/issues/profit-cash-flow.jpg",
      },
      {
        title: "We cannot get our books in order",
        bubbleText:
          "The books feel messy, inconsistent, or hard to rely on.",
        imageText:
          "We help clean up the financial foundation so your reports become accurate, timely, and useful for decision-making.",
        image: "/images/issues/books-in-order.jpg",
      },
      {
        title: "We cannot close the books fast enough",
        bubbleText:
          "Month-end takes too long and leadership is always looking backward.",
        imageText:
          "We help improve the monthly close process so you get financial visibility sooner and can make decisions with current information.",
        image: "/images/issues/monthly-close.jpg",
      },
      {
        title: "We need help with payroll",
        bubbleText:
          "Payroll is too important to be disconnected from financial oversight.",
        imageText:
          "We help connect payroll, labor costs, reporting, and cash planning so compensation does not become a blind spot.",
        image: "/images/issues/payroll-help.jpg",
      },
      {
        title: "We need a controller, but cannot justify the overhead",
        bubbleText:
          "The business needs financial leadership, but a full-time hire may not make sense yet.",
        imageText:
          "We provide controller and CFO-level support without the cost, commitment, or overhead of adding another full-time executive.",
        image: "/images/issues/controller-overhead.jpg",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % issues.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [issues.length]);

  const visibleCards = [
    issues[(activeIndex - 2 + issues.length) % issues.length],
    issues[(activeIndex - 1 + issues.length) % issues.length],
    issues[activeIndex],
    issues[(activeIndex + 1) % issues.length],
    issues[(activeIndex + 2) % issues.length],
  ];

  return (
    <section className="relative bg-white lg:h-[175vh]">
      <div className="lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-lg font-semibold uppercase tracking-[0.16em] text-orange-400 sm:text-xl">
              What Owners Are Facing
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              When the numbers are unclear, every decision feels harder
            </h2>

            <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Growing businesses often reach a point where bookkeeping alone is
              not enough. We help owners get control of the financial issues
              that slow down decisions, cash flow, and growth.
            </p>
          </div>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            {/* LEFT SIDE IMAGE */}
            <div className="relative hidden lg:block">
              <div className="mx-auto flex w-full max-w-2xl flex-col">
                <div className="rounded-[2rem] bg-[#f7f3ee] p-5 shadow-2xl shadow-slate-900/10">
                  <div className="relative flex h-[320px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-white">
                    <img
                      src={issues[activeIndex].image}
                      alt={issues[activeIndex].title}
                      className="max-h-full w-full object-contain transition-all duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
                    />
                  </div>

                  <div className="mt-5 min-h-[130px] rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-100">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                      Owner Challenge
                    </p>

                    <h3 className="mt-3 text-lg font-semibold leading-7 text-slate-900">
                      {issues[activeIndex].title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {issues[activeIndex].imageText}
                    </p>
                  </div>
                </div>

                <div className="mt-7 text-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-base font-semibold !text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 hover:!text-white"
                  >
                    Schedule a Free Consultation
                  </a>

                  <p className="mt-3 text-xs text-slate-500">
                    Built for owners who need financial clarity before making
                    their next major decision.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE BUBBLES */}
            <div className="relative hidden h-[540px] overflow-hidden lg:block">
              <div className="absolute inset-0">
                {visibleCards.map((issue, displayIndex) => {
                  const position = displayIndex - 2;
                  const isActive = position === 0;

                  return (
                    <div
                      key={`${issue.title}-${activeIndex}-${displayIndex}`}
                      className={`absolute right-0 top-1/2 w-full max-w-lg rounded-3xl border px-8 py-5 transition-all duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
                        isActive
                          ? "z-30 border-slate-300 bg-white opacity-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                          : "z-10 border-transparent bg-slate-50/70 opacity-40"
                      }`}
                      style={{
                        transform: `translateY(calc(-50% + ${
                          position * 120
                        }px)) scale(${isActive ? 1 : 0.98})`,
                      }}
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-400">
                        Common Owner Concern
                      </p>

                      <h3 className="mt-3 text-lg font-semibold leading-7 text-slate-900">
                        {issue.title}
                      </h3>

                      <p className="mt-3 text-base leading-7 text-slate-700">
                        {issue.bubbleText}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
            </div>

            {/* MOBILE */}
            <div className="space-y-10 lg:hidden">
              {issues.map((issue) => (
                <div
                  key={issue.title}
                  className="rounded-3xl bg-[#f7f3ee] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                >
                  <img
                    src={issue.image}
                    alt={issue.title}
                    className="h-auto w-full rounded-2xl bg-white object-contain"
                  />

                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                    Owner Challenge
                  </p>

                  <h3 className="mt-3 text-xl font-semibold leading-8 text-slate-900">
                    {issue.title}
                  </h3>

                  <p className="mt-3 text-base leading-8 text-slate-700">
                    {issue.imageText}
                  </p>
                </div>
              ))}

              <div className="text-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-base font-semibold !text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 hover:!text-white"
                >
                  Schedule a Free Consultation
                </a>

                <p className="mt-3 text-xs text-slate-500">
                  Built for owners who need financial clarity before making
                  their next major decision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OwnerIssuesScrollSection;