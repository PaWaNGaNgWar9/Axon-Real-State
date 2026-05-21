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

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaFacebookF />,
      link: "#",
    },

    {
      id: 2,
      icon: <FaInstagram />,
      link: "#",
    },

    {
      id: 3,
      icon: <FaTwitter />,
      link: "#",
    },

    {
      id: 4,
      icon: <FaLinkedinIn />,
      link: "#",
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
    <footer className="relative text-white bg-black border-t border-gold/20">

      {/* Top Section */}
      <div className="grid gap-12 px-6 py-20 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-4">

        {/* Company Info */}
        <div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-widest text-gold">
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
                className="flex items-center justify-center w-12 h-12 transition duration-300 rounded-full bg-grayDark hover:bg-gold hover:text-black"
              >
                {item.icon}
              </a>
            ))}

          </div>

        </div>

        {/* Quick Links */}
        <div>

          <h2 className="mb-6 text-2xl font-bold text-gold">
            Quick Links
          </h2>

          <div className="flex flex-col gap-4">

            {quickLinks.map((link) => (
              <a
                key={link.id}
                href={link.path}
                className="text-gray-400 transition duration-300 hover:text-gold hover:translate-x-2"
              >
                {link.name}
              </a>
            ))}

          </div>

        </div>

        {/* Contact Info */}
        <div>

          <h2 className="mb-6 text-2xl font-bold text-gold">
            Contact Info
          </h2>

          <div className="space-y-5">

            <div className="flex items-start gap-4">

              <div className="mt-1 text-gold">
                <FaMapMarkerAlt />
              </div>

              <p className="text-gray-400">
                Mumbai, Maharashtra, India
              </p>

            </div>

            <div className="flex items-center gap-4">

              <div className="text-gold">
                <FaPhoneAlt />
              </div>

              <p className="text-gray-400">
                +91 999999999
              </p>

            </div>

            <div className="flex items-center gap-4">

              <div className="text-gold">
                <FaEnvelope />
              </div>

              <p className="text-gray-400">
                support@axonrealestate.com
              </p>

            </div>

          </div>

        </div>

        {/* Newsletter */}
        <div>

          <h2 className="mb-6 text-2xl font-bold text-gold">
            Newsletter
          </h2>

          <p className="mb-6 leading-7 text-gray-400">
            Subscribe to get latest luxury property updates and offers.
          </p>

          <div className="flex flex-col gap-4">

            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-4 text-white border outline-none bg-grayDark border-gold/20 rounded-xl placeholder:text-gray-500"
            />

            <button className="py-4 font-semibold text-black transition duration-300 bg-gold rounded-xl hover:bg-yellow-400 hover:scale-105">
              Subscribe Now
            </button>

          </div>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gold/10">

        <div className="flex flex-col items-center justify-between gap-6 px-6 py-6 mx-auto text-center max-w-7xl md:flex-row">

          <p className="text-gray-400">
            © 2026 AXON Real Estate. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-gray-400">

            <a
              href="#"
              className="transition duration-300 hover:text-gold"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition duration-300 hover:text-gold"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

      {/* Scroll To Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed z-50 flex items-center justify-center text-black transition duration-300 rounded-full shadow-2xl w-14 h-14 bottom-6 right-6 bg-gold hover:scale-110 hover:bg-yellow-400"
      >
        <FaArrowUp />
      </button>

    </footer>
  );
};

export default Footer;