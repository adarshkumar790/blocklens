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

const Page = () => {
  return (
    <header className="bg-white text-gray-800">
      <Navbar/>
      <div className="bg-[#53575D] text-white relative h-56">
        <div className="flex items-center justify-between px-4 h-full">
          <div className="flex flex-col space-y-4"> 
            <a href="#" className="text-white"><Image src="/fab.png" alt='' width={25} height={25}/></a>
            <a href="#" className="text-white"><Image src="/lib.png" alt='' width={20} height={20}/></a>
            <a href="#" className="text-white"><Image src="/twb.png" alt='' width={20} height={20}/></a>
            <a href="#" className="text-white"><Image src="/yot.png" alt='' width={20} height={20}/></a>
            <a href="#" className="text-white"><Image src="/it.png" alt='' width={20} height={20}/></a>
          </div>
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-full">
              <img src="/pro.png" alt="Pro Icon" className="h-[103px] w-[169px]" />
            </div>
            <span className="font-inter text-[18px] font-semibold leading-[21.78px] text-left underline-offset-[from-font] decoration-skip-ink-none">
              VIEW 150+ <br/> BITCOIN CHARTS & <br/> INDICATORS
            </span>
          </div>

          {/* Block Logo */}
          <div className="flex flex-col items-center mr-24">
            <img src="/block.png" alt="Blocklens Logo" className="h-70 w-80" />
          </div>

          {/* Bitcoin Section */}
          <div className="flex items-center space-x-2 mr-32">
            <div className="bg-orange-500 p-0 rounded-full">
              <img src="/bit.png" alt="Pro Icon" className="h-30 w-30" />
            </div>
            <span className="font-inter text-[18px] font-semibold leading-[21.78px] text-left underline-offset-[from-font] decoration-skip-ink-none">
              Use BM10 for <br/> 10% off The <br/> Bitcoin Conference
            </span>
          </div>
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

export default Page;
