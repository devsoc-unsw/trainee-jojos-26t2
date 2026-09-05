import React from 'react';

// Sub-component for individual cards to keep code clean
const ProfileCard = ({ name, role, image }: { name: string; role: string; image: string }) => (
  <div className="bg-white shadow-md overflow-hidden flex flex-col w-full">
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
      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{role}</p>
    </div>
  </div>
);

export default function MeetTheTeam() {
  const team = [
    { name: "Christopher Khim", role: "Training Lead", image: "/profiles/70e379efb92aed8e920ce162cc68a7d7.png" },
    { name: "Arya Prakash", role: "Training Lead, Furry", image: "/profiles/01ebadb6f8c6cbc29d7601da6a2ac4cd.png" },
    { name: "Oliver Shek", role: "Trainee", image: "/profiles/1dd11c2b0509c075425569d2a5b63ea2.jpg" },
    { name: "Elizabeth Gonesco", role: "Trainee", image: "/profiles/c03b620b8a48bcd374af5103e9356f67.jpg" },
    { name: "Jeff Chen", role: "Trainee", image: "/profiles/f6d802b8e8ac83507304cb8520107bf8.png" },
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