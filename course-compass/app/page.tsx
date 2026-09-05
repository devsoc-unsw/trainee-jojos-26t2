import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#111625] text-white flex flex-col font-sans">

      {/* 1. HERO SECTION */}
      <section className="w-full bg-gradient-to-r from-[#404e7c] via-[#57d089] to-[#404e7c] flex flex-col items-center pt-12 pb-16 px-4">
        
        {/* Top owl logo */}
        <div className="w-24 h-24 relative mb-6">
          <Image 
            src="/owls/owl_grad.png" 
            alt="Course Compass Mascot"
            fill
            className="object-contain"
          />
        </div>

        {/* Outer Gradient Frame */}
        <div className="w-full max-w-xl bg-white text-center py-8 px-6 rounded-xl border-2 border-[#1e2a3a] shadow-[0_0_15px_rgba(91,226,156,0.15)] mb-5">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-[#111625] tracking-tight leading-snug">
            Find the right university courses,<br />
            designed around your goals!
          </h1>
        </div>

        {/* Get Started Button */}
        <Link href="/quiz" className="w-full max-w-xl bg-[#444fa2] hover:bg-[#374087] text-white text-center font-bold py-3 px-6 rounded-md transition-colors shadow-md text-sm sm:text-base mb-4">
          Get Started
        </Link>

        {/* Browse Courses */}
        <Link href="/courses" className="w-full max-w-xl bg-white text-[#111625] hover:bg-gray-100 font-bold py-2 px-6 rounded-md text-center transition-colors text-xs shadow-sm tracking-wide">
          Browse Courses +
        </Link>
      </section>

      {/* 2. SOCIAL PROOF SECTION */}
      <section className="w-full bg-white text-gray-900 py-12 px-6 flex flex-col items-center justify-center border-y border-gray-200">
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left flex-1 w-full md:w-auto">
            {/* UNSW Logo */}
            <div className="w-24 h-16 relative mb-1">
              <img 
                src="data:image/jpeg;base64,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"
                alt="UNSW" 
                className="w-full h-full object-contain" 
              />
            </div>
            <p className="text-xl sm:text-2xl font-black max-w-md text-[#111625] leading-snug tracking-tight">
              Built from 690+ UNSW courses and real student reviews
            </p>
          </div>
            
            {/* Unilectives logo */}
            <div className="flex items-center gap-6 shrink-0 justify-center w-full md:w-auto">
            <div className="w-16 h-12 relative opacity-90">
              <img 
                src="data:image/png;base64,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"
                alt="Unilectives"
                className="w-full h-full object-contain" 
              />
            </div>
            
            {/* StudentVIP logo */}
            <div className="w-24 h-24 relative shadow-sm rounded-xl overflow-hidden bg-[#ff7900] flex items-center justify-center p-2">
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAdVBMVEXmfiL////ldwDtpHP9+PXmfBr++/nurYLpkU3kcAD//vvkcwDoiUDzxqv65dfjbADxvJzzxab32cfuqHjojkf10LnleQ/ojE354dDvsor88uv21L/77eTngi7nhTjqlljrnGHsn2rqmGPjZADwtpLlezfmfDE61SwUAAAEmUlEQVR4nO2Z63aqOhRGk0hATLgKKSCgtuy+/yOelaCC1rNL6xinp45vjv5QciEzWV0JyBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEcRvwO5xEUGq19BZxbIqMz3fgNtt2Rtkor/BvxALAm0pPnpgS5hoYzsvJ8e6QIWyjBz+AU2S2Uoo/3/bZbLsMz/6cF+xmIZJvvdTw/2M5bLMFPEPz3aT/iCDBP7ewna2/zng/43viLDxOo2CbQrTWxpTy3XF3TJg6I4trbCK33Y8Ejb6/ugHNuX/blqUfJqvR4DOF4X1HKsOrLL9Fq7Mr/U677kdVG8xrw6Frb0UN9GypdkWDhct86NkYRRh7Z0nxxJxA/qFJS9MS8bnoaumjFdaS9mybmqyKgPadyeXEkTRjxVl35UGSdSbG1ZcxRGVHwrTB/zvBjvalTtPSDD3sp547g3jDqlv1cvoqHakxHdw8oYOcpoKa2MsgVSMvk2UE7MQlfPkvKcWhlhe6PJivgQXvpRJTmw0PbTJkzR3rA1UtPKFNIWU3dJ6j8gw97mS7tLmBjaOO11xau6rld0at3XdZDfkTFBvdKU4JPcyXRBlFkqJ8PE4SyzC+r6aCiiqZ+KlyFd87mfhkxQvF1kzKHMtjSRXfuIjBRT8w3dSkQNTc4pacc046n79FEmpGp+LZl4bUhG6vwSqu6kG2YkI+3A7aWQJeOkxVqatce9nobfzmSEjfdMnat9U4aZ9ZTS6KbMHNM8Pi129TeZMfQNU61bmSHfEfkoYyOtcivjeiovMl6tbJzFCTO240mmvqr2XRlmppTWrJRkRoXFEC+T8e1kOhkpQiLRTkYeqJui7OQHGb7rpBp4oMalnGSCps3pJuyhMLuS4e2glTLkM+bhT2X4TEYRJxlVBpQhdPdxZexaSrYRTGz9uYzUx2NhWHidzh4KM2oe74Y9DcQFwUzmKGYyfAqzrTiHWV1GROlkwl1DI5N3woyakivFGov4XIZJpWg6VlcL81ACoP9PWnuvIQcXwzMZe/vMXumk2Y8ydg4jCqf9xwQQ7ngb2t7vyNiR02Tt2ysZyfq+2JY3J5KHUnO7ZnbzJwd1I5MndDBN49LO4eBkRBqle5uady4192mVW9qTjE3zd2VIwM5hwK9kRO01zYdnkkc2zWav3N5ld87oWobTf9K4r0nV8GnTZIl9LJptmsNZZjMk92Wijjrp8huZ4Fbk6zLXxxm/lKczzKnvKpHmVKNRY5EJ7buQ8ThD34TbsmfHmdoeZ+xqcY9S41kmkZOMvzcuVJ3M+TijHpf5cND00pe+6/qXaPwa/9E6Oy/btrdFBxfr0bs9j+r1MP7DRX/0GVoZrd/dvLd7/V66I/juXb9P4Tz0vT7dIOh7e9B81f3NIfHrMncfAZo4np0JiKnrNo69WcHsUWEz4b5Ml28+uC9N08za3RZ/T+aZHs6e6bH5qV5oPNOrpmd6CfhUr2ef6cX5M/2k8VQ/Nj3Vz4BP9QMtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC/8g8Z/2vWhTbHtgAAAABJRU5ErkJggg==" 
                alt="StudentVIP" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. PROCESS STEPS SECTION */}
      <section className="w-full max-w-2xl mx-auto my-12 px-4">
        <div className="bg-[#1b1a37] border-2 border-[#5be29c] p-9 rounded-2xl flex flex-col gap-4 shadow-xl">
          
          {/* Step 1 */}
          <div className="w-full bg-gradient-to-r from-[#6fe19e] via-[#52b3a4] to-[#3679a8] rounded-xl p-5 flex items-center justify-between text-[#111625] font-sans border border-black/10">
            <span className="text-lg sm:text-xl font-black tracking-tight">
              1. &nbsp;Open the{' '}
              <Link href="/quiz" className="underline hover:text-neutral-800 transition-colors">
                quiz
              </Link>
              !
            </span>
            <div className="w-16 h-16 relative shrink-0">
              <Image src="/owls/owl_read.png" alt="Step 1 Owl" fill className="object-contain" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="w-full bg-gradient-to-r from-[#6fe19e] via-[#52b3a4] to-[#3679a8] rounded-xl p-5 flex items-center justify-between text-[#111625] font-sans border border-black/10">
            <span className="text-lg sm:text-xl font-black tracking-tight">
              2. &nbsp;Answer questions
            </span>
            <div className="w-17 h-17 relative shrink-0">
              <Image src="/owls/owl_speak.png" alt="Step 2 Owl" fill className="object-contain" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="w-full bg-gradient-to-r from-[#6fe19e] via-[#52b3a4] to-[#3679a8] rounded-xl p-5 flex items-center justify-between text-[#111625] font-sans border border-black/10">
            <span className="text-lg sm:text-xl font-black tracking-tight">
              3. &nbsp;Find your course!
            </span>
            <div className="w-18 h-18 relative shrink-0">
              <Image src="/owls/owl_grad.png" alt="Step 3 Owl" fill className="object-contain" />
            </div>
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="w-full bg-gradient-to-r from-[#536AB8] via-[#56E390] to-[#3679a8] text-[#111625] py-12 px-4 flex flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
          Stop guessing.<br />Start matching.
        </h2>
        <p className="text-sm font-semibold max-w-md mb-6 opacity-90 leading-snug">
          Course Compass will always point the direction to graduation. A high distinction is awaiting you.
        </p>
        <Link href="/quiz" className="bg-[#414da1] hover:bg-[#343e85] text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-md text-sm sm:text-base">
          Get Started
        </Link>
      </section>

    </div>
  );
}
