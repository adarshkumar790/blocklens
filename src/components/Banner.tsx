"use client";
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-white min-h-screen p-2 md:p-0">
      {/* Main Container */}
      <div className="flex gap-6 w-full mt-4">

        {/* Left Box (Hidden on Mobile) */}
        <div className="hidden md:flex flex-col items-center">
          <div className="bg-[#D9D9D991] shadow-md rounded-r-xl overflow-hidden h-[420px] w-[200px]">
            {/* Content or placeholder */}
          </div>
        </div>

        {/* Middle Content */}
        <div className="flex flex-col items-center flex-grow w-full md:w-[800px]">
          <div className="bg-white shadow-md rounded-xl mt-12 overflow-hidden h-80 md:w-[840px] md:-ml-20 md:h-[320px]">
            <img
              src="/banner1.png" // Replace with actual image
              alt="Bitcoin Analysis"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Rectangle Box Below Middle Image */}
          <div className="bg-[#D9D9D991] shadow-md overflow-hidden h-[40px] w-full mt-3 -mr-12">
            {/* Content or placeholder */}
          </div>
          <div className="w-full h-[30px] mt-4 md:text-2xl text-xs text-[#000000] font-bold md:text-center text-right">
            WATCH: Michael Saylor’s Bitcoin $100K Party
          </div>
          <div className="relative inline-block">
            {/* Shadow Effect */}
            <div className="absolute md:-bottom-1 -bottom-8 -right-1 w-full h-[40px] bg-black rounded-sm -ml-20"></div>
            {/* Main Button */}
            <div className="relative flex justify-center md:-bottom-0 -bottom-7 items-center w-[120px] h-[40px] bg-orange-500 rounded-sm">
              <span className="text-white font-bold">NEWS</span>
            </div>
          </div>
        </div>

        {/* Right Box (Hidden on Mobile) */}
        <div className="hidden md:block bg-white shadow-md md:mt-12 mt-16 rounded-xl overflow-hidden h-[420px] w-1/10 z-10">
          <img
            src="/banner2.png" // Replace with actual image
            alt="Middle Right Banner"
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* Right Side Box (Hidden on Mobile) */}
        <div className="hidden md:flex bg-[#D9D9D991] shadow-md rounded-l-3xl overflow-hidden h-[520px] w-1/6 -ml-20">
          {/* Content or placeholder */}
        </div>

      </div>

      {/* Mobile View (Responsive Design) */}
      <div className="block md:hidden w-full mt-20 ml-1">
        <div className="bg-white shadow-md rounded-xl overflow-hidden w-full h-[300px]">
          <img
            src="/banner2.png" // Replace with actual image
            alt="Bitcoin Analysis"
            className="w-full h-[300px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

