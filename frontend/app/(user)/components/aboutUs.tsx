import Heading from "@/app/commonComponents/heading";
import { brandName } from "@/app/contants";
import React from "react";
import StaticPageRenderer from "./staticPageRenderer";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="relative py-20 px-6 lg:px-20 overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 -z-10 pointer-events-none"></div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-300 opacity-20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          About <span className="text-[#E53935]">{brandName}</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Bringing handmade art closer to your heart.
        </p>
      </div>

      {/* Content Layout */}
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

        {/* Left Content */}
        <div className="space-y-6">

          {/* Badge */}
          <div className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-[#E53935] font-semibold text-lg shadow-sm">
            Style That Defines You
          </div>

          <h3 className="text-3xl font-bold text-gray-900 leading-snug">
            Bringing fashion closer to your lifestyle.
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-semibold">{brandName}</span>, we bring you
            thoughtfully designed clothing crafted with quality fabrics and modern
            trends in mind. Every piece is made to deliver comfort, confidence, and
            effortless style to your everyday wardrobe.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            We believe art should be{" "}
            <span className="text-[#E53935] font-semibold">
              accessible, affordable, and authentic
            </span>.
            With safe packaging and worldwide delivery, we ensure your
            masterpiece arrives just as the artist imagined.
          </p>

          {/* Button */}
          <Link href="/products">
            <button className="mt-4 px-6 py-3 bg-[#E53935] text-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition active:scale-95">
              Explore Our Collection →
            </button>
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="relative">

          <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
            <img
              src="/about_img.jpg"   // replace with your image
              alt="Handmade Art"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
            <p className="text-sm font-semibold text-gray-900">500K+ Happy buyers</p>
            <p className="text-xs text-gray-500">Worldwide Customers</p>
          </div>

        </div>
      </div>
    </section>

  );
};

export default AboutUs;
