import Link from "next/link";
import { siteContent } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <div className="text-sm font-semibold text-slate-900">{siteContent.companyName}</div>
          <div className="mt-1 text-sm text-slate-600">{siteContent.tagline}</div>
        </div>
        <div className="flex gap-6 text-sm text-slate-600">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/lead">Lead Page</Link>
        </div>
      </div>
    </footer>
  );
}