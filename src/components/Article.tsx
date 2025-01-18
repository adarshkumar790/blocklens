import React from "react";

const articles = [
  {
    title: "$1 Million In Seed Capital Awarded To DeFi Hedge Fund Boreal, Bitcoin Alpha Competition Winner",
    description: "Samara Asset Management and Bitcoin Magazine Pro selected Boreal as the winner of the second-ever Bitcoin Alpha competition",
    image: "/article.png",
    tag: "TAGS",
  },
  {
    title: "Owning 1 Bitcoin Is Better Than Being a Millionaire",
    description: "Think being a millionaire is exclusive? Let me explain why owning just 1 bitcoin might be the real wealth symbol of the future.",
    image: "/block2.png",
    tag: "TAGS",
  },
  {
    title: "The Women In Bitcoin That CoinTelegraph Forgot",
    description: "Women based in Europe and the U.S. are doing excellent work in the Bitcoin space, as CoinTelegraph pointed out, but so are women from Africa, Latin America, Southeast Asia and The Middle East.",
    image: "/block3.png",
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
                <span>by HEKMANG</span>
                <time dateTime="2025-01-01">Jan 1, 2025</time>
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
