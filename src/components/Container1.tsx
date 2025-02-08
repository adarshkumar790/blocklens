
import Image from "next/image";
import React from "react";

const articles = [
  {
    title: "BlackRock is rolling out a Bitcoin ETF in Europe. Here’s why it’s a hard sell",
    description: "BlackRock, the $12 trillion asset manager, is looking to spread the Bitcoin word across Europe.After clinching the American crypto market with more than $56 billion in investment into its IBIT offering, BlackRock is now looking to launch a similar product in Europe, according to a Bloomberg report. BlackRock declined to comment.",
    image: "/blocknews8.avif",
    tag: "TAGS",
    name: "Liam Kelly",
    date: "7 Feb 2025",
  },
  {
    title: "Why new stablecoin bill is a boost for tokenisation in potential $16tn market",
    description: "The newest stablecoin bill won’t just establish long-desired rules for cryptocurrencies pegged to the dollar. It is also spurring excitement from tokenisation entrepreneurs that their market will benefit as well.On Tuesday, Senator Bill Hagerty, a Republican from Tennessee, introduced legislation that is designed to establish rules for stablecoin issuers in the US.",
    image: "/blocknews9.avif",
    tag: "TAGS",
    name: "Pedro Solimano",
    date: "8 Feb 2025",
  },
  {
    title: "Memecoin frenzy fizzles with $46bn plunge since Trump ― but analysts see a revival",
    description: "The market euphoria surrounding memecoins has died down.Trading activity for meme tokens has gone down by a fifth in the last month.Market observers say the market is recalibrating.",
    image: "/blocknews11.avif",
    tag: "OPINION",
    name: "Osato Avan-Nomayo",
    date: "7 Feb 2025",
  },
  {
    title: "‘Hawk Tuah girl’ Haliey Welch — and her lawyer — explain memecoin dumpster fire",
    description: "Haliey Welch’s burgeoning podcast career was abruptly halted after a failed memecoin launch.In her first episode back, Welch and her lawyer attempt to explain what happened to an invited panel of memecoin experts.The leak of the episode itself is generating its own controversy.",
    image: "/blocknews10.avif",
    tag: "TAGS",
    name: "Andrew Flanagan",
    date: "7 Feb 2025",
  },
  {
    title: "Trump’s crypto czar and Congress begin big push for ‘regulatory clarity’",
    description: "The White House and Congress laid out a bevy of ambitious changes for the digital assets industry.Stablecoins lead a flurry of bill writing.Some market experts highlighted a surprising ally in the push for new laws.",
    image: "/blocknews12.avif",
    tag: "TAGS",
    name: "Donal Trump",
    date: "7 Feb 2025",
  },
  {
    title: "Ondo to launch ‘hybrid’ blockchain for Wall Street",
    description: "Ondo Finance will launch its own layer 1 blockchain.Ondo Chain, targeted at traditional financial institutions, will feature an invite-only list of validators.“You as an institution can actually run a node without ever having to touch crypto,” an Ondo executive said.",
    image: "/blocknews13.avif",
    tag: "OPINION",
    name: "Aleks Gilbert",
    date: "6 Feb 2025",
  },
];

const Container1: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-10 p-2">
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
              <p className="w-[310px] h-[280px]  left-[124px] gap-0">{article.description}</p>
              <div className="flex items-center justify-between text-sm text-[#53575D] mt-4">
              <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/profile.png" width={15} height={15} alt="calendar" />
              <span style={{ marginLeft: '5px' }}>{article.name}</span>
              </div>

                
                <div style={{ display: 'flex', alignItems: 'center' }}>
               <Image src="/cal.png" width={15} height={15} alt="calendar" />
               <span style={{ marginLeft: '5px' }}>{article.date}</span>
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
