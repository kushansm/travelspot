import React from 'react'

interface Destination {
    id: number;
    name: string;
    description: string;
    image: string;
}

const destinations: Destination [] = [
{
    id: 1,
    name: "Ella",
    description: "A small town with scenic views, waterfalls, and hiking trails.",
    image: "src/assets/cards/ella.jpg"
  },
  {
    id: 2,
    name: "Galle",
    description: "A historic coastal city with a charming fort and beaches.",
    image: "src/assets/cards/galle.jpg"
  },
  {
    id: 3,
    name: "Kandy",
    description: "Famous for the Temple of the Tooth and lush greenery.",
    image: "src/assets/cards/kandy.jpg"
  },
  {
    id: 4,
    name: "Nuwara Eliya",
    description: "Tea plantations, cool climate, and colonial architecture.",
    image: "src/assets/cards/nuwaraeliya.jpg"
  },
  {
    id: 5,
    name: "Sigiriya",
    description: "Ancient rock fortress with panoramic views.",
    image: "src/assets/cards/sigiriya.jpg"
  },
  {
    id: 6,
    name: "Rathnapura",
    description:
    "Known as the “City of Gems,” Rathnapura is famed for its gem mines, lush green landscapes, tea and rubber plantations, and breathtaking waterfalls.",
    image: "src/assets/cards/rathnapura.jpg"
    }
];

export const Destinations = () => {
  return (
    <section className="w-full  py-10 bg-gray-50">
      <div className="w-full h-auto px-4">
        <h2 className="texts-center text-3xl font-bold text-gray-800 mb-6">
          Popular Destinations
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-120 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2">{dest.name}</h3>
                <p className="text-gray-600 text-sm flex-1 overflow-hidden text-ellipsis line-clamp-3">
                  {dest.description}
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                                Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations;
