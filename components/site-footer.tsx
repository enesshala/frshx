import Link from "next/link";
import { primaryNav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-serif text-xl tracking-[0.22em]">FRSHX</p>
          <p className="mt-4 font-serif text-2xl leading-snug text-white">
            Beyond Numbers. Beyond Borders.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
            Founder-led financial intelligence and advisory, based in Kosovo
            and working with businesses worldwide.
          </p>
        </div>
        <div className="md:col-span-3">
          <h2 className="text-xs font-medium tracking-[0.16em] text-white/70 uppercase">
            Explore
          </h2>
          <ul className="mt-4 space-y-2">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-sm text-white/90 underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <h2 className="text-xs font-medium tracking-[0.16em] text-white/70 uppercase">
            Enquiries
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/contact?intent=services"
                className="inline-flex min-h-11 items-center text-sm text-white/90 underline-offset-4 hover:underline"
              >
                I need finance services
              </Link>
            </li>
            <li>
              <Link
                href="/contact?intent=talent"
                className="inline-flex min-h-11 items-center text-sm text-white/90 underline-offset-4 hover:underline"
              >
                I need a dedicated professional
              </Link>
            </li>
            <li>
              <Link
                href="/join"
                className="inline-flex min-h-11 items-center text-sm text-white/90 underline-offset-4 hover:underline"
              >
                I want to join the talent network
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="inline-flex min-h-11 items-center text-sm text-white/90 underline-offset-4 hover:underline"
              >
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-5 py-5 text-sm text-white/70 sm:px-8">
          FRSHX
        </p>
      </div>
    </footer>
  );
}
