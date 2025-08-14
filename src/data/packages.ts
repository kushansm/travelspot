import BeachImg from "../assets/packages/beach.jpg";
import CulturalImg from "../assets/packages/cultural.jpg";
import AdventureImg from "../assets/packages/adventure.jpg";
import LuxuryImg from "../assets/packages/luxury.jpg";

import type { Package } from "../types/index.ts";

export const packages: Package[] = [
  {
    id: 1,
    name: "Beach Paradise",
    image: BeachImg,
    price: 499,
    duration: "5 days / 4 nights",
  },
  {
    id: 2,
    name: "Cultural Explorer",
    image: CulturalImg,
    price: 599,
    duration: "7 days / 6 nights",
  },
  {
    id: 3,
    name: "Adventure Trek",
    image: AdventureImg,
    price: 699,
    duration: "6 days / 5 nights",
  },
  {
    id: 4,
    name: "Luxury Relaxation",
    image: LuxuryImg,
    price: 999,
    duration: "5 days / 4 nights",
  },
];
