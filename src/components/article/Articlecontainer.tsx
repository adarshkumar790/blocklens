// pages/index.tsx
import Image from 'next/image';

const articles = [
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
  {
    title: "Michael Saylor's Trump Meeting Is Turbo Bullish for Bitcoin",
    description:
      "Michael Saylor, Executive Chairman of MicroStrategy and a prominent Bitcoin advocate, recently met with members of former President Donald Trump's team at Mar-a-Lago.",
    date: 'Jan 1, 2025',
    author: 'HELMUNG',
    imageSrc: '/article2.png',
  },
];

export default function ArticleContainer() {
  return (
    <div className="bg-white p-6 flex justify-center">
      <div className="grid gap-6 lg:grid-cols-1 w-full max-w-5xl">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-2 shadow-md overflow-hidden hover:shadow-lg transition-shadow flex"
          >
            {/* Left Side: Image */}
            <div className="relative h-48 w-48 flex-shrink-0">
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
      <span className="text-[#FFFFFF] font-bold w-[58px] pl-2 bg-[#8CC63F]">Takes</span>
      </div>

                <h2 className="font-sans text-xl text-[#000000] font-semibold leading-[38.73px] text-left decoration-[none]">
                  {article.title}
                </h2>
                <p className="font-serif text-xl text-[#53575D] font-normal leading-[23.01px] tracking-wide text-left  decoration-[none]">{article.description}</p>
              </div>
              <div className="mt-4 flex justify-between text-[#53575D] text-xs">
                <span>BY {article.author}</span>
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
