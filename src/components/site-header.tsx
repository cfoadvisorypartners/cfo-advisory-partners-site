import Link from "next/link";
import { siteContent } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            {siteContent.companyName}
          </div>
          <div className="text-sm text-slate-600">{siteContent.tagline}</div>
        </div>
        <nav className="hidden gap-8 text-sm md:flex">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link
          href="/lead"
          className="rounded-2xl bg-slate-900 px-4 py-2 text-sm text-white !text-white"
        >
          {siteContent.primaryCtaLabel}
        </Link>
      </div>
    </header>
  );
}