import React, { useState } from "react";
import { packages } from "../data/packages.ts";

const Packages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<typeof packages[0] | null>(null);

  const openModal = (pkg: typeof packages[0]) => {
    setSelectedPackage(pkg);
  };

  const closeModal = () => {
    setSelectedPackage(null);
  };

  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center animate-fade-in">
          Travel Packages
        </h2>
        <p className="text-center text-gray-300 mb-10 animate-fade-in">
          Choose from our exclusive travel packages tailored for you.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`bg-gray-900 border border-gray-800 rounded-lg p-4 md:p-6 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between transform animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
                <div className="w-full h-48 md:h-56 lg:h-60 overflow-hidden rounded-lg">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
                <button
                  onClick={() => openModal(pkg)}
                  className="w-full bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPackage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 rounded-lg p-6 max-w-lg w-full relative animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white text-xl font-bold hover:text-yellow-400"
            >
              &times;
            </button>
            <img
              src={selectedPackage.image}
              alt={selectedPackage.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedPackage.name}
            </h3>
            <p className="text-gray-300 mb-4">{selectedPackage.duration}</p>
            <p className="text-gray-200 mb-4">
              Price: <span className="text-yellow-400 font-bold">${selectedPackage.price}</span>
            </p>
            <p className="text-gray-300">
              {selectedPackage.description || "Experience an amazing travel adventure!"}
            </p>
            <button
              onClick={closeModal}
              className="mt-6 w-full bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Packages;
