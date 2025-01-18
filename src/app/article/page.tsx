import Advertise from '@/components/Advertise';
import Articles from '@/components/Article';
import Articlecontainer from '@/components/article/Articlecontainer';
import Authors from '@/components/Auther';
import Banner from '@/components/Banner';
import Container from '@/components/Container';
import Container1 from '@/components/Container1';
import Founders from '@/components/Founder';
import Guides from '@/components/Guides';
import Navbar from '@/components/Navbar';
import Navbarbelow from '@/components/Navbarbelow';
import Shops from '@/components/Shop';
import Image from 'next/image';
import React from 'react';

const socialIcons = [
  { src: '/fab.png', alt: 'Facebook' },
  { src: '/lib.png', alt: 'LinkedIn' },
  { src: '/twb.png', alt: 'Twitter' },
  { src: '/yot.png', alt: 'YouTube' },
  { src: '/it.png', alt: 'Instagram' },
];

const HeaderSection: React.FC<{
  imageSrc: string;
  description: string;
  bgColor?: string;
  imgSize?: { height: number; width: number };
}> = ({ imageSrc, description, bgColor = 'bg-transparent', imgSize = { height: 30, width: 30 } }) => (
  <div className={`flex items-center space-x-2 ${bgColor}`}>
    <div className="p-0 rounded-full">
      <Image src={imageSrc} alt="Icon" height={imgSize.height} width={imgSize.width} />
    </div>
    <span className="font-inter text-[18px] font-semibold leading-[21.78px] text-left underline-offset-[from-font] decoration-skip-ink-none">
      {description}
    </span>
  </div>
);

const Page = () => {
  return (
    <header className="bg-white text-gray-800">
      <Navbar />

      {/* Desktop Layout */}
      <div className="hidden md:block bg-[#53575D] text-white relative h-56">
        <div className="flex items-center justify-between px-4 h-full">
          {/* Social Icons */}
          <div className="flex flex-col space-y-4">
            {socialIcons.map((icon, idx) => (
              <a href="#" key={idx} className="text-white">
                <Image src={icon.src} alt={icon.alt} width={25} height={25} />
              </a>
            ))}
          </div>

          {/* Section 1 */}
          <HeaderSection
            imageSrc="/pro.png"
            description="VIEW 150+ <br /> BITCOIN CHARTS & <br /> INDICATORS"
            imgSize={{ height: 103, width: 169 }}
          />

          {/* Blocklens Logo */}
          <div className="flex flex-col items-center mr-24">
            <Image src="/block.png" alt="Blocklens Logo" width={320} height={280} />
          </div>

          {/* Section 2 */}
          <HeaderSection
            imageSrc="/bit.png"
            description="Use BM10 for <br /> 10% off The <br /> Bitcoin Conference"
            bgColor="bg-orange-500"
            imgSize={{ height: 30, width: 30 }}
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden bg-[#53575D] text-white p-4">
        {/* Social Icons */}
        <div className="flex space-x-4 justify-center mb-6">
          {socialIcons.map((icon, idx) => (
            <a href="#" key={idx} className="text-white">
              <Image src={icon.src} alt={icon.alt} width={25} height={25} />
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center space-y-8">
          {/* Blocklens Logo */}
          <Image src="/block.png" alt="Blocklens Logo" width={288} height={256} className="-mt-12" />

          {/* Section 1 */}
          <div className="flex flex-col items-center space-y-2">
            <Image src="/pro.png" alt="Pro Icon" width={96} height={96} className="-mt-20" />
            <span className="text-center font-inter text-[16px] font-semibold">
              VIEW 150+ <br /> BITCOIN CHARTS & <br /> INDICATORS
            </span>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-orange-500 p-2 rounded-full">
              <Image src="/bit.png" alt="Bitcoin Icon" width={64} height={64} />
            </div>
            <span className="text-center font-inter text-[19px] font-semibold">
              Use BM10 for <br /> 10% off The <br /> Bitcoin Conference
            </span>
          </div>
        </div>
      </div>

      <Navbarbelow />
      <Articlecontainer />
      {/* Additional Components */}
      {/* <Banner />
      <Container />
      <Guides />
      <Authors />
      <Founders />
      <Advertise />
      <Articles />
      <Shops />
      <Container1 /> */}
    </header>
  );
};

export default Page;
