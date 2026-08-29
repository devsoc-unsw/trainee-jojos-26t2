import { ReactNode } from "react";

export function SecondaryButton({ children }: { children: ReactNode }) {
  return (
    <button className="bg-[var(--secondary)]">{children}</button>
  );
}