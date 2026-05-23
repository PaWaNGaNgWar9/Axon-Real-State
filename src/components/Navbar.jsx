import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaHome,
  FaBuilding,
  FaPhoneAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      id: 1,
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },

    {
      id: 2,
      name: "Properties",
      path: "/properties",
      icon: <FaBuilding />,
    },

    {
      id: 3,
      name: "Contact",
      path: "/contact",
      icon: <FaPhoneAlt />,
    },
    {
      id: 4,
      name: "About",
      path: "/about",
      icon: <FaBuilding />,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b shadow-lg bg-black/95 backdrop-blur-lg border-[#F9F295]/20">

      <div className="flex items-center justify-between px-6 py-5 mx-auto max-w-7xl">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-4xl font-extrabold tracking-wider transition duration-300 text-[#F9F295] hover:scale-105">
            AXON
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="items-center hidden gap-8 md:flex">

          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-2 text-lg font-medium transition duration-300 hover:text-[#F9F295] ${
                  isActive
                    ? "text-[#F9F295]"
                    : "text-white"
                }`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}

          {/* CTA Button */}
          <button className="px-6 py-3 font-semibold text-black transition duration-300 rounded-xl bg-[#F9F295] hover:scale-105 hover:bg-[#f5ec7a]">
            <Link to="/get-started">Get Started</Link>
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-3xl text-[#F9F295] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black border-t border-[#F9F295]/20 overflow-hidden transition-all duration-500 ${
          menuOpen
            ? "max-h-[500px] py-6"
            : "max-h-0"
        }`}
      >

        <div className="flex flex-col gap-6 px-6">

          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 text-lg font-medium transition duration-300 hover:text-[#F9F295] ${
                  isActive
                    ? "text-[#F9F295]"
                    : "text-white"
                }`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Button */}
          <button className="w-full py-3 mt-4 font-semibold text-black transition duration-300 rounded-xl bg-[#F9F295] hover:bg-[#f5ec7a]">
            <Link to="/get-started">Get Started</Link>
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;