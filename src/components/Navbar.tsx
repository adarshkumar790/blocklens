"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Removed unnecessary state for active link
  const pathname = usePathname(); // Use pathname to determine active link

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/store", label: "Store" },
    { href: "/print", label: "Print" },
    { href: "/book", label: "Book" },
    { href: "/conference", label: "Conference" },
    { href: "/corporation", label: "Corporation" },
    { href: "/utxo", label: "UTXO" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev); // Extracted toggle function to avoid inline logic

  const linkClass = (href: string) => // Created reusable function to handle link styles
    pathname === href
      ? "md:text-yellow-500 text-yellow-500 md:text-black text-white"
      : "md:text-black text-white md:hover:text-yellow-500 hover:text-yellow";

  return (
    <header className="bg-white relative z-50">
      <div className="flex justify-between items-center p-4 md:justify-center">
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu} // Replaced inline toggle logic with the extracted function
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:flex-row md:space-x-2 text-sm uppercase bg-black md:bg-transparent w-full md:w-auto md:static absolute top-full left-0 right-0 p-4 md:p-0`}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block md:inline font-sans text-base font-bold leading-tight text-left decoration-skip-ink-none p-2 md:p-0 ${linkClass(
href
              )}`}
              onClick={() => setIsOpen(false)} // Simplified onClick handler to only close the menu
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
