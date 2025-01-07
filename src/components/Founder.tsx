"use client";
import React from "react";

const Founders: React.FC = () => {
  return (
    <div className="bg-white py-10 min-h-screen">
      <div className="max-w-6xl mx-auto ">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-10">Founders</h2>

        {/* Layout Container */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* Left Section */}
          <div className="flex flex-col gap-4  md:w-[240px]">
            {/* Business Box */}
            <div className="flex items-center justify-start">
              <p className="text-[#AFADADAB] text-4xl font-bold uppercase mt-8">
                Business
              </p>
            </div>

            {/* Text Box */}
            <div className="bg-[#53575DA6] w-[200px] p-6 h-[340px] mb-7 flex items-start justify-center">
              <p className="text-[#FFFFFF] text-xl  leading-tight">
                Neobank <br/> Yopaki <br/> Aims To <br/> Make Every Mexican <br />
                A Bitcoiner
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-[800px] md:w-[700px] relative -ml-10">
            <img
              src="/founder2.jpeg" // Replace with actual image path
              alt="Founder"
              className="w-full h-[400px] object-cover"
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
