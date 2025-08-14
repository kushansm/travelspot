import React, { useState } from "react";
import { destinations } from "../data/destinations.ts";

const Destinations = () => {
  const [selectedDest, setSelectedDest] = useState<string | null>(null);

  const handleLearnMore = (name: string) => {
    setSelectedDest(name);
  };

  return (
    <section className="w-full py-10 bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
          Popular Destinations
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <div
              key={dest.id}
              className={`bg-gray-900 rounded-lg shadow-md overflow-hidden flex flex-col border border-gray-800 transform transition-transform duration-500 hover:scale-105 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="w-auto h-120 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                  {dest.name}
                </h3>
                <p className="text-gray-300 text-sm md:text-base flex-1 overflow-hidden text-ellipsis line-clamp-3">
                  {dest.description} Explore scenic trails, local culture, and popular attractions.
                </p>
                <button
                  className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => handleLearnMore(dest.name)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Box */}
        {selectedDest && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-lg p-6 max-w-md w-full text-center animate-fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-4">{selectedDest}</h3>
              <p className="text-gray-300 mb-6">
                More details about {selectedDest}. Add tips, nearby attractions, and travel info here.
              </p>
              <button
                className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors duration-300"
                onClick={() => setSelectedDest(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Destinations;
