"use client";

import { useEffect, useMemo, useState } from "react";

type IssueItem = {
  imageTitle: string;
  bubbleTitle: string;
  bubbleText: string;
  imageText: string;
  image: string;
};

function OwnerIssuesScrollSection() {
  const issues: IssueItem[] = useMemo(
    () => [
      {
        imageTitle: "We think we are profitable — but where is the money?",
        bubbleTitle: "Cash feels tighter than it should",
        bubbleText:
          "Revenue may look strong, but the owner still cannot clearly see where the money is going.",
        imageText:
          "We help connect profit, cash flow, receivables, payroll, debt, and spending so owners can understand what is really happening with cash.",
        image: "/images/issues/profit-cash-flow.jpg",
      },
      {
        imageTitle: "We cannot get our books in order",
        bubbleTitle: "The numbers do not feel dependable",
        bubbleText:
          "Reports exist, but leadership is not confident enough to rely on them.",
        imageText:
          "We help clean up the financial foundation so reporting becomes accurate, timely, and useful for decision-making.",
        image: "/images/issues/books-in-order.jpg",
      },
      {
        imageTitle: "We cannot close the books fast enough",
        bubbleTitle: "Month-end takes too long",
        bubbleText:
          "By the time the numbers are ready, the business has already moved on.",
        imageText:
          "We help improve the monthly close process so you get financial visibility sooner and can make decisions with current information.",
        image: "/images/issues/monthly-close.jpg",
      },
      {
        imageTitle: "We need help with payroll",
        bubbleTitle: "Payroll needs better oversight",
        bubbleText:
          "Labor costs are too important to be disconnected from financial planning and reporting.",
        imageText:
          "We help connect payroll, labor costs, reporting, and cash planning so compensation does not become a blind spot.",
        image: "/images/issues/payroll-help.jpg",
      },
      {
        imageTitle: "We need a controller, but cannot justify the overhead",
        bubbleTitle: "A full-time hire may be too much",
        bubbleText:
          "The business needs financial leadership, but not necessarily another full-time executive.",
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
    <section className="relative bg-[#f7f3ee] lg:h-[175vh]">
      <div className="lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8 lg:py-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-lg font-semibold uppercase tracking-[0.16em] text-orange-400 sm:text-xl">
              What Owners Are Facing
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              When the numbers are unclear, every decision feels harder
            </h2>
          </div>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative hidden lg:block">
              <div className="mx-auto flex w-full max-w-2xl flex-col">
                <div className="rounded-[2rem] bg-white p-5 shadow-2xl shadow-slate-900/10">
                  <div className="relative flex h-[300px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-white">
                    <img
                      src={issues[activeIndex].image}
                      alt={issues[activeIndex].imageTitle}
                      className="max-h-full w-full object-contain transition-all duration-700"
                    />
                  </div>

                  <div className="mt-5 min-h-[125px] rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-100">
                    <h3 className="text-lg font-semibold leading-7 text-slate-900">
                      {issues[activeIndex].imageTitle}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {issues[activeIndex].imageText}
                    </p>
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-base font-semibold !text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 hover:!text-white"
                  >
                    Schedule a Free Consultation
                  </a>
                </div>
              </div>
            </div>

            <div className="relative hidden h-[500px] overflow-hidden lg:block">
              <div className="absolute inset-0">
                {visibleCards.map((issue, displayIndex) => {
                  const position = displayIndex - 2;
                  const isActive = position === 0;

                  return (
                    <div
                      key={`${issue.bubbleTitle}-${activeIndex}-${displayIndex}`}
                      className={`absolute left-0 top-1/2 w-full max-w-lg rounded-3xl border px-8 py-5 transition-all duration-700 ease-in-out ${
                        isActive
                          ? "z-30 border-orange-200 bg-white opacity-100 shadow-xl shadow-orange-100/60"
                          : "z-10 border-slate-200 bg-white/60 opacity-45 shadow-sm"
                      }`}
                      style={{
                        transform: `translateY(calc(-50% + ${
                          position * 145
                        }px)) scale(${isActive ? 1 : 0.96})`,
                      }}
                    >
                      <h3 className="text-lg font-semibold leading-7 text-slate-900">
                        {issue.bubbleTitle}
                      </h3>

                      <p className="mt-3 text-base leading-7 text-slate-700">
                        {issue.bubbleText}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f7f3ee] to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f7f3ee] to-transparent" />
            </div>

            <div className="space-y-8 lg:hidden">
              {issues.map((issue) => (
                <div
                  key={issue.imageTitle}
                  className="rounded-3xl bg-white p-5 shadow-lg shadow-slate-900/5"
                >
                  <img
                    src={issue.image}
                    alt={issue.imageTitle}
                    className="h-auto w-full rounded-2xl object-contain"
                  />

                  <h3 className="mt-5 text-xl font-semibold leading-8 text-slate-900">
                    {issue.imageTitle}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OwnerIssuesScrollSection;