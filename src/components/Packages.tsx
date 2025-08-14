import React from "react";
import { packages } from "../data/packages";

const Packages: React.FC = () => {
  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Travel Packages
        </h2>
        <p className="text-center text-gray-300 mb-10">
          Choose from our exclusive travel packages tailored for you.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4 md:p-6 shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="w-full h-48 md:h-56 lg:h-60 overflow-hidden rounded-lg">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white mt-4">
                  {pkg.name}
                </h3>
                <p className="text-gray-300 mb-4">{pkg.duration}</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">
                  ${pkg.price}
                </p>
                <button className="w-full bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
