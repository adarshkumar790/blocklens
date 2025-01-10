"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const Navbarbelow: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("/");
  const pathname = usePathname();

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  const navLinks = [
    { href: "/article", label: "ARTICLES" },
    { href: "/take", label: "Take" },
    { href: "/author", label: "Authors" },
    { href: "/guide", label: "Guides" },
    { href: "/pro", label: "Pro" },
  ];

  return (
    <header className="bg-[#53575D] relative z-50">
      <div className="relative flex items-center p-4">
        {/* Center Navigation Links */}
        <div className="absolute inset-x-0 flex justify-center">
          <nav className="flex space-x-3 -ml-10 text-sm uppercase">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-inter md:text-[18px] text-[13px] font-semibold leading-[24.2px] underline-offset-auto decoration-skip-ink-none ${
                  pathname === href || activeLink === href
                    ? "text-[#8CC63F] text-[#8CC63F] bg-white pb-4 -mb-6 pt-1 pl-1 pr-1"
                    : "text-[#FFFFFF] hover:text-yellow-500"
                }`}
                onClick={() => handleLinkClick(href)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Search Icon */}
        <div className="ml-auto">
          <button
            className="text-[#FFFFFF] hover:text-yellow-500 focus:outline-none md:mr-10 mr-1"
            aria-label="Search"
          >
            <FaSearch className="md:w-{18} md:h-{18} w-{12} h-{12}" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbarbelow;
