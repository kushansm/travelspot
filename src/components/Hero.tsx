import React from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const images: string[] = [
  "src/assets/ninearch.jpg",
  "src/assets/kandy.jpg",
  "src/assets/beach.jpg",
  "src/assets/sigiriya.jpg",
];

export const Hero = () => {
  return (
    <section id="hero" className="w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        speed={1500}
        className="h-full"
    >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h1 className="text-white text-4xl md:text-6xl font-bold">
                  Visit SriLanka
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
