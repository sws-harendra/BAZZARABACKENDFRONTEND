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
      <div className="text-center mb-16 flex flex-col items-center justify-center">


        <h2 className="text-4xl lg:text-7xl font-extrabold flex justify-left items-center text-red-500 tracking-tight">
          About
          <img src="/logo.png" alt="Bazzara.in " className="ml-10 h-20 w-80 text-center" />
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
          <p>
            At Bazzara.in, we believe shopping should be simple, reliable, and enjoyable.</p>
          <p>
            Founded with a vision to redefine online shopping in India, Bazzara brings together a wide range of products across categories — carefully selected to meet the needs of modern consumers.</p>
          <p>
            We focus on delivering not just products, but a complete experience — from easy browsing and secure checkout to fast delivery and responsive customer support.</p>
          <p>
            Our goal is to build a platform where customers can shop with confidence, knowing they are getting the best value without compromising on quality.
            Whether you're looking for daily essentials or trending products, Bazzara.in is your one-stop destination.</p>
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
