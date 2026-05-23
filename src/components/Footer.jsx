import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {

  const socialLinks = [
    {
      id: 1,
      icon: <FaFacebookF />,
      link: "https://facebook.com",
    },

    {
      id: 2,
      icon: <FaInstagram />,
      link: "https://instagram.com",
    },

    {
      id: 3,
      icon: <FaTwitter />,
      link: "https://twitter.com",
    },

    {
      id: 4,
      icon: <FaLinkedinIn />,
      link: "https://linkedin.com",
    },
  ];

  const quickLinks = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },

    {
      id: 2,
      name: "Properties",
      path: "/properties",
    },

    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },

    {
      id: 4,
      name: "About",
      path: "/about",
    },
  ];

  return (
    <footer className="relative text-white bg-black border-t border-[#F9F295]/20">

      {/* Top Section */}
      <div className="grid gap-12 px-6 py-20 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-4">

        {/* Company Info */}
        <div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-widest text-[#F9F295]">
            AXON
          </h1>

          <p className="leading-8 text-gray-400">
            Discover premium luxury homes, apartments, villas, and dream
            properties with modern living experience across India.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">

            {socialLinks.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 transition duration-300 bg-gray-900 rounded-full hover:bg-[#F9F295] hover:text-black"
              >
                {item.icon}
              </a>
            ))}

          </div>

        </div>

        {/* Quick Links */}
        <div>

          <h2 className="mb-6 text-2xl font-bold text-[#F9F295]">
            Quick Links
          </h2>

          <div className="flex flex-col gap-4">

            {quickLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="text-gray-400 transition duration-300 hover:text-[#F9F295] hover:translate-x-2"
              >
                {link.name}
              </Link>
            ))}

          </div>

        </div>

        {/* Contact Info */}
        <div>

          <h2 className="mb-6 text-2xl font-bold text-[#F9F295]">
            Contact Info
          </h2>

          <div className="space-y-5">

            <div className="flex items-start gap-4">

              <div className="mt-1 text-[#F9F295]">
                <FaMapMarkerAlt />
              </div>

              <p className="text-gray-400">
                Mumbai, Maharashtra, India
              </p>

            </div>

            <div className="flex items-center gap-4">

              <div className="text-[#F9F295]">
                <FaPhoneAlt />
              </div>

              <a
                href="tel:+919999999999"
                className="text-gray-400 hover:text-[#F9F295]"
              >
                +91 9999999999
              </a>

            </div>

            <div className="flex items-center gap-4">

              <div className="text-[#F9F295]">
                <FaEnvelope />
              </div>

              <a
                href="mailto:support@axonrealestate.com"
                className="text-gray-400 hover:text-[#F9F295]"
              >
                support@axonrealestate.com
              </a>

            </div>

          </div>

        </div>

        {/* Newsletter */}
        <div>

          <h2 className="mb-6 text-2xl font-bold text-[#F9F295]">
            Newsletter
          </h2>

          <p className="mb-6 leading-7 text-gray-400">
            Subscribe to get latest luxury property updates and offers.
          </p>

          <div className="flex flex-col gap-4">

            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-4 text-white border outline-none bg-gray-900 border-[#F9F295]/20 rounded-xl placeholder:text-gray-500"
            />

            <Link
              to="/contact"
              className="py-4 font-semibold text-center text-black transition duration-300 bg-[#F9F295] rounded-xl hover:bg-[#f5ec7a] hover:scale-105"
            >
              Subscribe Now
            </Link>

          </div>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#F9F295]/10">

        <div className="flex flex-col items-center justify-between gap-6 px-6 py-6 mx-auto text-center max-w-7xl md:flex-row">

          <p className="text-gray-400">
            © 2026 AXON Real Estate. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-gray-400">

            <Link
              to="/privacy-policy"
              className="transition duration-300 hover:text-[#F9F295]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition duration-300 hover:text-[#F9F295]"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

      {/* Scroll To Top */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed z-50 flex items-center justify-center text-black transition duration-300 rounded-full shadow-2xl w-14 h-14 bottom-6 right-6 bg-[#F9F295] hover:scale-110 hover:bg-[#f5ec7a]"
      >
        <FaArrowUp />
      </button>

    </footer>
  );
};

export default Footer;