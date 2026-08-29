import { ReactNode } from "react";

export default function NavBtn({ children }: { children: ReactNode }) {
  return (
    <button className="bg-[var(--primary)] mx-5">
      {children}
    </button>
  );
}