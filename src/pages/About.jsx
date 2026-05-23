import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import aboutImage from "../assets/royalvilla.jpeg";

import {
  FaHome,
  FaUsers,
  FaAward,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen text-white bg-black">

        {/* Hero Section */}
        <section className="relative flex items-center justify-center h-[60vh] overflow-hidden text-center px-6">

          <img
            src={aboutImage}
            alt="Luxury Property"
            className="absolute inset-0 object-cover w-full h-full opacity-30"
          />

          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 max-w-4xl">

            <h1 className="mb-6 text-5xl font-bold md:text-7xl text-[#F9F295]">
              About AXON
            </h1>

            <p className="text-lg leading-8 text-gray-300 md:text-xl">
              We redefine luxury living by connecting people with premium
              properties, elegant homes, and world-class real estate
              experiences across India.
            </p>

          </div>

        </section>

        {/* About Content */}
        <section className="px-6 py-20">

          <div className="grid items-center gap-16 mx-auto max-w-7xl lg:grid-cols-2">

            {/* Left Side */}
            <div>

              <h2 className="mb-6 text-5xl font-bold text-[#F9F295]">
                Who We Are
              </h2>

              <p className="mb-6 text-lg leading-8 text-gray-400">
                AXON Real Estate is a trusted luxury property platform helping
                clients discover premium villas, apartments, penthouses,
                farmhouses, and dream homes in top cities across India.
              </p>

              <p className="mb-10 text-lg leading-8 text-gray-400">
                With years of experience in the real estate industry, we focus
                on providing modern living experiences, trusted consultation,
                transparent deals, and personalized support for every client.
              </p>

              <div className="space-y-5">

                <div className="flex items-center gap-4">
                  <div className="p-3 text-black rounded-full bg-[#F9F295]">
                    <FaCheckCircle />
                  </div>

                  <p className="text-lg text-gray-300">
                    Trusted Luxury Property Experts
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 text-black rounded-full bg-[#F9F295]">
                    <FaCheckCircle />
                  </div>

                  <p className="text-lg text-gray-300">
                    Premium Properties Across India
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 text-black rounded-full bg-[#F9F295]">
                    <FaCheckCircle />
                  </div>

                  <p className="text-lg text-gray-300">
                    Modern & Elegant Living Spaces
                  </p>
                </div>

              </div>

            </div>

            {/* Right Side */}
            <div className="overflow-hidden shadow-2xl rounded-3xl">

              <img
                src={aboutImage}
                alt="About AXON"
                className="object-cover w-full h-full transition duration-700 hover:scale-105"
              />

            </div>

          </div>

        </section>

        {/* Stats Section */}
        <section className="px-6 py-20 bg-gray-900">

          <div className="grid gap-10 mx-auto text-center max-w-7xl sm:grid-cols-2 lg:grid-cols-4">

            <div className="p-10 transition border bg-black rounded-2xl border-[#F9F295]/10 hover:border-[#F9F295]">

              <div className="flex justify-center mb-5 text-5xl text-[#F9F295]">
                <FaHome />
              </div>

              <h2 className="mb-3 text-4xl font-bold text-white">
                500+
              </h2>

              <p className="text-gray-400">
                Luxury Properties
              </p>

            </div>

            <div className="p-10 transition border bg-black rounded-2xl border-[#F9F295]/10 hover:border-[#F9F295]">

              <div className="flex justify-center mb-5 text-5xl text-[#F9F295]">
                <FaUsers />
              </div>

              <h2 className="mb-3 text-4xl font-bold text-white">
                1200+
              </h2>

              <p className="text-gray-400">
                Happy Clients
              </p>

            </div>

            <div className="p-10 transition border bg-black rounded-2xl border-[#F9F295]/10 hover:border-[#F9F295]">

              <div className="flex justify-center mb-5 text-5xl text-[#F9F295]">
                <FaBuilding />
              </div>

              <h2 className="mb-3 text-4xl font-bold text-white">
                50+
              </h2>

              <p className="text-gray-400">
                Cities Covered
              </p>

            </div>

            <div className="p-10 transition border bg-black rounded-2xl border-[#F9F295]/10 hover:border-[#F9F295]">

              <div className="flex justify-center mb-5 text-5xl text-[#F9F295]">
                <FaAward />
              </div>

              <h2 className="mb-3 text-4xl font-bold text-white">
                10+
              </h2>

              <p className="text-gray-400">
                Years Experience
              </p>

            </div>

          </div>

        </section>

        {/* Mission Section */}
        <section className="px-6 py-24 text-center">

          <div className="max-w-4xl mx-auto">

            <h2 className="mb-8 text-5xl font-bold text-[#F9F295]">
              Our Mission
            </h2>

            <p className="text-xl leading-9 text-gray-400">
              Our mission is to deliver exceptional real estate experiences by
              offering luxury properties, personalized consultation, and
              transparent services that help clients find homes matching their
              lifestyle, comfort, and future goals.
            </p>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
};

export default About;