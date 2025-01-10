"use client";
import React from "react";

const Advertise: React.FC = () => {
  return (
    <div className="bg-white py-10 min-h-screen flex flex-col items-center p-2">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-20">Advertise with us</h2>

      {/* Layout Wrapper */}
      <div className="relative flex flex-col md:flex-row justify-between items-center w-full max-w-5xl">
        {/* Left Box (Hidden on Mobile) */}
        <div className="hidden md:flex absolute left-4 w-1/6 h-[300px] bg-[#EAEAEA] shadow-md"></div>

        {/* Advertisement Box (Center Content) */}
        <div className="bg-[#53575CC2] md:p-6 p-2 w-full  md:ml-44 flex flex-col items-center justify-center shadow-lg md:w-2/3 relative z-10">
          {/* Text Content */}
          <div className="flex flex-col items-center mb-4">
            <p className="text-[#FFFFFF] text-base leading-relaxed text-left  md:text-left md:max-w-3xl ml-0 md:ml-8 mr-0 md:mr-8">
              Amplify your brand with the world’s first and most trusted Bitcoin media company. Every year, millions of people with diverse interests depend on Bitcoin Magazine for the most reliable, accurate, timely, and relevant content. We are trusted by the Bitcoin community to inform and enlighten with quality stories that meet our stringent editorial and journalistic standards.
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-end items-end w-full">
            <button className="bg-white text-black text-m border border-black font-bold mr-8 px-4 py-2 flex items-center gap-1 hover:bg-gray-100">
              GET IN TOUCH <span className="text-m">&#8250;</span>
            </button>
          </div>
        </div>

        {/* Right Box (Hidden on Mobile) */}
        <div className="hidden md:flex absolute right-4 w-1/6 h-[300px] bg-[#EAEAEA] shadow-md"></div>
      </div>
    </div>
  );
};

export default Advertise;
