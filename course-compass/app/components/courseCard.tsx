import { ReactElement, ReactNode } from "react";

export function Card({ children }: {children: ReactNode}) {
  return (
    <button className="w-50 h-100">
      {children}
    </button>
  );
}
