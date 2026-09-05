"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import icon from "@/public/owls/owl_icon.svg";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/quiz", label: "Quiz" },
  { href: "/courses", label: "Browse Courses" },
  { href: "/about", label: "About Us" },
];

export function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const navRef = useRef<HTMLElement>(null);

  const activeHref =
    NAV_LINKS.find(({ href }) => (href === "/" ? pathname === "/" : pathname.startsWith(href)))
      ?.href ?? null;

  const measureIndicator = useCallback(() => {
    if (!activeHref) {
      setIndicator(null);
      return;
    }
    const el = linkRefs.current[activeHref];
    const nav = navRef.current;
    if (!el || !nav) return;

    const elRect = el.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    setIndicator({ left: elRect.left - navRect.left, width: elRect.width });
  }, [activeHref]);

  useEffect(() => {
    measureIndicator();
    window.addEventListener("resize", measureIndicator);
    return () => window.removeEventListener("resize", measureIndicator);
  }, [measureIndicator]);

  useEffect(() => {
    // close the mobile sheet whenever the route changes
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[var(--secondary)]/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.08)]">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src={icon} alt="" width={36} height={36} className="h-9 w-9" />
          <span className="text-lg font-bold text-[var(--green)]">Course Compass</span>
        </Link>

        {/* Desktop nav */}
        <nav ref={navRef} className="relative hidden md:flex items-center gap-1">
          {indicator && (
            <span
              aria-hidden
              className="absolute bottom-0 h-[3px] rounded-full bg-[var(--green)] transition-[left,width] duration-300 ease-out"
              style={{ left: indicator.left, width: indicator.width }}
            />
          )}
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = href === activeHref;
            return (
              <Link
                key={href}
                href={href}
                ref={(el) => {
                  linkRefs.current[href] = el;
                }}
                className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green)] ${
                  isActive
                    ? "text-[var(--green)]"
                    : "text-[var(--white)]/85 hover:text-[var(--white)] hover:bg-white/5"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="md:hidden flex items-center justify-center rounded-lg p-2 text-[var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green)]"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          mobileOpen ? "max-h-72" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-white/10 px-4 py-3">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = href === activeHref;
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-4 py-3 text-sm font-semibold border-l-4 transition-colors ${
                  isActive
                    ? "border-[var(--green)] text-[var(--green)] bg-white/5"
                    : "border-transparent text-[var(--white)]/85 hover:bg-white/5"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}