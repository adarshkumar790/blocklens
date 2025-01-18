import React from "react";

// Centralized article data for easier updates and maintainability.
const articles = [
  {
    title: "BITCOIN IS FIAT",
    description:
      "Bitcoin is not a digital commodity, it is a decentralized digital fiat currency.",
    image: "/block1.png",
    tag: "TAGS",
  },
  {
    title: "BITCOIN IS FIAT",
    description:
      "Bitcoin is not a digital commodity, it is a decentralized digital fiat currency.",
    image: "/block2.png",
    tag: "TAGS",
  },
  {
    title: "BITCOIN IS FIAT",
    description:
      "Bitcoin is not a digital commodity, it is a decentralized digital fiat currency.",
    image: "/block3.png",
    tag: "OPINION",
  },
  {
    title: "BITCOIN IS FIAT",
    description:
      "Bitcoin is not a digital commodity, it is a decentralized digital fiat currency.",
    image: "/block4.png",
    tag: "TAGS",
  },
  {
    title: "BITCOIN IS FIAT",
    description:
      "Bitcoin is not a digital commodity, it is a decentralized digital fiat currency.",
    image: "/block5.png",
    tag: "TAGS",
  },
  {
    title: "BITCOIN IS FIAT",
    description:
      "Bitcoin is not a digital commodity, it is a decentralized digital fiat currency.",
    image: "/block6.png",
    tag: "OPINION",
  },
];

const Container: React.FC = () => {
  return (
    <div className="bg-white min-h-screen p-4 py-10">
      {/* Optimized grid container for responsive design */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index} // Using index as key since data is static and order is fixed.
            className="bg-[#F8F8F8] shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Optimized image rendering with object-cover for consistent layout */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-xl leading-6">{article.title}</h2>
              <p className="text-sm text-[#53575D] mt-2">{article.description}</p>
              <div className="flex items-center justify-between text-xs text-[#53575D] mt-4">
                <span>by HEKMANG</span>
                <span>Jan 1, 2025</span>
              </div>
              <div className="flex justify-start items-center mt-4 mb-1">
                <button
                  className="text-[#FFFFFF] text-xs font-medium px-2 py-2 bg-[#1E293B] rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {article.tag}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
