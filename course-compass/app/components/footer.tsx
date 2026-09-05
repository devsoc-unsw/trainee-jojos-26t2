"use client";

import { BouncyLogo } from "./BouncyLogo";

export function Footer() {
  return (
    <footer className="relative h-80 w-full overflow-hidden bg-[var(--primary)]">
      {/* Green top border */}
      <div className="absolute left-0 top-0 z-10 h-3 w-full bg-[var(--green)]" />

      {/* Footer content */}
      <div className="relative z-20 flex h-full items-start justify-between px-6 py-6">
        <span className="flex items-center gap-2">
          <span className="text-[var(--green)]">
            Course Compass
          </span>
        </span>

        <span className="text-[var(--white)]">
          &copy; {new Date().getFullYear()} Course Compass
        </span>
      </div>

      {/* Bouncy logo has the entire footer as its playground */}
      <BouncyLogo />
    </footer>
  );
}
