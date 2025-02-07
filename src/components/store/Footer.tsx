import React from "react";
import { FaApplePay, FaCcMastercard, FaCcVisa, FaGooglePay, FaShopify } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-center sm:text-left">
        {/* Left Section - Shop Links */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h3 className="text-lg font-semibold text-white mb-1 sm:ml-20 md:ml-72">Shop</h3>
          <ul className="space-y-1 sm:ml-20 md:ml-72">
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
        <div className="w-full sm:w-1/3 flex flex-col items-center md:mt-4 -mt-8">
          <div className="md:mb-0 mb-4">
            <img src="/block.png" alt="Blocklens Logo" className="h-60 w-70 sm:h-60 sm:w-80" />
          </div>

          {/* Dropdowns */}
          <div className="flex space-x-2 sm:space-x-4 md:mt-0 mt-0">
            <select className="bg-gray-700 text-gray-300 py-2 px-4 rounded-md focus:outline-none text-sm sm:text-base">
              <option>English</option>
              <option>Hindi</option>
            </select>
            <select className="bg-gray-700 text-gray-300 py-2 px-4 rounded-md focus:outline-none text-sm sm:text-base">
              <option>India (USD $)</option>
              <option>USA (USD $)</option>
            </select>
          </div>

          {/* Payment Methods */}
          <div className="flex space-x-4 sm:space-x-8 mb-8 mt-4">
            <FaApplePay className="h-6 w-6 sm:h-8 sm:w-8 text-white" title="Apple Pay" />
            <FaGooglePay className="h-6 w-6 sm:h-8 sm:w-8 text-white" title="Google Pay" />
            <FaCcVisa className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" title="Visa" />
            <FaCcMastercard className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" title="MasterCard" />
            <FaShopify className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" title="Shopify" />
          </div>
        </div>

        {/* Right Section - Resources Links */}
        <div className="w-full sm:w-1/3">
          <h3 className="text-lg font-semibold text-white mb-1">Resources</h3>
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
        © 2025 Blocklens Magazine. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
