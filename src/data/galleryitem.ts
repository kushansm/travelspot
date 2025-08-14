import type { GalleryItem } from "../types/index.ts";

// Import all images
import SurfingImg from "../assets/gallery/surfing.jpg";
import CulturalImg from "../assets/gallery/cultural.jpg";
import LuxuryImg from "../assets/gallery/luxury.jpg";
import FoodImg from "../assets/gallery/food.jpg";
import BeachesImg from "../assets/gallery/beaches.jpg";
import AdventureImg from "../assets/gallery/adventure.jpg";
import NatureImg from "../assets/gallery/nature.jpg";
import TraditionalImg from "../assets/gallery/traditional.jpg";
import MountainsImg from "../assets/gallery/mountains.jpg";
import LocalLifeImg from "../assets/gallery/locallife.jpg";

export const galleryItems: GalleryItem[] = [
  { id: 1, image: SurfingImg, title: "Surfing" },
  { id: 2, image: CulturalImg, title: "Cultural" },
  { id: 3, image: LuxuryImg, title: "Luxury" },
  { id: 4, image: FoodImg, title: "Food" },
  { id: 5, image: BeachesImg, title: "Beach" },
  { id: 6, image: AdventureImg, title: "Adventure" },
  { id: 7, image: NatureImg, title: "Nature" },
  { id: 8, image: TraditionalImg, title: "Traditional" },
  { id: 9, image: MountainsImg, title: "Mountain" },
  { id: 10, image: LocalLifeImg, title: "Local Life" },
];
