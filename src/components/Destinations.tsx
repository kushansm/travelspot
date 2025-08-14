import React from "react";
import { destinations } from "../data/destinations";

const Destinations: React.FC = () => {
  return (
    <section className="w-full py-10 bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <h2 className="text-center text-3xl font-bold text-white mb-6">
          Popular Destinations
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-gray-900 rounded-lg shadow-md overflow-hidden flex flex-col border border-gray-800"
            >
              {/* Image */}
              <div className="w-auto h-120 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {dest.name}
                </h3>
                <p className="text-gray-300 text-sm flex-1 overflow-hidden text-ellipsis line-clamp-3">
                  {dest.description}
                </p>
                <button className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
