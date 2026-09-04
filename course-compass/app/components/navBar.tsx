"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import icon from "@/public/owls/owl_icon.svg";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/quiz", label: "Quiz" },
  { href: "/courses", label: "Browse Courses" },
  { href: "/about", label: "About Us" },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <div className="text-[var(--white)] flex w-full h-30 bg-[var(--secondary)] gap-3">
      <div className="w-full flex justify-between px-8">
        <span className="flex items-center">
          <Image
            src={icon}
            alt="Course Compass icon"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="text-[var(--green)]">Course Compass</span>
        </span>

        <nav className="flex items-stretch">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center mx-5 px-2 border-b-4 font-bold transition-colors ${
                  isActive
                    ? "text-[var(--green)] border-[var(--green)]"
                    : "text-[var(--white)] border-transparent hover:text-[var(--green)]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}