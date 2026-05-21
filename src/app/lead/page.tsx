"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { LeadForm } from "@/components/lead-form";
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
      <script
        id="meta-pixel-1565846307843505-lead"
        dangerouslySetInnerHTML={{
          __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1565846307843505');
fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1565846307843505&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
          <Link href="/" className="block">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-700">
              CFO Advisory Partners
            </div>
            <div className="mt-0.5 text-xs text-slate-600">
              Stop Guessing. Start Growing.
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-800 md:flex">
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

      <main className="mx-auto max-w-7xl px-6 py-4 lg:px-10">
        <div className="grid overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl shadow-slate-900/15 lg:h-[calc(100vh-96px)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-y-auto p-5 text-white lg:p-6">
            <div className="text-[11px] uppercase tracking-[0.25em] text-orange-300">
              For owners, presidents, and CEOs
            </div>

            <h1 className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[2rem] lg:leading-tight">
              You have accounting. Now let&apos;s give you financial clarity.
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-200">
              Most growing businesses have bookkeeping in place but still lack
              clear visibility into cash, profitability, and forward planning.
            </p>

            <ul className="mt-4 space-y-1.5 text-sm leading-5 text-slate-100">
              {leadPageBullets.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <LeadForm />
            </div>
          </div>

          <div className="relative hidden items-center justify-center overflow-hidden bg-slate-900 p-5 lg:flex">
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

            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
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
    </div>
  );
}
