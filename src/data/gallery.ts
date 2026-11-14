import type { GalleryItem } from "@/types";

/** Photos live in /public/images. Edit captions to describe each moment. */
export const gallery: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/moment-1.jpg",
    alt: "Rahul Saha at a wellness event with a woman in a blue saree, seated in a large hall",
    caption: "At a wellness event",
  },
  {
    id: "g2",
    src: "/images/moment-2.jpg",
    alt: "Rahul Saha standing with open arms in front of a mountain valley",
    caption: "Taking a moment to breathe",
  },
  {
    id: "g3",
    src: "/images/moment-3.jpg",
    alt: "Three people smiling in a wellness centre, one holding a bouquet",
    caption: "Celebrating with the team",
  },
];
