"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white text-gray-800">
      {/* Navbar */}
      {/* <nav className="flex justify-between items-center p-6 w-11/12 mx-auto">
        <h1 className="text-2xl font-bold text-orange-600">TiffinMate</h1>
        <div className="space-x-6 text-sm font-medium">
          <Link href="#">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#partners">Partners</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </nav> */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-orange-600">TiffinMate</h1>
          <div className="space-x-6 text-sm font-medium">
            <Link href="#">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#partners">Partners</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between w-11/12 mx-auto p-8 pt-32">
        <div className="md:w-[48%] space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-orange-700"
          >
            Fresh, Home-Style Tiffins Delivered Daily 🍱
          </motion.h2>
          <p className="text-lg text-gray-600">
            Subscribe to healthy, affordable, and homemade meals from trusted
            restaurants & household chefs near you.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#subscribe"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-2xl shadow-md"
            >
              Subscribe Now
            </Link>
            <Link
              href="#explore"
              className="border border-orange-600 text-orange-600 px-6 py-3 rounded-2xl hover:bg-orange-50"
            >
              Explore Tiffins
            </Link>
          </div>
        </div>

        <div className="md:w-[48%] mt-8 md:mt-0">
          <Image
            src='/images.jpeg'
            alt="Tiffin Service"
            width={600}
            height={400}
            className="rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-16 bg-orange-50 mt-10">
        <h3 className="text-3xl font-semibold text-center mb-10">
          Why Choose Our Tiffin Service?
        </h3>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          {[
            ["Home-Cooked Taste", "Enjoy meals made with love by local chefs."],
            ["Affordable Plans", "Flexible daily, weekly, or monthly options."],
            ["Healthy & Fresh", "Balanced meals prepared hygienically."],
            ["Trusted Providers", "Verified restaurants & home kitchens."],
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h4 className="text-lg font-semibold text-orange-700 mb-2">
                {title}
              </h4>
              <p className="text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* For Partners */}
      <section id="partners" className="py-16 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-center mb-10">
          Partner with Us
        </h3>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h4 className="text-xl font-bold text-orange-700 mb-3">
              For Home Chefs 👩‍🍳
            </h4>
            <p className="text-gray-600 mb-4">
              Start your tiffin business from home. Reach customers nearby who
              love home-cooked food.
            </p>
            <Link
              href="#join"
              className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-xl"
            >
              Join as Home Chef
            </Link>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h4 className="text-xl font-bold text-orange-700 mb-3">
              For Restaurants 🍽️
            </h4>
            <p className="text-gray-600 mb-4">
              Offer tiffin subscriptions from your restaurant and expand your
              daily customer base.
            </p>
            <Link
              href="#partner"
              className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-xl"
            >
              Partner with Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#db9a6e] text-white py-8 text-center">
        <p>© {new Date().getFullYear()} TiffinMate. All rights reserved.</p>
        <p className="text-sm mt-2">
          Made with ❤️ for Home Chefs & Food Lovers
        </p>
      </footer>
    </main>
  );
}

