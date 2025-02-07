import React from "react";

const AnyQuestion = () => {
  return (
    <div className="h-60 bg-white"> 
      <div className="bg-[#53575D] text-center py-4">
        
        <h2 className="text-2xl font-bold text-white">Any Question?</h2>
        
        <p className="text-sm font-bold text-[#FFFFFF] mt-4 mb-12">
          Do you have any questions or thoughts about this?
        </p>

        
        <div className="flex justify-center items-center -mb-10 relative">
          <input
            type="text"
            placeholder="Enter your question"
            className="w-[200px] sm:w-[400px] h-12 px-4 rounded-l-3xl border border-gray-300 focus:outline-none text-gray-700 placeholder-gray-400"
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
