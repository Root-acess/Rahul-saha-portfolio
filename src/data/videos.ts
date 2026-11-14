import type { VideoItem } from "@/types";

/**
 * Add real videos here. Three source types are supported:
 *  - "youtube":  paste any normal YouTube link
 *  - "facebook": paste the public Facebook video URL
 *  - "file":     put an mp4 in /public/videos and use "/videos/name.mp4"
 *
 * The entries below are placeholders; the YouTube ID is a generic sample.
 */
export const videos: VideoItem[] = [
  {
    id: "v1",
    title: "Welcome & my story",
    description: "A short introduction to who I am and how I can help.",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "v2",
    title: "Daily wellness routine",
    description: "A simple routine you can start with today.",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "v3",
    title: "Healthy recipe idea",
    description: "A quick, balanced recipe to try at home.",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];
