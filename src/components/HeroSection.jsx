import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import BgImage from "../assets/Bg.jpeg";

import {
  FaArrowRight,
  FaPlay,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-center bg-cover"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>

      {/* Main Content */}
      <div className="relative z-10 grid items-center w-full gap-16 px-6 py-24 mx-auto max-w-7xl lg:grid-cols-2">

        {/* Left Side */}
        <div>

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-5 py-2 mb-8 text-sm font-semibold text-black rounded-full bg-[#F9F295]"
          >
            <FaMapMarkerAlt className="mr-2" />
            Premium Luxury Properties
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 text-5xl font-extrabold leading-tight text-white md:text-7xl"
          >
            Find Your

            <span className="block mt-3 text-[#F9F295]">
              Dream Home
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="max-w-2xl mb-12 text-lg leading-8 text-gray-300"
          >
            Explore premium villas, luxury apartments, beach houses,
            penthouses, and elegant living spaces crafted for modern
            lifestyle, comfort, and sophistication.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="flex flex-wrap gap-5"
          >

            {/* Explore Button */}
            <Link
              to="/properties"
              className="flex items-center gap-3 px-8 py-4 font-semibold text-black transition duration-300 rounded-xl bg-[#F9F295] hover:scale-105 hover:bg-[#f5ec7a]"
            >
              Explore Properties
              <FaArrowRight />
            </Link>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="flex items-center gap-3 px-8 py-4 font-semibold text-white transition duration-300 border border-white rounded-xl hover:bg-white hover:text-black"
            >
              <FaPlay />
              Contact Us
            </Link>

          </motion.div>

        </div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="justify-center hidden lg:flex"
        >

          <div className="w-[420px] overflow-hidden border shadow-2xl bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl">

            {/* Image */}
            <div className="overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                alt="Luxury Villa"
                className="object-cover w-full transition duration-700 h-72 hover:scale-110"
              />

            </div>

            {/* Content */}
            <div className="p-8">

              <div className="flex items-center justify-between mb-5">

                <div>

                  <h2 className="text-3xl font-bold text-white">
                    Royal Villa
                  </h2>

                  <p className="mt-2 text-gray-300">
                    Mumbai, India
                  </p>

                </div>

                <h3 className="text-2xl font-bold text-[#F9F295]">
                  ₹5.2 Cr
                </h3>

              </div>

              {/* Property Features */}
              <div className="grid grid-cols-3 gap-4 mb-8">

                <div className="flex flex-col items-center p-4 text-center rounded-xl bg-white/10">

                  <FaBed className="mb-2 text-[#F9F295]" />

                  <span className="text-sm text-gray-300">
                    4 Beds
                  </span>

                </div>

                <div className="flex flex-col items-center p-4 text-center rounded-xl bg-white/10">

                  <FaBath className="mb-2 text-[#F9F295]" />

                  <span className="text-sm text-gray-300">
                    3 Baths
                  </span>

                </div>

                <div className="flex flex-col items-center p-4 text-center rounded-xl bg-white/10">

                  <FaRulerCombined className="mb-2 text-[#F9F295]" />

                  <span className="text-sm text-gray-300">
                    5200 sqft
                  </span>

                </div>

              </div>

              {/* Button */}
              <Link
                to="/properties"
                className="block w-full py-4 font-semibold text-center text-black transition duration-300 rounded-xl bg-[#F9F295] hover:scale-105 hover:bg-[#f5ec7a]"
              >
                View Property
              </Link>

            </div>

          </div>

        </motion.div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>

    </section>
  );
};

export default HeroSection;