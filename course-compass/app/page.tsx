import Image from 'next/image';
import Link from 'next/link';
import IconBtn from './components/iconChange';
import { StepCarousel } from './components/StepCarousel';

export default function HomePage() {
  return (
    <div className="flex flex-col bg-[#111625]">

      {/* 1. HERO — bento grid with owl */}
      <section className="relative left-1/2 right-1/2 w-screen -mx-[50vw] bg-[var(--secondary)] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">

            {/* Copy */}
            <div className="md:col-span-3 flex flex-col gap-6">
              <span className="text-xs font-black tracking-wide text-[#5be29c] uppercase">
                Course Compass
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
                Find the right university courses,<br className="hidden sm:block" />
                designed around your goals.
              </h1>

              <p className="text-white/70 text-base md:text-lg max-w-md">
                Answer a few questions and we'll give you UNSW courses backed by real student reviews! no more guesswork!
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/quiz"
                  className="bg-[white] hover:bg-[var(--green)] text-[var(--secondary)] text-center font-bold py-3 px-8 rounded-xl transition-colors shadow-lg shadow-[#444fa2]/30"
                >
                  Get Started
                </Link>
                <Link
                  href="/courses"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-xl text-center transition-colors border border-white/10"
                >
                  Browse Courses
                </Link>
              </div>
            </div>

            {/* Bento grid with owl */}
            <div className="flex flex-col items-center"> 
              <IconBtn></IconBtn>
              <div className="rounded-2xl p-4 flex w-[11rem] justify-between items-center justify-around">
                <span className="text-2xl font-black text-[var(--green)]">1000+</span>
                <span className="text-xs font-bold text-[var(--green)]/70">UNSW Courses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DATA SOURCES — hub and spoke */}
      <section className="relative left-1/2 right-1/2 w-screen -mx-[50vw] bg-white py-16 px-6 border-y border-gray-200">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <span className="text-xs font-black tracking-wide text-[#414da1] uppercase">Our Data</span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#111625] mt-1">
            From Sources Students Already Trust
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">

          {/* UNSW source */}
          <a href='https://www.handbook.unsw.edu.au/' className="flex flex-col items-center gap-2 rounded-2xl p-4 duration-500 hover:[box-shadow:0px_0px_18px_var(--green)]">
            <div className="w-16 h-16 relative bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center p-2">
              <img
                src="https://www.inside.unsw.edu.au/sites/default/files/inline-images/crest.jpg"
                alt="UNSW"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-xs font-semibold text-gray-500">Handbook</span>
          </a>
          {/* reviews sources */}
          <a href='https://unilectives.devsoc.app/' className='flex flex-col items-center gap-2 rounded-2xl p-4 duration-500 hover:[box-shadow:0px_0px_18px_var(--green)]'>
            <div className="w-16 h-16 relative bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center p-1.5">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABUCAMAAAA4YqAHAAAAolBMVEX///9gqNhLbpiR1O9bptcxXY7u8fRUo9ZOd6JKa5Vdpdfc6vVirN2M0u6U1/FWjbr1+fzu9fprrdo4YZDF3e+rzuiv3/O44vTS7PiCuN9JntSSwOK+2O3k7/fn9ft1u+J9wuWHy+qDmLRbnMtyi6ve4+qi2vGhyObS5PKercJ+vNvM1N7E5vZckrtutN7d8fpif6NGfayRo7yzv89qrM5biK6O0GqpAAAEhUlEQVRYhbWYi3KjOgyGMTh1MYUSLm0xSZO0aaCHPewmu+f9X+3IGLNAuBhCNNPptDCf5N+yLKFpmvViOC/v2l3se/WPY9j26e0O7GylmwfHMID/w10afjR1XS/ogF9aHUDr5qPhOCL608+l4br57y7fleEbC6pTwD+fEMI035fhvy6lDo+bs7lRtLcXVQfgjyUbDKOdLdRxlkhNCPwZ1Y3mB6nOenE44D0p/ulG8TvgoA6W6hg3qdMJ5/h8gdT8MDvhQh3Due3gZn4fnKfmTqbmTHV+9cOLk3WTOtlqAM75f9WZkZq/huGAf6rwk+EP56cROs8dIb4xWZuMjcGROLi8KkyOfcOwCh6BOjOUSRFRw+9se0a9tGKsxs+nCwPmBp4KHpOZpX6bYDJOj+bBefj5aPjkhjK/DvPhvCfWfLiWHc+fQ/j58K+L6Zum+fiMevkz4e7vR9/URSdjnj+XhGcfvkQLfE9Bmw5/+DabZL1XmKnw7Oj7eh0Nmiyj+delJcfQbk6E/66TudJ9GzkD/rVqBD0gRwVXvzAuZkXWn+koGdixuiq1PVQgA9ubcNMJ9MgeSoOiGaqjy7HlWSlozLxgClo0/0psTOJ0Grrd/DfiRFGEGGOEEIwJS7ZT0aLL7YKTuLwT3G26CePNdLLW20IToL2/Os7p9Prj7efcLrcbThKY2/+Uo68w5/RS+FlPSsUuOIbT5Zv/QQ/niPG35sYwSj/jbo5ddZsmRVkwzT/7PN/t9vsDMJ1rP7ZRyPb2/t7t57sLTlKYOPiaKG8FMKbFb4/7ORwg9I71gB8hW93NV9dkQSzX7Ewj7gccebCefeHH6ViP8VI5uPhXcMwsd9WX/5UbTOGHOyplMwzpxrarKacdOWaxpT2sYGofYLf9UIo8uR5wYr9KYc71F6E08UVxuFLB6fIDjnay1c6qBhETWZoAPqjKqBciy2dIyn/E1Q12KxwhFlR0bmGtw+yEj7fAjeBlzrjBpllPu+BR0KBjr8m6CqW32HXAmaXldVik1Xk4uVpXbyPfhkNFh3cthiUQs1TuFTcaaXk7dk8RjqNww3ckDRNPMCKeDXEk1KAIbzUL4xZeDY5rQWxIY8VceByKvXMTPAOOcC4fiE3l9b6wqMBhkcLprMj/0mXClGckkn9yzbbtSVwVjphYeUzLDYxrgYPxp+5sePnmRoYKSQwnI8ZyT4I81Vps1WzhWe0mXqpZFTygzLMSKkEEGr0mG/c2lVdwL8Q816t84ONwa6JvbSfp7aGuZBE53M7kAaP9k/bNVXGoG74FzvVjQ138TDhgCfGiMB1saabDOZd5cWiNf3dwfXMCnBKCvGSjPIkdleCFvJCgwXbSZ7vMH4NLeVsyrK0wZmNjwoc/yGXoWt51GkYev43HB77LuYtLCcNR3JbX3QZJBAIV94XSh6qscaBxkWbd8nrwqHoX9xashm0JLbk8y67lrWydEFpF0V9TmuZGXEHsxZvhUwH4uMKrwvkeBZZalq3j8qOtOnyKbaNC+PvAoa+JIPp7wTme3A8O+Lw6A/8DJmpb7fZG+EIAAAAASUVORK5CYII="
                alt="Unilectives"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-xs font-semibold text-gray-500">Unilectives</span>
          </a>
          <a href='https://studentvip.com.au/unsw/kensington' className='flex flex-col items-center gap-2 rounded-2xl p-4 duration-500 hover:[box-shadow:0px_0px_18px_var(--green)]'>
            <div className="w-16 h-16 relative rounded-xl overflow-hidden bg-[#e67e22] flex items-center justify-center p-1.5">
              <img
                src="https://cdn.studentvip.com.au/open-graph.png"
                alt="StudentVIP"
                className="w-14 h-14 object-contain"
              />
            </div>
            <span className="text-xs font-semibold text-gray-500">StudentVIP</span>
          </a>

        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Official handbook data combined with real reviews from Unilectives and StudentVIP.
        </p>
      </section>

      {/* 3. Just Follow 3 Three Steps — waypoint path */}
      <section className="relative left-1/2 right-1/2 w-screen -mx-[50vw] bg-[var(--primary)] py-20 px-6">
           <div
    style={{
      height: '2px',
      background: 'linear-gradient(to right, transparent, var(--green), transparent)',
      margin: '2rem 0',
    }}
  />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-wide text-[#5be29c] uppercase">Just Follow Three Simple Steps</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Finding Your next course
            </h2>
          </div>

          <StepCarousel/>
        </div>
                   <div
    style={{
      height: '2px',
      background: 'linear-gradient(to right, transparent, var(--green), transparent)',
      margin: '2rem 0',
    }}
  />
      </section>
      {/* 4. CALL TO ACTION */}
      <section className="relative left-1/2 right-1/2 w-screen -mx-[50vw] bg-[var(--background)] text-[#111625] py-16 px-6 flex flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
          Stop guessing.<br />Start matching.
        </h2>
        <p className="text-sm font-semibold max-w-md mb-6 opacity-90 leading-snug">
          InshaAllah, that High Distinction is waiting for you!
        </p>
                <Link
                  href="/quiz"
                  className="bg-[var(--primary)] hover:bg-[var(--green)] text-[var(--white)] hover:text-[var(--secondary)] text-center font-bold py-3 px-8 rounded-xl transition-colors shadow-lg shadow-[#444fa2]/30"
                >
                  Get Started
                </Link>
      </section>

    </div>
  );
}