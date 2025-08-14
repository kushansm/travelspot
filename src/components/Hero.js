import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const images = [
    "src/assets/ninearch.jpg",
    "src/assets/kandy.jpg",
    "src/assets/beach.jpg",
    "src/assets/sigiriya.jpg",
];
export const Hero = () => {
    return (_jsx("section", { id: "hero", className: "w-full h-screen overflow-hidden bg-black", children: _jsx(Swiper, { modules: [Autoplay, Pagination, EffectFade], effect: "fade", fadeEffect: { crossFade: true }, slidesPerView: 1, autoplay: { delay: 5000, disableOnInteraction: false }, pagination: { clickable: true }, loop: true, speed: 1500, className: "h-full", children: images.map((src, index) => (_jsx(SwiperSlide, { children: _jsxs("div", { className: "relative w-full h-screen", children: [_jsx("img", { src: src, alt: `Slide ${index + 1}`, className: "w-full h-full object-cover" }), _jsxs("div", { className: "absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center", children: [_jsx("h1", { className: "text-white text-4xl md:text-6xl font-bold", children: "Visit Sri Lanka" }), _jsx("a", { href: "#destinations", className: "mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition-colors", children: "Explore Now" })] })] }) }, index))) }) }));
};
