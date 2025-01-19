import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Store"
}

import AnyQuestion from "@/components/store/AnyQuestion";
import Container from "@/components/store/Container";
import Footer from "@/components/store/Footer";
import Navbar from "@/components/store/Navbar";
import Reader from "@/components/store/Reader";
import Search from "@/components/store/Search";
import Image from "next/image";
import React from "react";

const Store: React.FC = () => {
  return (
    <div className="bg-white text-black font-sans min-h-screen">
      {/* Header */}
      <header className="flex items-center px-6 py-4 bg-[#53575D] w-3/4 h-[60px]">
        <h1 className="flex items-center justify-center mt-4">
          <Image
            src="/block.png"
            alt="Blocklens logo"
            width={128} // Adjusted size for better responsiveness
            height={96}
            className="h-24 w-32"
          />
        </h1>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex relative">
        {/* Gray Box Section */}
        <div className="bg-[#53575D] w-3/4 p-2 min-h-[calc(100vh-96px)]">
          <div className="text-center mt-40 mr-96">
            <h2 className="font-times text-[32px] text-[#FFFFFF] font-normal leading-[36.8px] tracking-[0.1em] text-left ml-32">
              Official Pre-Sale
            </h2>
            <h1 className="font-poor-richard text-[52px] text-[#FFFFFF] font-normal leading-[72.06px] text-left ml-16">
              The Satoshi Papers
            </h1>
            <p className="font-times text-[32px] text-[#FFFFFF] font-normal leading-[41.4px] tracking-[0.1em] text-left ml-24">
              Reflection on political economy after Bitcoin
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-12 flex space-x-4 justify-end pr-14 pt-2">
            <button className="bg-[#F8BD48] text-xs text-[#FFFFFF] px-4 py-2 font-semibold z-10 border border-white">
              LIBRARY EDITION
            </button>
            <button className="bg-[#F8BD48] text-xs text-[#FFFFFF] px-4 py-2 font-bold border border-white z-10">
              PAPERBACK
            </button>
          </div>
        </div>

        {/* Right Empty Section */}
        <div className="w-1/4"></div>

        {/* Split Image */}
        <div
          className="absolute inset-0 flex justify-end"
          style={{ pointerEvents: "none" }}
        >
          <div
            className="absolute top-20 border border-[#F8BD48] border-t-2 border-b-2 right-16 h-full bg-cover bg-center"
            style={{
              width: "50%",
              height: "70%",
              backgroundImage: "url('/book.png')",
            }}
          />
        </div>
      </main>

      {/* Banner Section */}
      <Image
        src="/banner.png"
        width={1400}
        height={300}
        alt="banner"
        className="mt-12"
      />

      {/* Additional Components */}
      <Container />
      <Search />
      <Reader />
      <AnyQuestion />
      <Footer />
    </div>
  );
};

export default Store;
