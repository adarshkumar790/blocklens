"use client";
import { useState } from 'react';
import Image from 'next/image';

const allArticles = [
  {
    title: "Onchain real-world assets gain traction amid Bitcoin market uncertainty",
    description:
      "Onchain RWAs are gaining traction as Bitcoin’s price struggles, with market commentators predicting TVL could hit $50 billion in 2025 as demand grows.",
    date: '27 minutes ago',
    author: 'Zoltan Vardai',
    imageSrc: '/articlenews1.avif',
  },
  {
    title: "Here’s what happened in crypto today",
    description:
      "Need to know what happened in crypto today? Here is the latest news on daily trends and events impacting Bitcoin price, blockchain, DeFi, NFTs, Web3 and crypto regulation.",
    date: '11 hours ago',
    author: 'Cointelegraph',
    imageSrc: '/articlenews2.avif',
  },
  {
    title: "Tornado Cash developer Alexey Pertsev leaves prison custody",
    description:
      "The crypto community and privacy advocates worldwide have been closely following Alexey Pertsev’s legal battle and the Tornado Cash case.",
    date: '11 hours ago',
    author: 'Vince Quill',
    imageSrc: '/articlenews3.avif',
  },
  {
    title: "New agent launches on Virtuals plummet amid AI token drawdown",
    description:
      "Originally launched on Base, the AI engine hosts popular agents but has experienced a sharp decline in new debuts.",
    date: '11 hours ago',
    author: 'Alex O’Donnell',
    imageSrc: '/articlenews4.avif',
  },
];

export default function ArticleContainer() {
  const [visibleArticles, setVisibleArticles] = useState(3); // Initially display 3 articles

  const handleSeeMore = () => {
    setVisibleArticles((prev) => Math.min(prev + 3, allArticles.length));
  };

  return (
    <div className="bg-white p-4 sm:p-6 flex flex-col items-center">
      <div className="grid gap-6 w-full max-w-5xl sm:grid-cols-2 lg:grid-cols-1">
        {allArticles.slice(0, visibleArticles).map((article, index) => (
          <article
            key={index}
            className="bg-white rounded-lg p-2 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col sm:flex-row"
            aria-labelledby={`article-title-${index}`}
          >
            <div className="relative h-48 w-full sm:w-48 flex-shrink-0">
              <Image
                src={article.imageSrc}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex flex-col justify-between">
              <div>
                <div className="relative flex justify-center items-center w-[60px] h-[30px] bg-[#00000040] rounded-sm">
                  <span className="text-[#FFFFFF] font-bold w-[58px] pl-2 bg-[#8CC63F]">
                    Takes
                  </span>
                </div>
                <h2
                  id={`article-title-${index}`}
                  className="font-sans text-lg sm:text-xl text-[#000000] font-semibold leading-snug text-left"
                >
                  {article.title}
                </h2>
                <p className="font-serif text-sm sm:text-base text-[#53575D] font-normal leading-relaxed text-left">
                  {article.description}
                </p>
              </div>
              <div className="mt-4 flex justify-between text-[#53575D] text-xs sm:text-sm">
                <span>BY {article.author}</span>
                <time dateTime="2025-01-01">{article.date}</time>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button
        onClick={handleSeeMore}
        disabled={visibleArticles >= allArticles.length}
        className={`mt-6 px-4 py-2 sm:px-6 sm:py-2 ${
          visibleArticles >= allArticles.length
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-[#8F9295] hover:bg-[#72a52c]'
        } text-white font-semibold text-sm flex items-center gap-2 transition-colors`}
        aria-label="Load more articles"
      >
        See More
        <Image src="/see.png" alt="see more" width={16} height={16} />
      </button>
    </div>
  );
}
