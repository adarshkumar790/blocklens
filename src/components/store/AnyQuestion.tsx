import React from "react";

const AnyQuestion = () => {
  return (
    <div className="h-60 bg-white"> {/* Adjusted height */}
      <div className="bg-[#53575D] text-center py-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-white">Any Question?</h2>
        {/* Subtitle */}
        <p className="text-sm font-bold text-[#FFFFFF] mt-4 mb-12">
          Do you have any questions or thoughts about this?
        </p>

        {/* Input and Button */}
        <div className="flex justify-center items-center -mb-10 relative">
          <input
            type="text"
            placeholder="Enter your question"
            className="w-[300px] sm:w-[400px] h-12 px-4 rounded-l-3xl border border-gray-300 focus:outline-none text-gray-700 placeholder-gray-400"
          />
          <button className="bg-[#F8BD48] text-white font-semibold px-6 h-12 rounded-r-3xl">
            Email Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnyQuestion;
