import { ReactElement, ReactNode } from "react";

export function Card({ children }: {children: ReactNode}) {
  return (
    <button
      className="
        bg-[var(--white)]
        border
        border-2
        border-[var(--primary)]
        rounded-sm
        flex
        flex-row
        justify-between
        items-center
        px-2
        cursor-pointer
      ">
      {children}
    </button>
  );
}
