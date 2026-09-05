import React from 'react';

// Sub-component for individual cards to keep code clean
const ProfileCard = ({ name, role, image, linkedin }: { name: string; role: string; image: string, linkedin: string }) => (
  <div className="bg-white shadow-md overflow-hidden flex flex-col w-full
  rounded-xl
  ">
    {/* Image Container - Square Aspect Ratio */}
    <div className="aspect-square w-full">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
    {/* Text Content */}
    <div className="p-5">
      <h3 className="text-xl font-bold text-gray-800 leading-tight">{name}</h3>
      <div className='flex items-center justify-between'>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{role}</p>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="inline-flex transition-opacity hover:opacity-80"
        >
          <svg
            width="20"
            height="20"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 382 382"
            xmlSpace="preserve"
            aria-hidden="true"
          >
            <path
              style={{ fill: "var(--green)" }}
              d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
      C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z
      M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403
      c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z
      M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
      s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z
      M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168
      c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
      c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593
      c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655
      c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
      L341.91,330.654L341.91,330.654z"
            />
          </svg>
        </a>
      </div>

    </div>

  </div>
);

export default function MeetTheTeam() {
  const team = [
    { linkedin: "https://www.linkedin.com/in/ckhim/", name: "Christopher Khim", role: "Training Lead", image: "/profiles/70e379efb92aed8e920ce162cc68a7d7.png" },
    { linkedin: "https://www.linkedin.com/in/arya-prakash-697188380/", name: "Arya Prakash", role: "Training Lead, Furry", image: "/profiles/01ebadb6f8c6cbc29d7601da6a2ac4cd.png" },
    { linkedin: "https://www.linkedin.com/in/oliver-shek-b326b628b/", name: "Oliver Shek", role: "Trainee", image: "/profiles/1dd11c2b0509c075425569d2a5b63ea2.jpg" },
    { linkedin: "https://www.linkedin.com/in/elizabeth-gonesco-0a97712a9/", name: "Elizabeth Gonesco", role: "Trainee", image: "/profiles/c03b620b8a48bcd374af5103e9356f67.jpg" },
    { linkedin: "https://www.linkedin.com/in/jeff-chen-2149b3259/", name: "Jeff Chen", role: "Trainee", image: "/profiles/f6d802b8e8ac83507304cb8520107bf8.png" },
  ];

  // Split the array into two parts
  const topRow = team.slice(0, 2);
  const bottomRow = team.slice(2, 5);

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#3c486b]">Meet the Team</h2>

        {/* Main Wrapper to stack the rows vertically */}
        <div className="flex flex-col gap-6 md:gap-8">

          {/* TOP ROW: 2 People */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {topRow.map((member, index) => (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)]"
              >
                <ProfileCard {...member} />
              </div>
            ))}
          </div>

          {/* BOTTOM ROW: 3 People */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {bottomRow.map((member, index) => (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)]"
              >
                <ProfileCard {...member} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}