import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getstrt from "../assets/getstrt.jpeg";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Your request has been submitted successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen text-white bg-black">

        {/* Hero Section */}
        <div className="relative flex items-center justify-center h-[70vh] px-6 text-center overflow-hidden">

          <div className="absolute inset-0">
            <img
              src={getstrt}
              alt="Luxury Home"
              className="object-cover w-full h-full"
            />

            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="relative z-10 max-w-4xl">

            <h1 className="mb-6 text-5xl font-bold md:text-7xl text-gold">
              Start Your Luxury Journey
            </h1>

            <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
              Connect with premium real estate experts and discover luxury
              villas, apartments, penthouses, and dream homes tailored to your
              lifestyle.
            </p>

            <button className="px-8 py-4 mt-8 font-semibold text-black transition duration-300 rounded-xl bg-gold hover:scale-105">
              Explore Properties
            </button>

          </div>
        </div>

        {/* Main Section */}
        <div className="grid gap-12 px-6 py-20 mx-auto max-w-7xl lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <h2 className="mb-6 text-4xl font-bold text-gold">
              Why Choose Axon Real Estate?
            </h2>

            <p className="mb-10 text-lg leading-relaxed text-gray-400">
              We provide premium real estate solutions with trusted agents,
              luxury properties, modern architecture, and personalized
              consultation services across India.
            </p>

            <div className="space-y-6">

              <div className="flex items-start gap-4 p-5 border bg-grayDark rounded-2xl border-gold/10">

                <div className="p-3 text-black rounded-full bg-gold">
                  <FaCheckCircle />
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gold">
                    Trusted Property Experts
                  </h3>

                  <p className="text-gray-400">
                    Professional guidance from experienced luxury property
                    consultants.
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4 p-5 border bg-grayDark rounded-2xl border-gold/10">

                <div className="p-3 text-black rounded-full bg-gold">
                  <FaCheckCircle />
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gold">
                    Premium Locations
                  </h3>

                  <p className="text-gray-400">
                    Discover luxury homes in India’s top residential cities and
                    prime investment zones.
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4 p-5 border bg-grayDark rounded-2xl border-gold/10">

                <div className="p-3 text-black rounded-full bg-gold">
                  <FaCheckCircle />
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gold">
                    Modern Luxury Living
                  </h3>

                  <p className="text-gray-400">
                    Explore world-class amenities, smart homes, and premium
                    architecture.
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Form Section */}
          <div className="p-8 border shadow-2xl bg-grayDark rounded-3xl border-gold/10">

            <h2 className="mb-3 text-4xl font-bold text-gold">
              Get Started Today
            </h2>

            <p className="mb-8 text-gray-400">
              Fill in your details and our team will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Full Name
                </label>

                <div className="flex items-center overflow-hidden border rounded-xl border-gold/20">

                  <span className="px-4 text-gold">
                    <FaUser />
                  </span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 text-white bg-black outline-none"
                    required
                  />

                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Email Address
                </label>

                <div className="flex items-center overflow-hidden border rounded-xl border-gold/20">

                  <span className="px-4 text-gold">
                    <FaEnvelope />
                  </span>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 text-white bg-black outline-none"
                    required
                  />

                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Phone Number
                </label>

                <div className="flex items-center overflow-hidden border rounded-xl border-gold/20">

                  <span className="px-4 text-gold">
                    <FaPhoneAlt />
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 text-white bg-black outline-none"
                    required
                  />

                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Property Type
                </label>

                <div className="flex items-center overflow-hidden border rounded-xl border-gold/20">

                  <span className="px-4 text-gold">
                    <FaHome />
                  </span>

                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full p-4 text-white bg-black outline-none"
                    required
                  >
                    <option value="">Select Property Type</option>
                    <option value="Villa">Villa</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Farmhouse">Farmhouse</option>
                  </select>

                </div>
              </div>

              {/* City */}
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Preferred City
                </label>

                <div className="flex items-center overflow-hidden border rounded-xl border-gold/20">

                  <span className="px-4 text-gold">
                    <FaMapMarkerAlt />
                  </span>

                  <input
                    type="text"
                    name="city"
                    placeholder="Enter preferred city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-4 text-white bg-black outline-none"
                    required
                  />

                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="flex items-center justify-center w-full gap-3 py-4 font-semibold text-black transition duration-300 rounded-xl bg-gold hover:bg-yellow-400 hover:scale-[1.02]"
              >
                Submit Request
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
        </div>
      <Footer />
    </>
  );
};

export default GetStarted;