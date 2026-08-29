import Image from "next/image";
import icon from "@/public/owls/owl_icon.svg";
import Link from "next/link";
import NavBtn from "./Buttons/nav";
export function NavBar() {
  return (
    <div className="text-[var(--white)] flex w-full h-30 bg-[var(--secondary)] items-center gap-3">
      <div className="w-full flex justify-between">
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
        <div>
          <nav>
            <NavBtn>
              <Link href="/">Home</Link>
            </NavBtn>
            <NavBtn>
              <Link href="/quiz">Quiz</Link>
            </NavBtn>
            <NavBtn>
              <Link href="/courses">Browse Courses</Link>
            </NavBtn>
            <NavBtn>
              <Link href="/about">About Us</Link>
            </NavBtn>
          </nav>
        </div>
      </div>
    </div>
  );
}
