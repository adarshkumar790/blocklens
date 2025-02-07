import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Article"
}

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
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Article = () => {
  return (
    <header className="bg-white text-gray-800">
      <Navbar/>
      <div className="hidden md:block bg-[#53575D] text-white relative h-56">
      <div className="flex items-center px-4 h-full">
  <div className="flex flex-col space-y-4 flex-shrink-0">
    <a href="#" className="text-white"><Image src="/fab.png" alt="" width={25} height={25} /></a>
    <a href="#" className="text-white"><Image src="/lib.png" alt="" width={20} height={20} /></a>
    <a href="#" className="text-white"><Image src="/twb.png" alt="" width={20} height={20} /></a>
    <a href="#" className="text-white"><Image src="/yot.png" alt="" width={20} height={20} /></a>
    <a href="#" className="text-white"><Image src="/it.png" alt="" width={20} height={20} /></a>
  </div>
  <div className="flex-1 flex justify-center">
    <img src="/block.png" alt="Blocklens Logo" className="h-80 w-90" />
  </div>
</div>
            </div>
            <div className="block md:hidden bg-[#53575D] text-white p-4">
        <div className="flex space-x-4 justify-center mb-6">
          <a href="#" className="text-white">
            <Image src="/fab.png" alt="Facebook" width={25} height={25} />
          </a>
          <a href="#" className="text-white">
            <Image src="/lib.png" alt="LinkedIn" width={25} height={25} />
          </a>
          <a href="#" className="text-white">
            <Image src="/twb.png" alt="Twitter" width={25} height={25} />
          </a>
          <a href="#" className="text-white">
            <Image src="/yot.png" alt="YouTube" width={25} height={25} />
          </a>
          <a href="#" className="text-white">
            <Image src="/it.png" alt="Instagram" width={25} height={25} />
          </a>
        </div>
      
        <div className="flex flex-col items-center space-y-8">
          {/* Blocklens Logo */}
          <img src="/block.png" alt="Blocklens Logo" className="h-64 w-72 -mt-12" />
      
        </div>
      </div>
      
     <Navbarbelow/>
     <Articlecontainer/>
     {/* <Banner/>
     <Container/>
     <Guides/>
     <Authors/>
     <Founders/>
     <Advertise/>
     <Articles/>
     <Shops/>
      <Container1/> */}
    </header>
  );
};

export default Article;
