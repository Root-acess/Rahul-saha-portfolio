import type { VideoItem } from "@/types";

export function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/,
  );
  return match ? match[1] : null;
}

export function getEmbedUrl(video: VideoItem): string | null {
  if (video.source === "youtube") {
    const id = getYouTubeId(video.url);
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : null;
  }
  if (video.source === "facebook") {
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
      video.url,
    )}&show_text=false&autoplay=true`;
  }
  return null;
}

export function getThumbnail(video: VideoItem): string | null {
  if (video.thumbnail) return video.thumbnail;
  if (video.source === "youtube") {
    const id = getYouTubeId(video.url);
    return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
  }
  return null;
}

export function buildWhatsAppLink(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
