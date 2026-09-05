import { ReactNode } from "react";

export function SecondaryButton({ children }: { children: ReactNode }) {
  return (
    <button 
      className="
        bg-[var(--background)]
        font-bold
        rounded-lg
        px-4
        py-2
        text-[var(--text-secondary)]
        cursor-pointer
        border
        border-[var(--text-secondary)]
        border-2"
    >{children}</button>
  );
}