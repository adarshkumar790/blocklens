import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Store"
};

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
      <header className="flex items-center px-4 sm:px-6 py-4 bg-[#53575D] w-full sm:w-3/4 h-[60px]">
        <h1 className="flex items-center justify-center mt-2 sm:mt-4">
          <Image
            src="/block.png"
            alt="Blocklens logo"
            width={120}
            height={72}
            className="h-24 w-44 sm:h-24 sm:w-32"
          />
        </h1>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex flex-col sm:flex-row relative">
        {/* Gray Box Section */}
        <div className="bg-[#53575D] w-full sm:w-3/4 p-4 sm:p-2 min-h-[calc(100vh-96px)] text-center sm:text-left">
          <div className="mt-10 sm:mt-40 sm:mr-96">
            <h2 className="font-times text-xl sm:text-[32px] text-[#FFFFFF] font-normal leading-tight sm:leading-[36.8px] tracking-[0.1em] sm:ml-32">
              Official Pre-Sale
            </h2>
            <h1 className="font-poor-richard text-2xl sm:text-[52px] text-[#FFFFFF] font-normal leading-tight sm:leading-[72.06px] sm:ml-16">
              The Satoshi Papers
            </h1>
            <p className="font-times text-lg sm:text-[32px] text-[#FFFFFF] font-normal leading-tight sm:leading-[41.4px] tracking-[0.1em] sm:ml-24">
              Reflection on political economy after Bitcoin
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 sm:mt-12 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:justify-end pr-0 sm:pr-14 pt-2">
            <button className="bg-[#F8BD48] text-xs text-[#FFFFFF] px-4 py-2 font-semibold z-10 border border-white">
              LIBRARY EDITION
            </button>
            <button className="bg-[#F8BD48] text-xs text-[#FFFFFF] px-4 py-2 font-bold border border-white z-10">
              PAPERBACK
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden sm:block w-1/4"></div>
        <div
          className="absolute inset-0 flex justify-center sm:justify-end"
          style={{ pointerEvents: "none" }}
        >
          <div
            className="hidden sm:block absolute top-20 border border-[#F8BD48] border-t-2 border-b-2 right-16 h-full bg-cover bg-center"
            style={{
              width: "50%",
              height: "70%",
              backgroundImage: "url('/book.png')",
            }}
          />
        </div>
      </main>

      <Image
        src="/banner.png"
        width={1400}
        height={300}
        alt="banner"
        className="mt-12 mx-auto"
      />
      <Container />
      <Search />
      <Reader />
      <AnyQuestion />
      <Footer />
    </div>
  );
};

export default Store;
