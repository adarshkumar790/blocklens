import Advertise from '@/components/Advertise';
import Articles from '@/components/Article';
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

const Header = () => {
  const socialLinks = [
    { href: '#', src: '/fab.png', alt: 'Facebook', size: 25 },
    { href: '#', src: '/lib.png', alt: 'LinkedIn', size: 20 },
    { href: '#', src: '/twb.png', alt: 'Twitter', size: 20 },
    { href: '#', src: '/yot.png', alt: 'YouTube', size: 20 },
    { href: '#', src: '/it.png', alt: 'Instagram', size: 20 },
  ];

  return (
    <header className="bg-white text-gray-800">
      <Navbar />
    
      <div className="hidden md:block bg-[#53575D] text-white relative h-56">
        <div className="flex items-center justify-between px-4 h-full">
          <div className="flex flex-col space-y-4">
            {socialLinks.map(({ href, src, alt, size }) => (
              <a key={alt} href={href} className="text-white">
                <Image src={src} alt={alt} width={size} height={size} />
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-full">
              <img src="/pro.png" alt="Pro Icon" className="h-[103px] w-[169px]" />
            </div>
            <span className="font-inter text-[20px] font-semibold leading-[21.78px] text-left underline-offset-[from-font] decoration-skip-ink-none">
              VIEW 150+ <br /> BITCOIN CHARTS & <br /> INDICATORS
            </span>
          </div>
          <div className="flex flex-col items-center mr-24">
            <img src="/block.png" alt="Blocklens Logo" className="h-70 w-80" />
          </div>
          <div className="flex items-center space-x-2 mr-32">
            <div className="bg-orange-500 p-0 rounded-full">
              <img src="/bit.png" alt="Bitcoin Icon" className="h-30 w-30" />
            </div>
            <span className="font-inter text-[18px] font-semibold leading-[21.78px] text-left underline-offset-[from-font] decoration-skip-ink-none">
              Use BM10 for <br /> 10% off The <br /> Bitcoin Conference
            </span>
          </div>
        </div>
      </div>
      <div className="block md:hidden bg-[#53575D] text-white p-4">
      
        <div className="flex space-x-4 justify-center mb-6">
          {socialLinks.map(({ href, src, alt, size }) => (
            <a key={alt} href={href} className="text-white">
              <Image src={src} alt={alt} width={size} height={size} />
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center space-y-8">
      
          <img src="/block.png" alt="Blocklens Logo" className="h-64 w-72 -mt-12" />
          <div className="flex flex-col items-center space-y-2">
            <img src="/pro.png" alt="Pro Icon" className="h-24 w-auto -mt-20" />
            <span className="text-center font-inter text-[16px] font-semibold">
              VIEW 150+ <br /> BITCOIN CHARTS & <br /> INDICATORS
            </span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img src="/bit.png" alt="Bitcoin Icon" className="h-16 w-auto bg-orange-500 p-2 rounded-full" />
            <span className="text-center font-inter text-[19px] font-semibold">
              Use BM10 for <br /> 10% off The <br /> Bitcoin Conference
            </span>
          </div>
        </div>
      </div>

      <Navbarbelow />
      <Banner />
      <Container />
      <Guides />
      <Authors />
      <Founders />
      <Advertise />
      <Articles />
      <Shops />
      <Container1 />
    </header>
  );
};

export default Header;
