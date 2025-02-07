"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <div 
        className="min-h-screen bg-gray-900 flex items-center justify-center px-4 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/newspaperss.jpg')" }}
      >
        {/* Dark overlay for a professional news website feel */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Container with added box-shadow and border */}
        <div className="relative max-w-4xl w-full bg-white shadow-2xl rounded-lg flex overflow-hidden border border-gray-300 z-10">
          {/* Left Side - Image & Design */}
          <div className="hidden md:flex w-1/2 bg-cover bg-center relative" style={{ backgroundImage: "url('/new.jpg')" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent opacity-75"></div>
            <div className="absolute bottom-6 left-6 text-white text-2xl font-bold drop-shadow-lg">Stay Informed</div>
          </div>
          
          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 p-8 bg-gray-50">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">Have a question or news tip? Reach out to us.</p>

            {submitted ? (
              <p className="text-green-600 font-semibold">Thank you for contacting us! We will get back to you soon.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 p-3 w-full border rounded-md focus:ring focus:ring-blue-300 shadow-sm"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 p-3 w-full border rounded-md focus:ring focus:ring-blue-300 shadow-sm"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 p-3 w-full border rounded-md focus:ring focus:ring-blue-300 shadow-sm"
                    placeholder="Enter your message"
                    rows={4}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;