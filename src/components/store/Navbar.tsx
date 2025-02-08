"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Dropdown: React.FC<{
  label: string;
  items: string[];
  isOpen: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  isMobile?: boolean;
}> = ({ label, items, isOpen, onMouseEnter, onMouseLeave, onClick, isMobile }) => (
  <li
    className="relative cursor-pointer group flex items-center"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={isMobile ? onClick : undefined}
    aria-haspopup="true"
    aria-expanded={isOpen}
  >
    {label}
    <FaChevronDown size={10} className="ml-1" />
    <ul
      className={`absolute left-0 mt-2 bg-[#53575D] p-2 space-y-2 w-40 ${
        isOpen ? "block" : "hidden"
      } z-10 ${isMobile ? "relative mt-1" : ""}`}
    >
      {items.map((item, index) => (
        <li key={index} className="hover:underline cursor-pointer">
          {item}
        </li>
      ))}
    </ul>
  </li>
);

const Navbar: React.FC = () => {
  const [dropdowns, setDropdowns] = useState({
    merch: false,
    limitedEditions: false,
    art: false,
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (key: keyof typeof dropdowns) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <nav className="ml-6 mt-4 flex justify-between items-center">
      
      <div className="md:hidden ml-56">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <ul className="hidden md:flex space-x-4 text-sm font-semibold text-[#FFFFFF]">
      <li className="hover:underline cursor-pointer"><Link href="/">HOME</Link></li>
        <li className="hover:underline cursor-pointer">MAGAZINES</li>
        <li className="hover:underline cursor-pointer">BOOKS</li>

        <Dropdown
          label="MERCH"
          items={["T-Shirts", "Mugs", "Hats"]}
          isOpen={dropdowns.merch}
          onMouseEnter={() => toggleDropdown("merch")}
          onMouseLeave={() => toggleDropdown("merch")}
        />

        <Dropdown
          label="LIMITED EDITIONS"
          items={["Signed Copies", "Exclusive Prints", "Rare Books"]}
          isOpen={dropdowns.limitedEditions}
          onMouseEnter={() => toggleDropdown("limitedEditions")}
          onMouseLeave={() => toggleDropdown("limitedEditions")}
        />

        <Dropdown
          label="ART"
          items={["Paintings", "Prints", "Sculptures"]}
          isOpen={dropdowns.art}
          onMouseEnter={() => toggleDropdown("art")}
          onMouseLeave={() => toggleDropdown("art")}
        />

        <li className="hover:underline cursor-pointer">HARDWARE</li>
        <li className="hover:underline cursor-pointer">NEW</li>
      </ul>
      {mobileMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 text-sm font-semibold text-[#FFFFFF] mt-0 md:mt-4 h-screen bg-[#000000] w-full fixed top-0 left-0 p-6 z-50">
          <button onClick={() => setMobileMenuOpen(false)} className="text-white self-end">
            <FaTimes size={24} />
          </button>
          <li className="hover:underline cursor-pointer">MAGAZINES</li>
          <li className="hover:underline cursor-pointer">BOOKS</li>

          <Dropdown
            label="MERCH"
            items={["T-Shirts", "Mugs", "Hats"]}
            isOpen={dropdowns.merch}
            onClick={() => toggleDropdown("merch")}
            isMobile
          />

          <Dropdown
            label="LIMITED EDITIONS"
            items={["Signed Copies", "Exclusive Prints", "Rare Books"]}
            isOpen={dropdowns.limitedEditions}
            onClick={() => toggleDropdown("limitedEditions")}
            isMobile
          />

          <Dropdown
            label="ART"
            items={["Paintings", "Prints", "Sculptures"]}
            isOpen={dropdowns.art}
            onClick={() => toggleDropdown("art")}
            isMobile
          />

          <li className="hover:underline cursor-pointer">HARDWARE</li>
          <li className="hover:underline cursor-pointer">NEW</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
