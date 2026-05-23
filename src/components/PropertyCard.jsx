import {
  FaBed,
  FaBath,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

const PropertyCard = ({ property }) => {
  return (
    <div className="overflow-hidden transition duration-500 border shadow-2xl bg-grayDark rounded-3xl border-gold/10 hover:border-gold hover:-translate-y-3 group">

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
        <span className="absolute px-4 py-2 text-sm font-semibold text-black rounded-full top-4 left-4 bg-gold">
          {property.type || "Luxury"}
        </span>

        {/* Wishlist */}
        <button className="absolute p-3 text-red-500 transition duration-300 bg-white rounded-full top-4 right-4 hover:scale-110">
          <FaHeart />
        </button>

      </div>

      {/* Content */}
      <div className="p-6">

        {/* Price */}
        <div className="flex items-center justify-between mb-4">

          <h3 className="text-3xl font-bold text-gold">
            {property.price}
          </h3>

          <span className="text-sm text-gray-400">
            For Sale
          </span>

        </div>

        {/* Title */}
        <h2 className="mb-3 text-3xl font-bold text-white transition duration-300 group-hover:text-gold">
          {property.title}
        </h2>

        {/* Location */}
        <div className="flex items-center mb-6 text-gray-400">

          <FaMapMarkerAlt className="mr-2 text-gold" />

          <p>{property.location}</p>

        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mb-6 text-center">

          {/* Beds */}
          <div className="p-3 bg-black rounded-xl">

            <div className="flex justify-center mb-2 text-gold">
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
          <div className="p-3 bg-black rounded-xl">

            <div className="flex justify-center mb-2 text-gold">
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
          <div className="p-3 bg-black rounded-xl">

            <h4 className="text-lg font-bold text-white">
              {property.area || "4500"}
            </h4>

            <p className="text-sm text-gray-400">
              Sq.ft
            </p>

          </div>

        </div>

        {/* Button */}
        <button className="w-full py-4 font-semibold text-black transition duration-300 rounded-xl bg-gold hover:scale-105 hover:bg-yellow-400">
          View Details
        </button>

      </div>
    </div>
  );
};

export default PropertyCard;