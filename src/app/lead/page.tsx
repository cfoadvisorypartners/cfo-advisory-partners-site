"use client";

import { useEffect, useMemo, useState } from "react";
import { LeadForm } from "@/components/lead-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { leadPageBullets } from "@/lib/site-content";

export default function LeadPage() {
  const leadImages = useMemo(
    () => [
      "/images/lead/baker.jpg",
      "/images/lead/business.jpg",
      "/images/lead/coffee-shop.jpg",
      "/images/lead/construction.jpg",
      "/images/lead/florist.jpg",
    ],
    []
  );

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % leadImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [leadImages.length]);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl shadow-slate-900/15">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[520px] overflow-hidden lg:min-h-[620px]">
              {leadImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt="Business owner working with CFO Advisory Partners"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                    index === activeImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/20" />

              <div className="relative z-10 flex min-h-[520px] flex-col justify-center p-8 lg:min-h-[620px] lg:p-12">
                <div className="text-xs uppercase tracking-[0.35em] text-orange-300">
                  For owners, presidents, and CEOs
                </div>

                <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
                  You have accounting. Now let&apos;s give you financial clarity.
                </h1>

                <p className="mt-5 max-w-xl text-lg leading-8 text-slate-200">
                  Most growing businesses have bookkeeping in place but still
                  lack clear visibility into cash, profitability, and forward
                  planning.
                </p>

                <ul className="mt-8 space-y-4 text-slate-100">
                  {leadPageBullets.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-orange-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex gap-2">
                  {leadImages.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === activeImageIndex
                          ? "w-10 bg-orange-300"
                          : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Show lead image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center bg-slate-950 p-6 lg:p-10">
              <LeadForm />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}