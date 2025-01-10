"use client"
// pages/index.tsx
import { useState } from 'react';
import Image from 'next/image';

const allArticles = [
  {
    title: "Michael Saylor's Trump Meeting Is Turbo Bullish for Bitcoin",
    description:
      "Michael Saylor, Executive Chairman of MicroStrategy and a prominent Bitcoin advocate, recently met with members of former President Donald Trump's team at Mar-a-Lago.",
    date: 'Jan 1, 2025',
    author: 'HELMUNG',
    imageSrc: '/article1.png',
  },
  {
    title: "Michael Saylor's Trump Meeting Is Turbo Bullish for Bitcoin",
    description:
      "Michael Saylor, Executive Chairman of MicroStrategy and a prominent Bitcoin advocate, recently met with members of former President Donald Trump's team at Mar-a-Lago.",
    date: 'Jan 1, 2025',
    author: 'HELMUNG',
    imageSrc: '/article2.png',
  },
  {
    title: "Michael Saylor's Trump Meeting Is Turbo Bullish for Bitcoin",
    description:
      "Michael Saylor, Executive Chairman of MicroStrategy and a prominent Bitcoin advocate, recently met with members of former President Donald Trump's team at Mar-a-Lago.",
    date: 'Jan 1, 2025',
    author: 'HELMUNG',
    imageSrc: '/article2.png',
  },
  {
    title: "Michael Saylor's Trump Meeting Is Turbo Bullish for Bitcoin",
    description:
      "Michael Saylor, Executive Chairman of MicroStrategy and a prominent Bitcoin advocate, recently met with members of former President Donald Trump's team at Mar-a-Lago.",
    date: 'Jan 1, 2025',
    author: 'HELMUNG',
    imageSrc: '/article2.png',
  },
  // Add more articles here...
];

export default function ArticleContainer() {
  const [visibleArticles, setVisibleArticles] = useState(3); // Initially display 2 articles

  const handleSeeMore = () => {
    // Increase the number of visible articles
    setVisibleArticles((prev) => Math.min(prev + 3, allArticles.length));
  };

  return (
    <div className="bg-white p-4 sm:p-6 flex flex-col items-center">
      <div className="grid gap-6 w-full max-w-5xl sm:grid-cols-2 lg:grid-cols-1">
        {allArticles.slice(0, visibleArticles).map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-2 shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col sm:flex-row"
          >
            {/* Left Side: Image */}
            <div className="relative h-48 w-full sm:w-48 flex-shrink-0">
              <Image
                src={article.imageSrc}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Right Side: Text */}
            <div className="p-4 flex flex-col justify-between">
              <div>
                <div className="relative flex justify-center items-center w-[60px] h-[30px] bg-[#00000040] rounded-sm">
                  <span className="text-[#FFFFFF] font-bold w-[58px] pl-2 bg-[#8CC63F]">
                    Takes
                  </span>
                </div>
                <h2 className="font-sans text-lg sm:text-xl text-[#000000] font-semibold leading-snug text-left">
                  {article.title}
                </h2>
                <p className="font-serif text-sm sm:text-base text-[#53575D] font-normal leading-relaxed text-left">
                  {article.description}
                </p>
              </div>
              <div className="mt-4 flex justify-between text-[#53575D] text-xs sm:text-sm">
                <span>BY {article.author}</span>
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <button
        onClick={handleSeeMore}
        disabled={visibleArticles >= allArticles.length}
        className={`mt-6 px-4 py-2 sm:px-6 sm:py-2 ${
          visibleArticles >= allArticles.length
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-[#8F9295] hover:bg-[#72a52c]'
        } text-white font-semibold text-sm flex items-center gap-2 transition-colors`}
      >
        See More
        <Image src="/see.png" alt="see" width={16} height={16} />
      </button>
    </div>
  );
}
