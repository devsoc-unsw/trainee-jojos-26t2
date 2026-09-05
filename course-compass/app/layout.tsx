import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/footer";
import { NavBar } from "./components/navBar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Course Compass",
  description: "Course Compass website to find course with a quiz",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${robotoCondensed.variable} h-full antialiased`}
    >      
      <body className="min-h-full flex flex-col">
      <NavBar/>
      <div className="flex justify-center overflow-hidden min-h-[88vh]">
        <div className="max-w-[65rem] w-full">
          {children}
        </div>
      </div>
      <Footer/>
      </body>
    </html>
  );
}
