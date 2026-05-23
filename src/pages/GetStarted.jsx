import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
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
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      console.log(formData);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Your request has been submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyType: "",
        city: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
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

            <h1 className="mb-6 text-5xl font-bold md:text-7xl text-[#F9F295]">
              Start Your Luxury Journey
            </h1>

            <p className="text-lg text-gray-300 md:text-xl">
              Connect with premium real estate experts and discover luxury homes tailored for you.
            </p>

             <Link
              to="/properties"
              className="inline-block px-8 py-4 mt-8 font-semibold text-black transition duration-300 bg-[#F9F295] rounded-xl hover:scale-105 hover:bg-[#f5ec7a]">
              Explore More
            </Link>

          </div>

        </div>

        {/* Main Section */}
        <div className="grid gap-12 px-6 py-20 mx-auto max-w-7xl lg:grid-cols-2">

          {/* Left Side */}
          <div>

            <h2 className="mb-6 text-4xl font-bold text-[#F9F295]">
              Why Choose Us?
            </h2>

            <p className="mb-10 text-lg text-gray-400">
              We provide luxury real estate solutions with trusted experts and premium properties.
            </p>

            <div className="space-y-6">

              {[
                {
                  title: "Trusted Property Experts",
                  desc: "Professional guidance from experienced consultants.",
                },
                {
                  title: "Premium Locations",
                  desc: "Top cities and investment zones across India.",
                },
                {
                  title: "Modern Luxury Living",
                  desc: "Smart homes with world-class amenities.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 border bg-gray-900 rounded-2xl border-[#F9F295]/10"
                >
                  <div className="p-3 text-black rounded-full bg-[#F9F295]">
                    <FaCheckCircle />
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-[#F9F295]">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* Right Side Form */}
          <div className="p-8 border shadow-2xl bg-gray-900 rounded-3xl border-[#F9F295]/10">

            <h2 className="mb-3 text-4xl font-bold text-[#F9F295]">
              Get Started Today
            </h2>

            <p className="mb-8 text-gray-400">
              Fill in your details and we will contact you soon.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <Input icon={<FaUser />} name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" />

              {/* Email */}
              <Input icon={<FaEnvelope />} name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" type="email" />

              {/* Phone */}
              <Input icon={<FaPhoneAlt />} name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" type="tel" />

              {/* Property Type */}
              <div className="flex items-center overflow-hidden border rounded-xl border-[#F9F295]/20">
                <span className="px-4 text-[#F9F295]"><FaHome /></span>
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

              {/* City */}
              <Input icon={<FaMapMarkerAlt />} name="city" value={formData.city} onChange={handleChange} placeholder="Preferred City" />

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center w-full gap-3 py-4 font-semibold text-black transition rounded-xl bg-[#F9F295] hover:bg-[#f5ec7a] disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Request"}
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

/* Reusable Input Component */
const Input = ({ icon, ...props }) => (
  <div className="flex items-center overflow-hidden border rounded-xl border-[#F9F295]/20">
    <span className="px-4 text-[#F9F295]">{icon}</span>
    <input
      {...props}
      className="w-full p-4 text-white bg-black outline-none"
      required
    />
  </div>
);

export default GetStarted;