import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    /* Background set to --background (#FAF9F5) and base text to --text-primary (#100c29) */
    <main className="flex flex-col items-center justify-between min-h-screen px-4 py-8 bg-[#FAF9F5] text-[#100c29]">
      
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-3xl text-center my-8">
        <div className="bg-gray-200 rounded-lg p-10 mb-8 border border-gray-300">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl text-[#100c29]">
            Find the right university courses,<br />
            designed around your goals!
          </h1>
        </div>

        {/* Get started button redirects to /quiz */}
        <Link href="/quiz" className="block w-full bg-[#404e7c] hover:bg-[#251F47] text-[#FFFFFF] font-black py-4 px-6 rounded-2x1 transition duration-150 text-lx mb-4 border-[#1c243a] text-center transform hover:-translate-y-0.5 active:translate-y-0 active:border-b-0">
          🚀 Get Started
        </Link>

        {/* Browse courses dropdown (#44526a) */}
        <div className="w-full border-2 border-[#100c29]/20 rounded-2xl p-4 text-left bg-[#FFFFFF] text-sm font-bold flex justify-between items-center cursor-pointer text-[#44526a] hover:border-[#404e7c] transition-colors">
          <span className="flex items-center gap-2">
            📖 Browse Available Courses
          </span>
          <span className="text-xs">▼</span>
        </div>
      </section>

      <section className="w-full max-w-2xl flex flex-col gap-6 my-12">
        
        {/* Step 1 section */}
        <div className="flex items-center justify-between bg-gray-200 border border-gray-300 p-6 rounded-md">
          <div className="flex items-center gap-6">
            <span className="text-2xl font-black text-[#100c29]">1</span>
            <p className="text-xl font-bold text-[#100c29]">
              Open the{' '}
              <Link href="/quiz" className="underline decoration-[#57d089] decoration-2 hover:text-[#404e7c] transition-colors">
                quiz
              </Link>
              !
            </p>
          </div>
          {/* Removed white circle background and border */}
          <div className="w-16 h-16 flex items-center justify-center relative">
            <Image 
              src="/owls/owl_read.png" 
              alt="Owl step 1" 
              fill
              className="object-contain p-1"
            />
          </div>
        </div>

        {/* Step 2 section */}
        <div className="flex items-center justify-between bg-gray-200 border border-gray-300 p-6 rounded-md">
          <div className="flex items-center gap-6">
            <span className="text-2xl font-black text-[#100c29]">2</span>
            <p className="text-xl font-bold text-[#100c29]">Answer a few questions!</p>
          </div>
          {/* Removed white circle background and border */}
          <div className="w-16 h-16 flex items-center justify-center relative">
            <Image 
              src="/owls/owl_speak.png" 
              alt="Owl step 2" 
              fill
              className="object-contain p-1" 
            />
          </div>
        </div>

        {/* Step 3 section */}
        <div className="flex items-center justify-between bg-gray-200 border border-gray-300 p-6 rounded-md">
          <div className="flex items-center gap-6">
            <span className="text-2xl font-black text-[#100c29]">3</span>
            <p className="text-xl font-bold text-[#100c29]">Find your course!</p>
          </div>
          {/* Removed white circle background and padding (p-0) to make it look larger */}
          <div className="w-16 h-16 flex items-center justify-center relative">
            <Image 
              src="/owls/owl_grad.png" 
              alt="Owl step 3" 
              fill
              className="object-contain p-0"
            />
          </div>
        </div>

      </section>

    </main>
  );
}