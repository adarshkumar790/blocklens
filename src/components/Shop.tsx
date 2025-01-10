"use client";
import React from "react";

const Shops: React.FC = () => {
  return (
    <div className="bg-white py-10 min-h-screen flex flex-col items-center mt-16">
      {/* Layout Wrapper */}
      <div className="relative flex flex-col md:flex-row justify-between items-center w-full max-w-5xl px-4">
        {/* Left Box (Hidden on Mobile) */}
        <div className="hidden md:flex absolute ml-14 w-1/6 h-[300px] bg-[#EAEAEA] shadow-md"></div>

        {/* Advertisement Box */}
        <div className="bg-[#53575CC2] p-6 w-full flex flex-col items-center justify-center shadow-lg md:w-2/3 relative z-10 md:ml-44">
          {/* Text Content */}
          <div className="flex flex-col items-center mb-4">
            <p className="text-[#FFFFFF] text-base leading-relaxed text-center md:text-left md:max-w-3xl mx-4">
              Find Bitcoiner Gear, Merch And More At The Bitcoin Magazine Store.
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center items-end w-full">
            <button className="bg-white text-black text-sm border border-black font-bold px-4 py-2 flex items-center gap-2 hover:bg-gray-100 md:mr-8">
              SHOPS <span className="text-sm">&#8250;</span>
            </button>
          </div>
        </div>

        {/* Right Box (Hidden on Mobile) */}
        <div className="hidden md:flex absolute right-0 mr-12 w-1/6 h-[300px] bg-[#EAEAEA] shadow-md"></div>
      </div>
    </div>
  );
};

export default Shops;
