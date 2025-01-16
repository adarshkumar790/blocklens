"use client"
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Navbar: React.FC = () => {
  // State to manage the dropdown visibility
  const [isMerchOpen, setIsMerchOpen] = useState(false);
  const [isLimitedEditionsOpen, setIsLimitedEditionsOpen] = useState(false);
  const [isArtOpen, setIsArtOpen] = useState(false);

  // Toggle functions for dropdowns
  const toggleMerch = () => setIsMerchOpen(!isMerchOpen);
  const toggleLimitedEditions = () => setIsLimitedEditionsOpen(!isLimitedEditionsOpen);
  const toggleArt = () => setIsArtOpen(!isArtOpen);

  return (
    <nav className="ml-6 mt-4">
      <ul className="flex space-x-4 text-sm font-semibold text-[#FFFFFF]">
        <li className="hover:underline cursor-pointer">MAGAZINES</li>
        <li className="hover:underline cursor-pointer">BOOKS</li>

        {/* MERCH Dropdown */}
        <li
          className="relative cursor-pointer group flex items-center"
          onMouseEnter={toggleMerch}
          onMouseLeave={toggleMerch}
        >
          MERCH
          <FaChevronDown size={10} />
          <ul
            className={`absolute left-0 mt-32 bg-[#53575D] p-2 space-y-2 w-40 ${isMerchOpen ? 'block' : 'hidden'} z-10`}
          >
            <li className="hover:underline cursor-pointer">T-Shirts</li>
            <li className="hover:underline cursor-pointer">Mugs</li>
            <li className="hover:underline cursor-pointer">Hats</li>
          </ul>
        </li>

        {/* LIMITED EDITIONS Dropdown */}
        <li
          className="relative cursor-pointer group flex items-center"
          onMouseEnter={toggleLimitedEditions}
          onMouseLeave={toggleLimitedEditions}
        >
          LIMITED EDITIONS
          <FaChevronDown size={10} />
          <ul
            className={`absolute left-0 mt-32 bg-[#53575D] p-2 space-y-2 w-40 ${isLimitedEditionsOpen ? 'block' : 'hidden'} z-10`}
          >
            <li className="hover:underline cursor-pointer">Signed Copies</li>
            <li className="hover:underline cursor-pointer">Exclusive Prints</li>
            <li className="hover:underline cursor-pointer">Rare Books</li>
          </ul>
        </li>

        {/* ART Dropdown */}
        <li
          className="relative cursor-pointer group flex items-center"
          onMouseEnter={toggleArt}
          onMouseLeave={toggleArt}
        >
          ART
          <FaChevronDown size={10} />
          <ul
            className={`absolute left-0 mt-32 bg-[#53575D] p-2 space-y-2 w-20 ${isArtOpen ? 'block' : 'hidden'} z-10`}
          >
            <li className="hover:underline cursor-pointer">Paintings</li>
            <li className="hover:underline cursor-pointer">Prints</li>
            <li className="hover:underline cursor-pointer">Sculptures</li>
          </ul>
        </li>

        <li className="hover:underline cursor-pointer">HARDWARE</li>
        <li className="hover:underline cursor-pointer">NEW</li>
      </ul>
    </nav>
  );
};

export default Navbar;
