"use client";
import React from "react";

const authors = [
  {
    name: "Aaron van Wirdum",
    image: "/auth1.png", // Replace with actual image paths
  },
  {
    name: "Aaron van Wirdum",
    image: "/auth2.png", // Replace with actual image paths
  },
  {
    name: "Aaron van Wirdum",
    image: "/auth3.png", // Replace with actual image paths
  },
  {
    name: "Aaron van Wirdum",
    image: "/auth4.png", // Replace with actual image paths
  },
  {
    name: "Aaron van Wirdum",
    image: "/auth5.png", // Replace with actual image paths
  },
];

const Authors: React.FC = () => {
  return (
    <div className="bg-white py-8 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-24">Authors</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {authors.map((author, index) => (
            <div
              key={index}
              className={`w-[150px] flex flex-col items-center text-center ${
                index % 2 === 0 ? "mt-6" : "-mt-6"
              }`}
            >
              <img
                src={author.image}
                alt={author.name}
                className="w-[130px] h-[150px] object-cover rounded"
              />
              <p className="text-[#53575D] font-medium mt-2">{author.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Authors;
