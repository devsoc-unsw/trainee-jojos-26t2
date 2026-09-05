'use client'; // Required if using Next.js App Router
import { useState } from 'react';

export default function Vido({ videoId }: { videoId: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-xl shadow-lg bg-black aspect-video relative group cursor-pointer">
      
      {!isPlaying ? (
        /* CUSTOM PLACEHOLDER (Shows instead of the thumbnail) */
        <div 
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 transition-colors hover:bg-slate-800"
        >
          {/* Custom Play Icon */}
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="mt-4 text-white font-medium">Click to watch tutorial</p>
        </div>
      ) : (
        /* ACTUAL VIDEO (Loads only after clicking) */
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}