import { ReactNode } from "react";

export function PrimaryButton({ children }: { children: ReactNode }) {
  return (
    <button 
      className="
        bg-[var(--primary)]
        font-bold
        rounded-lg
        px-4
        py-2
        text-[var(--white)]
        cursor-pointer"
    >{children}</button>
  );
}