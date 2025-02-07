import { BiArrowToRight } from "react-icons/bi";

const Search = () => {
  return (
    <div
      className="relative h-[40vh] md:h-[96vh] w-full md:w-full md:h-full bg-cover bg-center md:bg-[url('/search.png')] bg-[url('/ads.jpeg')]"
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex items-center justify-end h-full px-8">
        <div className="text-white max-w-xl mt-60 md:mt-40">
          {/* Heading */}
          <h1 className="md:text-4xl text-xl font-bold -mt-20 md:mr-40 ml-40">Want 10% off?</h1>
          <p className="md:text-2xl md:font-bold md:mt-8 mt-1  ml-40 text-sm">
            Plus be the first <br /> to hear about exclusive <br /> drops and
            offers.
          </p>

          {/* Search Input */}
          <div className="flex md:-ml-24 mt-2 ml-32 mb-16 md:mb-8 md:w-[82%] w-[64%]  max-w-xl relative">
            {/* Label button */}
            <button className="w-20 bg-[#1E6CE1] p-2 rounded-l-md flex justify-center items-center text-white">
              Email
            </button>

            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full text-xs p-3 md:pl-4 md:pr-12 pl-3 pr-4  rounded-r-md text-black"
            />

            {/* Submit Icon */}
            <div className="absolute md:right-4 right-1 top-1/2 transform -translate-y-1/2 text-gray-600">
              <BiArrowToRight className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
