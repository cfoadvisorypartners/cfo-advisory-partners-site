"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ServiceItem = {
  title: string;
  description: string;
  image: string;
};

export default function ServicesScrollSection() {
  const services: ServiceItem[] = useMemo(
    () => [
      {
        title: "Payroll Services",
        description:
          "Reliable payroll support that keeps your team paid accurately and on time.",
        image: "/images/services/payroll.jpg",
      },
      {
        title: "Monthly Progress Reporting",
        description:
          "Clear monthly reporting that helps you understand performance and spot issues early.",
        image: "/images/services/monthly-reporting.jpg",
      },
      {
        title: "Bookkeeping",
        description:
          "Timely, accurate books that support a dependable monthly close.",
        image: "/images/services/bookkeeping.jpg",
      },
      {
        title: "Accounting Framework",
        description:
          "The structure, chart of accounts, and reporting foundation needed for better visibility.",
        image: "/images/services/accounting-framework.jpg",
      },
      {
        title: "Controller Services",
        description:
          "Hands-on controller support to improve accuracy, process, and accountability.",
        image: "/images/services/controller-services.jpg",
      },
      {
        title: "CFO Advising",
        description:
          "Strategic financial insight to help owners make stronger business decisions.",
        image: "/images/services/cfo-advising.jpg",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { threshold: 0.6 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="bg-[#f6f3ef] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">
            How We Help
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            The structure, reporting, and insight your business needs
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            From accurate books to strategic financial guidance, we help build
            the financial foundation your company needs to grow with clarity.
          </p>
        </div>

        {/* Content */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left side */}
          <div className="space-y-24">
            {services.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={service.title}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="min-h-[55vh] flex items-center"
                >
                  <div
                    className={`max-w-md rounded-3xl border px-8 py-8 shadow-sm transition-all duration-300 ${
                      isActive
                        ? "border-orange-200 bg-white shadow-lg"
                        : "border-white/40 bg-white/70 opacity-60"
                    }`}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">
                      {service.title}
                    </p>
                    <p className="mt-4 text-base leading-8 text-slate-700">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right side */}
          <div className="relative hidden lg:block">
            <div className="sticky top-24 flex justify-center">
              <div className="relative w-full max-w-md rounded-[2rem] bg-white p-4 shadow-2xl shadow-slate-900/10">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
                  <img
                    src={services[activeIndex].image}
                    alt={services[activeIndex].title}
                    className="h-[560px] w-full object-cover transition-all duration-500"
                  />
                </div>

                <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
                    {services[activeIndex].title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {services[activeIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/services"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}