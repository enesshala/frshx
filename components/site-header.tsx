"use client";

import { List, X } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav } from "@/lib/site";

function navClass(active: boolean) {
  return active
    ? "text-teal"
    : "text-ink hover:text-teal transition-colors duration-200";
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenPath(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function isActive(href: string) {
    return pathname === href;
  }

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-canvas/95 backdrop-blur-sm">
      <div className="h-1 bg-teal" aria-hidden="true" />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="font-serif text-lg tracking-[0.22em] text-navy"
        >
          FRSHX
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium ${navClass(isActive(item.href))}`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/join"
            className={`text-sm font-medium ${navClass(isActive("/join"))}`}
            aria-current={isActive("/join") ? "page" : undefined}
          >
            Join Our Talent Network
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-11 cursor-pointer items-center bg-navy px-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-navy-deep"
            aria-current={isActive("/contact") ? "page" : undefined}
          >
            Contact
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center text-navy md:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? (
            <X aria-hidden="true" size={22} weight="regular" />
          ) : (
            <List aria-hidden="true" size={22} weight="regular" />
          )}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
      {open ? (
        <nav
          id="site-menu"
          aria-label="Primary"
          className="border-t border-line px-5 py-3 md:hidden"
        >
          <ul className="flex flex-col">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex min-h-12 items-center text-base font-medium ${navClass(isActive(item.href))}`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/join"
                className={`flex min-h-12 items-center text-base font-medium ${navClass(isActive("/join"))}`}
                aria-current={isActive("/join") ? "page" : undefined}
              >
                Join Our Talent Network
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/contact"
                className="inline-flex min-h-12 w-full items-center justify-center bg-navy text-sm font-medium text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
