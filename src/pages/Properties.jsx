import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/bg.jpeg";
import Card1 from "../assets/card1.jpeg";
import Card2 from "../assets/card2.jpeg";
import Card3 from "../assets/card3.jpeg";
import Card4 from "../assets/card4.jpeg";
import Card5 from "../assets/card5.jpeg";
import Card6 from "../assets/card6.jpeg";
import RoyalVilla from "../assets/royalvilla.jpeg";
import Hero from "../assets/hero.jpeg";
import  { FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaSearch,
  FaHeart,
} from "react-icons/fa";
const propertiesData = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Delhi",
    price: "₹2.5 Cr",
    beds: 4,
    baths: 3,
    area: "4500 Sq.ft",
    type: "Villa",
    image:bgImage,
  },

  {
    id: 2,
    title: "Modern Apartment",
    location: "Mumbai",
    price: "₹1.2 Cr",
    beds: 3,
    baths: 2,
    area: "2200 Sq.ft",
    type: "Apartment",
    image:Card1,
  },

  {
    id: 3,
    title: "Beach House",
    location: "Goa",
    price: "₹3.8 Cr",
    beds: 5,
    baths: 4,
    area: "5200 Sq.ft",
    type: "Beach House",
    image:Card2,
  },

  {
    id: 4,
    title: "Penthouse",
    location: "Bangalore",
    price: "₹4.5 Cr",
    beds: 6,
    baths: 5,
    area: "6200 Sq.ft",
    type: "Penthouse",
    image:Card3,
  },

  {
    id: 5,
    title: "Mountain Cottage",
    location: "Manali",
    price: "₹1.8 Cr",
    beds: 3,
    baths: 2,
    area: "2800 Sq.ft",
    type: "Cottage",
    image:Card4,
  },

  {
    id: 6,
    title: "Luxury Farmhouse",
    location: "Punjab",
    price: "₹5.2 Cr",
    beds: 7,
    baths: 5,
    area: "8500 Sq.ft",
    type: "Farmhouse",
    image:Card5,
  },

  {
    id: 7,
    title: "City Studio",
    location: "Pune",
    price: "₹75 Lakh",
    beds: 2,
    baths: 1,
    area: "1200 Sq.ft",
    type: "Studio",
    image:Card6,
  },

  {
    id: 8,
    title: "Royal Mansion",
    location: "Jaipur",
    price: "₹9 Cr",
    beds: 10,
    baths: 8,
    area: "15000 Sq.ft",
    type: "Mansion",
    image:RoyalVilla,
  },
];

const Properties = () => {
  const [search, setSearch] = useState("");

  const filteredProperties = propertiesData.filter((property) =>
    property.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen text-white bg-black">

        {/* Hero Section */}
        <div className="relative h-[70vh] flex items-center justify-center text-center px-6">

          <img
            src={Hero}
            alt="hero"
            className="absolute inset-0 object-cover w-full h-full opacity-40"
          />

          <div className="relative z-10">
            <h1 className="mb-6 text-5xl font-bold md:text-7xl text-gold">
              Find Your Dream Property
            </h1>

            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Explore premium villas, apartments, penthouses, beach houses,
              farmhouses, and luxury homes across India with modern amenities.
            </p>

            <button className="px-8 py-4 mt-8 font-semibold text-black transition duration-300 bg-gold rounded-xl hover:scale-105">
              Explore Now
            </button>
          </div>
        </div>

        {/* Search Section */}
        <div className="relative z-20 max-w-6xl px-6 mx-auto -mt-12">

          <div className="p-6 border shadow-2xl bg-grayDark border-gold/20 rounded-2xl">

            <div className="flex items-center overflow-hidden border rounded-xl border-gold/20">

              <input
                type="text"
                placeholder="Search luxury properties..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-5 text-white bg-black outline-none"
              />

              <button className="px-8 py-5 text-black bg-gold">
                <FaSearch />
              </button>

            </div>

          </div>
        </div>

        {/* Property Section */}
        <div className="px-6 py-20 mx-auto max-w-7xl">

          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">

            <div>
              <h2 className="mb-2 text-4xl font-bold text-gold">
                Featured Properties
              </h2>

              <p className="text-gray-400">
                Handpicked luxury properties for premium living experience.
              </p>
            </div>

            <button className="px-6 py-3 transition border rounded-lg border-gold text-gold hover:bg-gold hover:text-black">
              View All
            </button>

          </div>

          {/* Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="overflow-hidden transition duration-300 border shadow-xl bg-grayDark rounded-2xl border-gold/10 hover:border-gold hover:-translate-y-2"
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={property.image}
                    alt={property.title}
                    className="object-cover w-full h-64 transition duration-500 hover:scale-110"
                  />

                  <button className="absolute p-3 text-red-500 bg-white rounded-full top-4 right-4">
                    <FaHeart />
                  </button>

                  <span className="absolute px-4 py-1 text-sm font-semibold text-black rounded-full bottom-4 left-4 bg-gold">
                    {property.type}
                  </span>

                </div>

                {/* Content */}
                <div className="p-5">

                  <h3 className="mb-2 text-2xl font-bold text-gold">
                    {property.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-4 text-gray-400">
                    <FaMapMarkerAlt />
                    <span>{property.location}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-gray-300">

                    <div className="flex items-center gap-2">
                      <FaBed />
                      <span>{property.beds} Beds</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaBath />
                      <span>{property.baths} Baths</span>
                    </div>

                  </div>

                  <div className="mb-5">
                    <p className="text-gray-400">
                      Area: {property.area}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">

                    <h4 className="text-2xl font-bold text-gold">
                      {property.price}
                    </h4>

                    <button className="px-5 py-2 font-semibold text-black transition rounded-lg bg-gold hover:bg-yellow-400">
                      Details
                    </button>

                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProperties.length === 0 && (
            <div className="mt-20 text-center">

              <h2 className="mb-4 text-4xl font-bold text-gold">
                No Property Found
              </h2>

              <p className="text-gray-400">
                Try another keyword for better results.
              </p>

            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="px-6 py-20 bg-grayDark">

          <div className="grid max-w-6xl gap-8 mx-auto text-center md:grid-cols-4">

            <div>
              <h2 className="mb-3 text-5xl font-bold text-gold">
                500+
              </h2>
              <p className="text-gray-400">Luxury Properties</p>
            </div>

            <div>
              <h2 className="mb-3 text-5xl font-bold text-gold">
                1200+
              </h2>
              <p className="text-gray-400">Happy Clients</p>
            </div>

            <div>
              <h2 className="mb-3 text-5xl font-bold text-gold">
                50+
              </h2>
              <p className="text-gray-400">Cities Covered</p>
            </div>

            <div>
              <h2 className="mb-3 text-5xl font-bold text-gold">
                10+
              </h2>
              <p className="text-gray-400">Years Experience</p>
            </div>

          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default Properties;