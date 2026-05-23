import { Link } from "react-router-dom";

import {
  FaBed,
  FaBath,
  FaMapMarkerAlt,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";

const PropertyCard = ({ property }) => {
  return (
    <div className="overflow-hidden transition duration-500 border shadow-2xl bg-gray-900 rounded-3xl border-[#F9F295]/10 hover:border-[#F9F295] hover:-translate-y-3 group">

      {/* Image Section */}
      <div className="relative overflow-hidden">

        <img
          src={property.image}
          alt={property.title}
          className="object-cover w-full transition duration-700 h-72 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 transition duration-500 bg-black/20 group-hover:bg-black/10"></div>

        {/* Property Type */}
        <span className="absolute px-4 py-2 text-sm font-semibold text-black rounded-full top-4 left-4 bg-[#F9F295]">
          {property.type || "Luxury"}
        </span>

        {/* Wishlist */}
        <button className="absolute p-3 text-red-500 transition duration-300 bg-white rounded-full shadow-lg top-4 right-4 hover:scale-110">
          <FaHeart />
        </button>

      </div>

      {/* Content */}
      <div className="p-6">

        {/* Price */}
        <div className="flex items-center justify-between mb-4">

          <h3 className="text-3xl font-bold text-[#F9F295]">
            {property.price}
          </h3>

          <span className="px-3 py-1 text-sm text-green-400 border border-green-400 rounded-full">
            For Sale
          </span>

        </div>

        {/* Title */}
        <h2 className="mb-3 text-3xl font-bold text-white transition duration-300 group-hover:text-[#F9F295]">
          {property.title}
        </h2>

        {/* Location */}
        <div className="flex items-center mb-6 text-gray-400">

          <FaMapMarkerAlt className="mr-2 text-[#F9F295]" />

          <p>{property.location}</p>

        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mb-8 text-center">

          {/* Beds */}
          <div className="p-4 transition bg-black rounded-2xl hover:bg-[#111]">

            <div className="flex justify-center mb-2 text-[#F9F295]">
              <FaBed />
            </div>

            <h4 className="text-lg font-bold text-white">
              {property.beds || 4}
            </h4>

            <p className="text-sm text-gray-400">
              Beds
            </p>

          </div>

          {/* Baths */}
          <div className="p-4 transition bg-black rounded-2xl hover:bg-[#111]">

            <div className="flex justify-center mb-2 text-[#F9F295]">
              <FaBath />
            </div>

            <h4 className="text-lg font-bold text-white">
              {property.baths || 3}
            </h4>

            <p className="text-sm text-gray-400">
              Baths
            </p>

          </div>

          {/* Area */}
          <div className="p-4 transition bg-black rounded-2xl hover:bg-[#111]">

            <h4 className="text-lg font-bold text-white">
              {property.area || "4500"}
            </h4>

            <p className="text-sm text-gray-400">
              Sq.ft
            </p>

          </div>

        </div>

        {/* Button */}
        <div className="flex gap-4">

          <Link
            to={`/property/${property.id}`}
            className="flex items-center justify-center w-full gap-2 py-4 font-semibold text-black transition duration-300 rounded-xl bg-[#F9F295] hover:scale-105 hover:bg-[#f5ec7a]"
          >
            View Details
            <FaArrowRight />
          </Link>

        </div>

      </div>

    </div>
  );
};

export default PropertyCard;