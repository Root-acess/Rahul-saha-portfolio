export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface Value {
  icon: string;
  title: string;
  text: string;
}

export interface Testimonial {
  id: string;
  name: string;
  detail?: string;
  quote: string;
}

export type VideoSource = "youtube" | "facebook" | "file";

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  source: VideoSource;
  /** YouTube watch/share URL, Facebook video URL, or a path like /videos/intro.mp4 */
  url: string;
  thumbnail?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SiteConfig {
  coachName: string;
  title: string;
  badge: string;
  heroText: string;
  rotatingWords: string[];
  marquee: string[];
  about: string[];
  values: Value[];
  location: string;
  whatsappNumber: string;
  email: string;
  facebookUrl?: string;
  photoUrl?: string;
  stats: Stat[];
  disclaimer: string;
}
