// pages/index.tsx
import { BiArrowToRight } from "react-icons/bi";

const Search = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/search.png')" }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex items-center justify-end h-full px-8">
        <div className="text-white max-w-xl mt-60">
          {/* Heading */}
          <h1 className="text-4xl font-bold mb-4 mr-60">Want 10% off?</h1>
          <p className="text-2xl font-bold mt-16">
            Plus be the first <br /> to hear about exclusive <br /> drops and
            offers.
          </p>

          {/* Search Input */}
          <div className="flex -ml-24 mt-8 w-[82%] max-w-xl relative">
            {/* Label button */}
            <button className="w-20 bg-[#1E6CE1] p-2 rounded-l-md flex justify-center items-center text-white">
              Email
            </button>

            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 pl-4 pr-12 rounded-r-md text-black"
            />

            {/* Submit Icon */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600">
              <BiArrowToRight className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
