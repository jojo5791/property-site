"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState(null);
  const pathname = usePathname();

  // Close modal when route changes
  useEffect(() => {
    setSelectedMember(null);
  }, [pathname]);

  // Team Members
  const teamMembers = [
    {
      name: "LING CHIN HOCK",
      role: "FOUNDER & MANAGING DIRECTOR",
      image: "/images/LCH.jpg",
      bio: "Ling has over 20 years of experience in property development and leads the company with a strong vision for sustainable housing.",
    },
    {
      name: "SAM NG SH",
      role: "FOUNDER & PROJECT DIRECTOR",
      image: "/images/sam.jpg",
      bio: "Sam is passionate about project management and has been instrumental in delivering high-quality developments across Malaysia.",
    },
    {
      name: "DAVID LOW",
      role: "GENERAL MANAGER",
      image: "/images/LGH.jpg",
      bio: `David Low is a results-driven, team-oriented, and passionate leader with a strong track record...`,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* About Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are a leading property development company creating modern and sustainable
          homes across Malaysia.
        </p>
      </div>

      {/* Our Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedMember(member)}
                className="bg-white shadow-md rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover transition duration-300 hover:scale-110"
                />
                <h3 className="text-base font-semibold">{member.name}</h3>
                <p className="text-gray-500 text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="rounded-lg shadow-lg max-w-lg w-full p-6 relative animate-fade-in"
            style={{ backgroundColor: "#FAF3DC" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-center">{selectedMember.name}</h3>
            <p className="text-gray-500 text-xs text-center mb-4">{selectedMember.role}</p>

            <div className="text-gray-700 text-sm space-y-3 max-h-[60vh] overflow-y-auto">
              {selectedMember.bio.split("\n\n").map((para, i) => (
                <p key={i}>{para.trim()}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
