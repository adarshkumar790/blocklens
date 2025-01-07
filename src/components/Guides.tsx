"use client";
import Image from "next/image";
import React, { useState } from "react";

const guides = [
  {
    title: "How to Use & Store bitcoin Safely",
    image: "/guide1.png",
  },
  {
    title: "The Bitcoin Ponzi Scheme Paradox",
    image: "/guide2.png",
  },
  {
    title: "Bitcoin history: 2009-2024",
    image: "/guide3.png",
  },
  {
    title: "Bitcoin history: 2009-2024",
    image: "/guide4.png",
  },
  {
    title: "Bitcoin history: 2009-2024",
    image: "/guide4.png",
  },
];

const Guides: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const handleNext = () => {
    if (startIndex + itemsPerPage < guides.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const visibleGuides = guides.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white min-h-screen py-10 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Guides</h2>
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full hover:bg-gray-300 disabled:opacity-50"
          >
            <Image src="/leftblock.png" width={20} height={20} alt="left" />
          </button>
          {/* Right Button */}
          <button
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= guides.length}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full hover:bg-gray-300 disabled:opacity-50"
          >
            <Image src="/rightblock.png" width={20} height={20} alt="right" />
          </button>
          {/* Guides */}
          <div className="flex flex-wrap gap-4 justify-center">
            {visibleGuides.map((guide, index) => (
              <div
                key={index}
                className="bg-white w-[220px] overflow-hidden hover:shadow-lg"
              >
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-[220px] h-[240px] object-cover"
                />
                <div className=" pt-4">
                  <h3 className="text-sm   font-medium text-[#53575D]">{guide.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
