import EllaImg from "../assets/cards/ella.jpg";
import GalleImg from "../assets/cards/galle.jpg";
import KandyImg from "../assets/cards/kandy.jpg";
import NuwaraEliyaImg from "../assets/cards/nuwaraeliya.jpg";
import SigiriyaImg from "../assets/cards/sigiriya.jpg";
import RathnapuraImg from "../assets/cards/rathnapura.jpg";

import type { Destination } from "../types/index.ts";

export const destinations: Destination[] = [


  {
    id: 1,
    name: "Ella",
    description: "A small town with scenic views, waterfalls, and hiking trails.",
    image: EllaImg,
  },
  {
    id: 2,
    name: "Galle",
    description: "A historic coastal city with a charming fort and beaches.",
    image: GalleImg,
  },
  {
    id: 3,
    name: "Kandy",
    description: "Famous for the Temple of the Tooth and lush greenery.",
    image: KandyImg,
  },
  {
    id: 4,
    name: "Nuwara Eliya",
    description: "Tea plantations, cool climate, and colonial architecture.",
    image: NuwaraEliyaImg,
  },
  {
    id: 5,
    name: "Sigiriya",
    description: "Ancient rock fortress with panoramic views.",
    image: SigiriyaImg,
  },
  {
    id: 6,
    name: "Rathnapura",
    description:
      "Known as the “City of Gems,” Rathnapura is famed for its gem mines, lush green landscapes, tea and rubber plantations, and breathtaking waterfalls.",
    image: RathnapuraImg,
  },
];
