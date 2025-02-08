import React from "react";

// Centralized article data for easier updates and maintainability.
const articles = [
  {
    title: "FTX",
    description:
      "Bankrupt #crypto exchange #FTX to begin repaying customers on February 18.",
    image: "/blocknews1.jpg",
    tag: "TAGS",
  },
  {
    title: "Strategy",
    description:
      " Michael #Saylor's #MicroStrategy changes its name to 'Strategy'.",
    image: "/blocknews2.jpg",
    tag: "TAGS",
  },
  {
    title: "JUPITER",
    description:
      "#Jupiter #Exchange X/twitter account hacked.",
    image: "/blocknews3.jpg",
    tag: "OPINION",
  },
  {
    title: "SOLANA",
    description:
      "BULLISH: #VanEck predict that #Solana will reach $520 by the end of 2025.",
    image: "/blocknews4.jpg",
    tag: "TAGS",
  },
  {
    title: "BLACKROCK",
    description:
      "#BlackRock, the world’s largest asset manager, just purchased 3,839.25 #ETH 💰worth $10.36 million. ",
    image: "/blocknews6.jpg",
    tag: "TAGS",
  },
  {
    title: "BITCOIN",
    description:
      "JUST IN : #ChatGPT Predicts #Bitcoin💰 Cycle Top Price.",
    image: "/blocknews5.jpg",
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
