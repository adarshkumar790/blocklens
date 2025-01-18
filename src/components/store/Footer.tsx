import React from "react";
import { FaApplePay, FaCcMastercard, FaCcVisa, FaGooglePay, FaShopify } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center text-center sm:text-left">
        {/* Left Section - Shop Links */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h3 className="text-lg font-semibold text-white mb-4 ml-24">Shop</h3>
          <ul className="space-y-1 ml-24">
            <li>Magazines</li>
            <li>Books</li>
            <li>Merch</li>
            <li>Limited Edition</li>
            <li>Art</li>
            <li>Hardware</li>
            <li>New</li>
          </ul>
        </div>

        {/* Center Section - Logo and Dropdowns */}
        <div className="w-full sm:w-1/3 flex flex-col items-center">
          <div className="mb-4">
            {/* Logo */}
            <img
              src="/block.png"
              alt="Blocklens Logo"
              className="h-60 w-80"
            />
          </div>

          {/* Dropdowns */}
          <div className="flex space-x-4 mt-4">
            <select className="bg-gray-700 text-gray-300 py-2 px-4 rounded-md focus:outline-none">
              <option>English</option>
              <option>Spanish</option>
            </select>
            <select className="bg-gray-700 text-gray-300 py-2 px-4 rounded-md focus:outline-none">
              <option>India (USD $)</option>
              <option>USA (USD $)</option>
            </select>
          </div>

          {/* Payment Methods */}
          <div className="flex space-x-8 mt-4">
            <FaApplePay className="h-8 w-8 text-white" title="Apple Pay" />
            <FaGooglePay className="h-8 w-8 text-white" title="Google Pay" />
            <FaCcVisa className="h-8 w-8 text-blue-500" title="Visa" />
            <FaCcMastercard className="h-8 w-8 text-red-500" title="MasterCard" />
            <FaShopify className="h-8 w-8 text-green-500" title="Shopify" />
          </div>
        </div>

        {/* Right Section - Resources Links */}
        <div className="w-full sm:w-1/3 mb-20">
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-1">
            <li>Happy Bitcoiners</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © 2023 Bitcoin Magazine. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
