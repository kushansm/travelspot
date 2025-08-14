import React from "react";
import { galleryItems } from "../data/galleryitem.ts";

export const Gallery: React.FC = () => {
  const shuffledItems = [...galleryItems].sort(() => Math.random() - 0.5);

  return (
    <div className="w-auto h-fit bg-black px-4 py-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center animate-fade-in">
        What You Can Enjoy Here
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-2">
        {shuffledItems.map((item, index) => (
          <div
            key={item.id}
            className={`relative group ${
              index % 2 === 0 ? "row-span-2" : "row-span-1"
            } animate-fade-in-up`}
            style={{ animationDelay: `${index * 100}ms` }} // stagger effect
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
            {/* Title overlay */}
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
              <span className="hidden md:inline bg-black bg-opacity-80 text-white text-lg font-bold px-5 py-2 rounded border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.title}
              </span>
              <span className="inline md:hidden bg-black bg-opacity-80 text-white text-lg font-bold px-5 py-2 rounded border-2 border-white">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
