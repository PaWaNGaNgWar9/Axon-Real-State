import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen px-6 py-16 text-white bg-black">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="mb-4 text-5xl font-bold md:text-6xl text-gold">
            Contact Us
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400">
            Have questions or want to work with us? 
            Fill out the form below and our team will get back to you soon.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid items-start max-w-6xl gap-10 mx-auto md:grid-cols-2">

          {/* Left Side */}
          <div className="p-8 border shadow-lg bg-grayDark border-gold/20 rounded-2xl">

            <h2 className="mb-8 text-3xl font-semibold text-gold">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="p-4 text-black rounded-full bg-gold">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-400">+1111111111</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 text-black rounded-full bg-gold">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-400">
                    xxxxxx@xxxxxx.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 text-black rounded-full bg-gold">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-400">
                    city,state, country
                  </p>
                </div>
              </div>

            </div>

            {/* Small Quote */}
            <div className="p-5 mt-10 bg-black border border-gold/20 rounded-xl">
              <p className="italic text-gray-400">
                "We believe every dream home begins with a conversation."
              </p>
            </div>

          </div>

          {/* Right Side Form */}
          <form
            onSubmit={handleSubmit}
            className="p-8 border shadow-lg bg-grayDark border-gold/20 rounded-2xl"
          >

            <h2 className="mb-8 text-3xl font-semibold text-gold">
              Send Message
            </h2>

            {/* Name */}
            <div className="mb-5">
              <label className="block mb-2 text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full p-4 transition duration-300 bg-black border border-gray-700 rounded-lg outline-none focus:border-gold"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block mb-2 text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full p-4 transition duration-300 bg-black border border-gray-700 rounded-lg outline-none focus:border-gold"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block mb-2 text-gray-300">
                Your Message
              </label>

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
                className="w-full p-4 transition duration-300 bg-black border border-gray-700 rounded-lg outline-none resize-none focus:border-gold"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="flex items-center justify-center w-full gap-2 py-4 font-semibold text-black transition duration-300 rounded-lg bg-gold hover:scale-105 hover:bg-yellow-400"
            >
              <FaPaperPlane />
              Send Message
            </button>

          </form>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;