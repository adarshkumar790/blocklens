"use client";
import React from "react";

const Founders: React.FC = () => {
  return (
    <div className="bg-white py-10 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-10">Founders</h2>

        {/* Layout Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-4">
          {/* Left Section */}
          <div className="flex flex-col gap-4 md:w-[240px]">
            {/* Business Box */}
            <div className="flex items-center md:justify-start justify-center">
              <p className="text-[#AFADADAB] text-4xl font-bold uppercase mt-8">
                Business
              </p>
            </div>

            {/* Text Box */}
            <div className="bg-[#53575DA6] md:w-[200px] w-[360px] h-[80px]  p-2 md:p-6 md:h-[340px] md:mb-7 mb-0 flex items-start justify-center">
              <p className="text-[#FFFFFF] md:text-xl text-sm leading-tight md:text-center text-start md:text-left">
                Neobank  Yopaki  Aims To <br /> Make Every Mexican <br />
                A Bitcoiner
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[700px] relative">
            <img
              src="/founder2.jpeg" // Replace with actual image path
              alt="Founder"
              className=" w-[600px] md:w-full  h-[200px] md:h-[400px] object-cover rounded-lg"
            />
            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 text-white">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">By Frank Korva</span>
                </div>
                <span>Dec 31, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
