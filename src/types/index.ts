export  interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Package {
  description: string;
  id: number;
  name: string;
  image: string;
  price: number;
  duration: string;
}

export type GalleryItem = {
  id: number;
  title: string;
  image: string;

};