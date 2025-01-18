"use client";
import React from "react";

const Advertise: React.FC = () => {
  return (
    <div className="bg-white py-10 min-h-screen flex flex-col items-center p-2">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-20" aria-label="Advertise with us">
        Advertise with us
      </h1>

      {/* Layout Wrapper */}
      <div
        className="relative flex flex-col md:flex-row justify-between items-center w-full max-w-5xl"
        role="region"
        aria-labelledby="advertise-title"
      >
        {/* Left Box (Hidden on Mobile) */}
        <div
          className="hidden md:flex absolute left-4 w-1/6 h-[300px] bg-[#EAEAEA] shadow-md"
          aria-hidden="true"
        ></div>

        {/* Advertisement Box (Center Content) */}
        <div
          className="bg-[#53575CC2] md:p-6 p-2 w-full md:ml-44 flex flex-col items-center justify-center shadow-lg md:w-2/3 relative z-10"
          aria-label="Advertisement Details"
        >
          {/* Text Content */}
          <div className="flex flex-col items-center mb-4">
            <p
              className="text-[#FFFFFF] text-base leading-relaxed text-left md:text-left md:max-w-3xl ml-0 md:ml-8 mr-0 md:mr-8"
              aria-label="Advertisement Description"
            >
              Amplify your brand with the world’s first and most trusted Bitcoin media company. Every year, millions of people with diverse interests depend on Bitcoin Magazine for the most reliable, accurate, timely, and relevant content. We are trusted by the Bitcoin community to inform and enlighten with quality stories that meet our stringent editorial and journalistic standards.
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-end items-end w-full">
            <button
              className="bg-white text-black text-m border border-black font-bold mr-8 px-4 py-2 flex items-center gap-1 hover:bg-gray-100"
              aria-label="Get in Touch"
            >
              GET IN TOUCH <span className="text-m" aria-hidden="true">&#8250;</span>
            </button>
          </div>
        </div>

        {/* Right Box (Hidden on Mobile) */}
        <div
          className="hidden md:flex absolute right-4 w-1/6 h-[300px] bg-[#EAEAEA] shadow-md"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
};

export default Advertise;
