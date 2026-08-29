import { ReactNode } from "react";

export function PrimaryButton({ children }: { children: ReactNode }) {
  return (
    <button className="bg-[var(--primary)]">{children}</button>
  );
}