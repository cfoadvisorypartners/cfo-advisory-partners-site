"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type ServiceItem = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export default function ServicesPage() {
  const services: ServiceItem[] = useMemo(
    () => [
      {
        title: "Fractional CFO Leadership",
        subtitle: "CFO-level guidance without the overhead",
        description:
          "Get experienced financial leadership to help with cash flow, profitability, forecasting, and better decision-making.",
        image: "/images/services-page/cfo-advising.png",
      },
      {
        title: "Accounting Framework",
        subtitle: "Clean accounts. Consistent processes. Reliable reporting.",
        description:
          "Build the financial structure your business needs so reporting becomes accurate, useful, and consistent.",
        image: "/images/services-page/accounting-framework.png",
      },
      {
        title: "Monthly Cadence",
        subtitle: "Close monthly. Know where you stand.",
        description:
          "Create a reliable month-end close process so you are not waiting weeks to understand performance.",
        image: "/images/services-page/monthly-reporting.png",
      },
      {
        title: "Cash Flow & Profitability",
        subtitle: "Find out what is really driving profit",
        description:
          "Understand where cash is going, what is creating margin pressure, and what decisions need attention.",
        image: "/images/services-page/bookkeeping.png",
      },
      {
        title: "Controller Services",
        subtitle: "Financial oversight without a full-time hire",
        description:
          "Add controller-level support to improve accuracy, accountability, process, and reporting discipline.",
        image: "/images/services-page/controller-services.png",
      },
      {
        title: "Payroll Support",
        subtitle: "Keep payroll connected to financial visibility",
        description:
          "Improve payroll oversight so labor costs, timing, and reporting are better connected to the business.",
        image: "/images/services-page/payroll.png",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  const activeService = services[activeIndex];

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <section className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-700">
              Services
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Build the structure behind better financial decisions.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Our work helps leadership teams move from having numbers to
              actually having clarity.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {services.map((service, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-[1.5rem] p-5 text-left transition-all ${
                      isActive
                        ? "bg-slate-950 text-white shadow-xl shadow-slate-900/20"
                        : "bg-white text-slate-900 shadow-sm hover:bg-slate-100"
                    }`}
                  >
                    <h2 className="text-lg font-semibold">{service.title}</h2>
                    <p
                      className={`mt-2 text-sm leading-6 ${
                        isActive ? "text-slate-200" : "text-slate-600"
                      }`}
                    >
                      {service.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200">
            <div className="relative flex h-[560px] items-center justify-center bg-white p-6">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="max-h-full max-w-full object-contain"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/80 to-transparent p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
                  {activeService.title}
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                  {activeService.subtitle}
                </h3>

                <p className="mt-3 max-w-2xl text-base leading-7 text-slate-100">
                  {activeService.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-14 max-w-4xl rounded-[2rem] bg-white p-10 text-center shadow-sm ring-1 ring-slate-200">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Ready to bring clarity to your financial decisions?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Schedule a free discovery call to walk through your current
            financial structure, identify gaps, and determine what level of
            support your business needs.
          </p>

          <div className="mt-8">
            <Link
              href="/lead"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-base font-semibold !text-white shadow-lg shadow-slate-950/20 transition hover:bg-blue-700 hover:!text-white"
            >
              Schedule Your Free Discovery Call
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}