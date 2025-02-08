import React from "react";

const articles = [
  {
    title: "Breaking: $TRUMP Token dropped -69% from it's All Time High.",
    description: "BlackRock, the $12 trillion asset manager, is looking to spread the Bitcoin word across Europe.After clinching the American crypto market with more than $56 billion in investment into its IBIT offering, BlackRock is now looking to launch a similar product in Europe, according to a Bloomberg report. BlackRock declined to comment.",
    image: "/latestnews1.jpg",
    tag: "TAGS",
  },
  {
    title: "Crypto tax in india",
    description: " JUST IN: #Indian #crypto holders face up to 70% tax penalty on undisclosed gains under new regulations starting February 2025.",
    image: "/latestnews3.jpg",
    tag: "TAGS",
  },
  {
    title: "Community on #X is exposing #Binance for today long liquidation random dump.",
    description: "Women based in Europe and the U.S. are doing excellent work in the Bitcoin space, as CoinTelegraph pointed out, but so are women from Africa, Latin America, Southeast Asia and The Middle East.",
    image: "/latestnews2.jpg",
    tag: "OPINION",
  },
];

const Articles: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-10 p-4">
      <h1 className="text-2xl font-bold text-center mb-24" aria-label="Latest Articles">
        Latest Articles
      </h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <article
            key={index}
            className="bg-[#F8F8F8] shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            aria-labelledby={`article-title-${index}`}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h2
                id={`article-title-${index}`}
                className="font-bold text-lg text-[#000] mb-2 truncate"
              >
                {article.title}
              </h2>
              <p className="text-sm text-[#53575D] mb-4 line-clamp-3">
                {article.description}
              </p>
              <div className="flex items-center justify-between text-sm text-[#53575D] mt-4">
                {/* <span>by HEKMANG</span> */}
                {/* <time dateTime="2025-01-01">Jan 1, 2025</time> */}
                <button
                  className="text-[#FFFFFF] text-xs font-medium px-2 py-1 bg-[#1E293B] rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label={`Read more about ${article.tag}`}
                >
                  {article.tag}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Articles;
