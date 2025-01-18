"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Dropdown: React.FC<{
  label: string;
  items: string[];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}> = ({ label, items, isOpen, onMouseEnter, onMouseLeave }) => (
  <li
    className="relative cursor-pointer group flex items-center"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    aria-haspopup="true"
    aria-expanded={isOpen}
  >
    {label}
    <FaChevronDown size={10} />
    <ul
      className={`absolute left-0 mt-32 bg-[#53575D] p-2 space-y-2 w-40 ${
        isOpen ? "block" : "hidden"
      } z-10`}
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

  const toggleDropdown = (key: keyof typeof dropdowns, isOpen: boolean) => {
    setDropdowns({ ...dropdowns, [key]: isOpen });
  };

  return (
    <nav className="ml-6 mt-4">
      <ul className="flex space-x-4 text-sm font-semibold text-[#FFFFFF]">
        <li className="hover:underline cursor-pointer">MAGAZINES</li>
        <li className="hover:underline cursor-pointer">BOOKS</li>

        <Dropdown
          label="MERCH"
          items={["T-Shirts", "Mugs", "Hats"]}
          isOpen={dropdowns.merch}
          onMouseEnter={() => toggleDropdown("merch", true)}
          onMouseLeave={() => toggleDropdown("merch", false)}
        />

        <Dropdown
          label="LIMITED EDITIONS"
          items={["Signed Copies", "Exclusive Prints", "Rare Books"]}
          isOpen={dropdowns.limitedEditions}
          onMouseEnter={() => toggleDropdown("limitedEditions", true)}
          onMouseLeave={() => toggleDropdown("limitedEditions", false)}
        />

        <Dropdown
          label="ART"
          items={["Paintings", "Prints", "Sculptures"]}
          isOpen={dropdowns.art}
          onMouseEnter={() => toggleDropdown("art", true)}
          onMouseLeave={() => toggleDropdown("art", false)}
        />

        <li className="hover:underline cursor-pointer">HARDWARE</li>
        <li className="hover:underline cursor-pointer">NEW</li>
      </ul>
    </nav>
  );
};

export default Navbar;
