import Image from "next/image";
import icon from "@/public/owls/owl_icon.svg";

export function Footer() {
  return (
    <footer className="w-full h-30 bg-[var(--primary)]"> 
      <div className="w-full">
        <div className="h-3 bg-[var(--green)]"></div>

        <div className="flex items-center justify-between px-6 py-6">
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
          <span className="text-[var(--white)]">
            &copy; {new Date().getFullYear()} Course Compass
          </span>
        </div>
      </div>
    </footer>
  );
}