
import Image from "next/image";
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
  {
    title: "BITCOIN IS FIAT",
    description: "Bitcoin is not a digital commodity, it is a decentralized digital fiat currency.",
    image: "/block4.png",
    tag: "TAGS",
  },
  {
    title: "BITCOIN IS FIAT",
    description: "Bitcoin is not a digital commodity, it is a decentralized digital fiat currency.",
    image: "/block5.png",
    tag: "TAGS",
  },
  {
    title: "BITCOIN IS FIAT",
    description: "Bitcoin is not a digital commodity, it is a decentralized digital fiat currency.",
    image: "/block6.png",
    tag: "OPINION",
  },
];

const Container1: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-10">
        <h2 className="text-2xl font-bold text-center mb-24">Latest Articles</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-[#F8F8F8]  shadow-md overflow-hidden hover:shadow-lg transition-shadow-[#00000040]"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-2">
              <h2 className="w-[300px] h-[96px]  font-bold left-[124px] gap-0"> {article.title}</h2>
              <p className="w-[300px] h-[150px]  left-[124px] gap-0">{article.description}</p>
              <div className="flex items-center justify-between text-sm text-[#53575D] mt-4">
              <div style={{ display: 'flex', alignItems: 'center' }}>
  <Image src="/profile.png" width={15} height={15} alt="calendar" />
  <span style={{ marginLeft: '5px' }}>Halanko</span>
</div>

                
                <div style={{ display: 'flex', alignItems: 'center' }}>
  <Image src="/cal.png" width={15} height={15} alt="calendar" />
  <span style={{ marginLeft: '5px' }}>Jan 1, 2025</span>
</div>

                <button className="text-[#FFFFFF] text-xs font-medium px-2 py-2 bg-[#1E293B] rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              {article.tag}
              </button>
              </div>
              <div className="flex justify-start items-center mt-4 mb-1">
    
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container1;
