import { motion } from "framer-motion";
import BgImage from "../assets/Bg.jpeg";
import {
  FaArrowRight,
  FaPlay,
  FaMapMarkerAlt,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-center bg-cover"
      style={{
        backgroundImage:`url(${BgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
      {/* Content */}
      <div className="relative z-10 grid items-center w-full px-6 py-20 mx-auto max-w-7xl lg:grid-cols-2 gap-14">
        {/* Left Content */}
        <div>
          {/* Small Tag */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-5 py-2 mb-6 text-sm font-semibold text-black rounded-full bg-gold"
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
            <span className="block mt-2 text-gold">
              Dream Home
            </span>
          </motion.h1>
          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="max-w-2xl mb-10 text-lg leading-8 text-gray-300"
          >
            Discover luxury villas, premium apartments, beach houses,
            penthouses, and modern living spaces designed for elegance,
            comfort, and lifestyle.
          </motion.p>
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="flex flex-wrap gap-5"
          >
            {/* Primary Button */}
            <button className="flex items-center gap-3 px-8 py-4 font-semibold text-black transition duration-300 rounded-xl bg-gold hover:scale-105 hover:bg-yellow-400">
              Explore Properties
              <FaArrowRight />
            </button>
            {/* Secondary Button */}
            <button className="flex items-center gap-3 px-8 py-4 font-semibold text-white transition duration-300 border border-white rounded-xl hover:bg-white hover:text-black">
              <FaPlay />
              Watch Video
            </button>
          </motion.div>
        </div>
        {/* Right Side Floating Card */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="justify-center hidden lg:flex"
        >
          <div className="w-[400px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
              alt="Luxury House"
              className="object-cover w-full mb-6 h-72 rounded-2xl"
            />
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Royal Villa
                </h2>
                <p className="mt-2 text-gray-300">
                  Mumbai, India
                </p>
              </div>
              <h3 className="text-2xl font-bold text-gold">
                ₹5.2 Cr
              </h3>
            </div>
            <button className="w-full py-4 font-semibold text-black transition duration-300 rounded-xl bg-gold hover:scale-105 hover:bg-yellow-400">
              View Property
            </button>
          </div>
        </motion.div>
      </div>
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;