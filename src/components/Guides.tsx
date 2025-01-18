"use client";
import Image from "next/image";
import React, { useState } from "react";

const guides = [
  {
    title: "How to Use & Store Bitcoin Safely",
    image: "/guide1.png",
  },
  {
    title: "The Bitcoin Ponzi Scheme Paradox",
    image: "/guide2.png",
  },
  {
    title: "Bitcoin History: 2009-2024",
    image: "/guide3.png",
  },
  {
    title: "Bitcoin History: 2009-2024",
    image: "/guide4.png",
  },
  {
    title: "Bitcoin History: 2009-2024",
    image: "/guide4.png",
  },
];

const Guides: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - itemsPerPage); // Optimized by using functional state updates
    }
  };

  const handleNext = () => {
    if (startIndex + itemsPerPage < guides.length) {
      setStartIndex((prevIndex) => prevIndex + itemsPerPage); // Optimized by using functional state updates
    }
  };

  const visibleGuides = guides.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Guides</h2>

        {/* Guides Section */}
        <div className="flex flex-wrap gap-6 justify-center">
          {visibleGuides.map((guide, index) => (
            <div
              key={index} // Index is fine here since the list is static
              className="bg-white w-[220px] overflow-hidden hover:shadow-lg"
            >
              <Image
                src={guide.image}
                alt={guide.title}
                width={220}
                height={240}
                className="object-cover" // Optimized by switching to Next.js Image component
              />
              <div className="pt-4 px-2">
                <h3 className="text-sm font-medium text-[#53575D]">{guide.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons Section */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 disabled:opacity-50"
          >
            <Image src="/leftblock.png" width={20} height={20} alt="left" />
          </button>

          <button
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= guides.length}
            className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 disabled:opacity-50"
          >
            <Image src="/rightblock.png" width={20} height={20} alt="right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guides;
