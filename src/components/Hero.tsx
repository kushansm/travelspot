import React from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import NineArch from "../assets/ninearch.jpg";
import Kandy from "../assets/kandy.jpg";
import Beach from "../assets/beach.jpg";
import Sigiriya from "../assets/sigiriya.jpg";

const images: string[] = [NineArch, Kandy, Beach, Sigiriya];

export const Hero = () => {
  return (
    <section id="hero" className="w-full h-screen overflow-hidden bg-black">
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
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
                <h1 className="text-white text-4xl md:text-6xl font-bold">
                  Visit Sri Lanka
                </h1>
                <a
                  href="#destinations"
                  className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition-colors"
                >
                  Explore Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
