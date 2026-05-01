"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { LeadForm } from "@/components/lead-form";
import { SiteFooter } from "@/components/site-footer";
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
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="block">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-700">
              CFO Advisory Partners
            </div>
            <div className="mt-1 text-sm text-slate-600">
              Stop Guessing. Start Growing.
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-800 md:flex">
            <Link href="/" className="transition hover:text-blue-700">
              Home
            </Link>
            <Link href="/about" className="transition hover:text-blue-700">
              About
            </Link>
            <Link href="/services" className="transition hover:text-blue-700">
              Services
            </Link>
            <Link href="/contact" className="transition hover:text-blue-700">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="grid overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl shadow-slate-900/15 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-6 text-white lg:p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-orange-300">
              For owners, presidents, and CEOs
            </div>

            <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              You have accounting. Now let&apos;s give you financial clarity.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-200">
              Most growing businesses have bookkeeping in place but still lack
              clear visibility into cash, profitability, and forward planning.
            </p>

            <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-100">
              {leadPageBullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <LeadForm />
            </div>
          </div>

          <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-slate-900 p-6 lg:min-h-[720px]">
            {leadImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt="Business owner supported by CFO Advisory Partners"
                className={`absolute inset-0 m-auto max-h-full max-w-full object-contain transition-opacity duration-1000 ${
                  index === activeImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
              {leadImages.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeImageIndex
                      ? "w-10 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Show lead image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}