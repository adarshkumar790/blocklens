"use client";
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-white min-h-screen">
      {/* Main Container */}
      <div className="flex gap-6 w-full mt-4">

        {/* Left Box */}
        <div className="flex flex-col items-center">
          <div className="bg-[#D9D9D991] shadow-md rounded-r-xl overflow-hidden h-[420px] w-[200px]">
            {/* Content or placeholder */}
          </div>
        </div>

        {/* Middle Content */}
        <div className="flex flex-col items-center flex-grow">
          <div className="bg-white shadow-md rounded-xl -ml-20 mt-12 overflow-hidden h-80 w-[800px]">
            <img
              src="/banner1.png" // Replace with actual image
              alt="Bitcoin Analysis"
              className="w-full h-80 object-cover"
            />
          </div>
          {/* Rectangle Box Below Middle Image */}
          <div className="bg-[#D9D9D991] shadow-md  overflow-hidden h-[40px] w-full mt-3 -mr-12">
            {/* Content or placeholder */}
          </div>
          <div className="w-full h-[30px] mt-4 -ml-36 text-2xl bg- text-[#000000] font-bold gap-0">
          WATCH: Michael Saylor’s Bitcoin $100K Party
          </div>
          <div className="relative inline-block">
      {/* Shadow Effect */}
      <div className="absolute -bottom-1 -right-1 w-full h-[40px] bg-black rounded-sm -ml-20"></div>
      {/* Main Button */}
      <div className="relative flex justify-center items-center w-[120px] h-[40px] bg-orange-500 rounded-sm">
        <span className="text-white font-bold">NEWS</span>
      </div>
    </div>
        </div>

        {/* Middle-Right Box */}
        <div className="bg-white shadow-md mt-12 rounded-xl overflow-hidden h-[420px] w-1/10 z-10">
          <img
            src="/banner2.png" // Replace with actual image
            alt="Middle Right Banner"
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* Right Box */}
        <div className="bg-[#D9D9D991] shadow-md rounded-l-3xl overflow-hidden h-[520px] w-1/6 -ml-20">
          {/* Content or placeholder */}
        </div>

      </div>
      
    </div>
    
  );
};

export default Banner;
