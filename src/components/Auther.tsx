"use client";
import React from "react";

const authors = [
  { name: "Aaron van Wirdum", image: "/auth1.png" },
  { name: "Aaron van Wirdum", image: "/auth2.png" },
  { name: "Aaron van Wirdum", image: "/auth3.png" },
  { name: "Aaron van Wirdum", image: "/auth4.png" },
  { name: "Aaron van Wirdum", image: "/auth5.png" },
];

const Authors: React.FC = () => {
  return (
    <div className="bg-white py-8 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-24">
          {/* Use an <h1> for SEO since it's the main page title */}
          Authors
        </h1>

        {/* Authors Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {authors.map(({ name, image }, index) => (
            <div
              key={index}
              className={`w-[150px] flex flex-col items-center text-center ${
                index % 2 === 0 ? "mt-6" : "-mt-6"
              }`}
            >
              {/* Author Image */}
              <img
                src={image}
                alt={`Portrait of ${name}`} // Add descriptive alt text for accessibility and SEO
                className="w-[130px] h-[150px] object-cover rounded"
              />
              {/* Author Name */}
              <p className="text-[#53575D] font-medium mt-2">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Authors;
