import React from "react";

interface Package {
  id: number;
  image: string;
  name: string;
  price: number; 
  duration: string; 
}

const packages: Package[] = [
  { id: 1,
    name: "Beach Paradise",
    image: "src/assets/packages/beach.jpg",
    price: 499, 
    duration: "5 days / 4 nights" },

  { id: 2, 
    name: "Cultural Explorer",
    image: "src/assets/packages/cultural.jpg", 
    price: 599, 
    duration: "7 days / 6 nights" },

  { id: 3, 
    name: "Adventure Trek",
    image: "src/assets/packages/adventure.jpg",
    price: 699, 
    duration: "6 days / 5 nights" },

  { id: 4, 
    name: "Luxury Relaxation",
    image: "src/assets/packages/luxury.jpg",
    price: 999, 
    duration: "5 days / 4 nights" },
];

const Packages: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="w-full  px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Travel Packages
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Choose from our exclusive travel packages tailored for you.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
              <div className="w-full h-120 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
              </div>
                <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                <p className="text-gray-700 mb-4">{pkg.duration}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600 mb-4">${pkg.price}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors duration-300">
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
