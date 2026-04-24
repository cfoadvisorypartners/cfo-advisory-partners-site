"use client";

import { useEffect, useMemo, useState } from "react";

type ServiceItem = {
  title: string;
  bubbleText: string;
  imageText: string;
  image: string;
};

export default function ServicesScrollSection() {
  const services: ServiceItem[] = useMemo(
    () => [
      {
        title: "Payroll Services",
        bubbleText:
          "Payroll support that helps keep compensation accurate, timely, and organized.",
        imageText:
          "Keep payroll connected to your financial reporting so labor costs are easier to understand.",
        image: "/images/services/payroll.jpg",
      },
      {
        title: "Monthly Progress Reporting",
        bubbleText:
          "Clear reporting that shows how the business is performing month after month.",
        imageText:
          "Get timely reports that help you see trends, spot issues, and make better decisions.",
        image: "/images/services/monthly-reporting.jpg",
      },
      {
        title: "Bookkeeping",
        bubbleText:
          "Reliable bookkeeping that supports an accurate monthly close process.",
        imageText:
          "Build confidence in your numbers with clean books and consistent monthly reporting.",
        image: "/images/services/bookkeeping.jpg",
      },
      {
        title: "Accounting Framework",
        bubbleText:
          "A stronger accounting structure so your reports actually tell the right story.",
        imageText:
          "Create the chart of accounts, reporting cadence, and financial structure your business needs.",
        image: "/images/services/accounting-framework.jpg",
      },
      {
        title: "Controller Services",
        bubbleText:
          "Controller-level support to improve accuracy, process, and accountability.",
        imageText:
          "Add experienced financial oversight without immediately hiring a full-time controller.",
        image: "/images/services/controller-services.jpg",
      },
      {
        title: "CFO Advising",
        bubbleText:
          "Strategic financial guidance that helps owners understand what to do next.",
        imageText:
          "Turn financial information into clearer decisions around cash flow, profitability, and growth.",
        image: "/images/services/cfo-advising.jpg",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  const visibleCards = [
    services[(activeIndex - 2 + services.length) % services.length],
    services[(activeIndex - 1 + services.length) % services.length],
    services[activeIndex],
    services[(activeIndex + 1) % services.length],
    services[(activeIndex + 2) % services.length],
  ];

  return (
    <section className="relative bg-[#f7f3ee] lg:h-[175vh]">
      <div className="lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-lg font-semibold uppercase tracking-[0.16em] text-orange-400 sm:text-xl">
              How We Help
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              The structure, reporting, and insight your business needs
            </h2>

            <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              From accurate books to strategic financial guidance, we help build
              the financial foundation your company needs to grow with clarity.
            </p>
          </div>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative hidden h-[520px] overflow-hidden lg:block">
              <div className="absolute inset-0">
                {visibleCards.map((service, displayIndex) => {
                  const position = displayIndex - 2;
                  const isActive = position === 0;

                  return (
                    <div
                      key={`${service.title}-${activeIndex}-${displayIndex}`}
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
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-400">
                        {service.title}
                      </p>
                      <p className="mt-3 text-base leading-7 text-slate-700">
                        {service.bubbleText}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f7f3ee] to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f7f3ee] to-transparent" />
            </div>

            <div className="relative hidden lg:block">
              <div className="mx-auto flex w-full max-w-2xl flex-col">
                <div className="rounded-[2rem] bg-white p-5 shadow-2xl shadow-slate-900/10">
                  <div className="relative flex h-[320px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-white">
                    <img
                      src={services[activeIndex].image}
                      alt={services[activeIndex].title}
                      className="max-h-full w-full object-contain transition-all duration-700"
                    />
                  </div>

                  <div className="mt-5 min-h-[105px] rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-100">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                      {services[activeIndex].title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {services[activeIndex].imageText}
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
                </div>
              </div>
            </div>

            <div className="space-y-8 lg:hidden">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl bg-white p-5 shadow-lg shadow-slate-900/5"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-auto w-full rounded-2xl object-contain"
                  />
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                    {service.title}
                  </p>
                  <p className="mt-3 text-base leading-8 text-slate-700">
                    {service.imageText}
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