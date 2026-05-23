import { useParams, Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import first from "../assets/First.jpg";
import second from "../assets/Second.jpg";
import third from "../assets/Third.jpg";

import {
  FaBed,
  FaBath,
  FaMapMarkerAlt,
  FaRulerCombined,
  FaArrowLeft,
} from "react-icons/fa";

const properties = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Delhi",
    price: "₹2.5 Cr",
    image: first,
    beds: 4,
    baths: 3,
    area: "4500",
  },

  {
    id: 2,
    title: "Modern Apartment",
    location: "Mumbai",
    price: "₹1.2 Cr",
    image: second,
    beds: 3,
    baths: 2,
    area: "3200",
  },

  {
    id: 3,
    title: "Beach House",
    location: "Goa",
    price: "₹3.8 Cr",
    image: third,
    beds: 5,
    baths: 4,
    area: "6000",
  },

  {
    id: 4,
    title: "Royal Penthouse",
    location: "Bangalore",
    price: "₹5.5 Cr",
    image: third,
    beds: 6,
    baths: 5,
    area: "8000",
  },

  {
    id: 5,
    title: "Luxury Farmhouse",
    location: "Punjab",
    price: "₹4.2 Cr",
    image: first,
    beds: 5,
    baths: 4,
    area: "7000",
  },

  {
    id: 6,
    title: "Modern Cottage",
    location: "Manali",
    price: "₹1.8 Cr",
    image: second,
    beds: 3,
    baths: 2,
    area: "3500",
  },
];

const PropertyDetails = () => {

  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  // Property Not Found
  if (!property) {
    return (
      <>
        <Navbar />

        <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black">

          <h1 className="mb-6 text-5xl font-bold text-[#F9F295]">
            Property Not Found
          </h1>

          <Link
            to="/"
            className="px-8 py-4 font-semibold text-black rounded-xl bg-[#F9F295]"
          >
            Back To Home
          </Link>

        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen px-6 py-20 text-white bg-black">

        <div className="mx-auto max-w-7xl">

          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-6 py-3 mb-10 font-semibold text-black transition rounded-xl bg-[#F9F295] hover:bg-[#f5ec7a]"
          >
            <FaArrowLeft />
            Back
          </Link>

          {/* Image */}
          <div className="mb-10 overflow-hidden rounded-3xl">

            <img
              src={property.image}
              alt={property.title}
              className="object-cover w-full h-[500px]"
            />

          </div>

          {/* Content */}
          <div className="grid gap-14 lg:grid-cols-2">

            {/* Left */}
            <div>

              <h1 className="mb-6 text-6xl font-bold text-[#F9F295]">
                {property.title}
              </h1>

              <div className="flex items-center mb-8 text-xl text-gray-400">

                <FaMapMarkerAlt className="mr-3 text-[#F9F295]" />

                {property.location}

              </div>

              <p className="leading-9 text-gray-300">
                Experience luxury living with premium interiors,
                modern architecture, spacious rooms, elegant design,
                and world-class amenities for a comfortable lifestyle.
              </p>

            </div>

            {/* Right */}
            <div className="p-10 bg-gray-900 border rounded-3xl border-white/10">

              <h2 className="mb-8 text-5xl font-bold text-[#F9F295]">
                {property.price}
              </h2>

              <div className="grid grid-cols-3 gap-6 mb-10">

                {/* Beds */}
                <div className="p-6 text-center bg-black rounded-2xl">

                  <FaBed className="mx-auto mb-3 text-2xl text-[#F9F295]" />

                  <h3 className="text-2xl font-bold text-white">
                    {property.beds}
                  </h3>

                  <p className="text-gray-400">
                    Bedrooms
                  </p>

                </div>

                {/* Baths */}
                <div className="p-6 text-center bg-black rounded-2xl">

                  <FaBath className="mx-auto mb-3 text-2xl text-[#F9F295]" />

                  <h3 className="text-2xl font-bold text-white">
                    {property.baths}
                  </h3>

                  <p className="text-gray-400">
                    Bathrooms
                  </p>

                </div>

                {/* Area */}
                <div className="p-6 text-center bg-black rounded-2xl">

                  <FaRulerCombined className="mx-auto mb-3 text-2xl text-[#F9F295]" />

                  <h3 className="text-2xl font-bold text-white">
                    {property.area}
                  </h3>

                  <p className="text-gray-400">
                    Sq.ft
                  </p>

                </div>

              </div>

              {/* Button */}
              <Link
                to="/contact"
                className="block w-full py-5 font-bold text-center text-black transition rounded-2xl bg-[#F9F295] hover:bg-[#f5ec7a]"
              >
                Contact Agent
              </Link>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default PropertyDetails;