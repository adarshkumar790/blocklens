"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("/");
  const pathname = usePathname();

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/store", label: "Store" },
    { href: "/print", label: "Print" },
    { href: "/book", label: "Book" },
    { href: "/conference", label: "Conference" },
    { href: "/corporation", label: "Corporation" },
    { href: "/utxo", label: "UTXO" },
  ];

  return (
    <header className="bg-white relative z-50">
      <div className="flex justify-center items-center p-4">
        <nav
          className={`flex flex-col md:flex-row md:space-x-2 text-sm uppercase bg-black md:bg-transparent w-full md:w-auto`}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-sans text-base font-bold leading-tight text-left  decoration-skip-ink-none ${
                pathname === href || activeLink === href
                  ? "text-yellow-500 text-black"
                  : "text-black hover:text-yellow-500"
              }`}
              onClick={() => handleLinkClick(href)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
