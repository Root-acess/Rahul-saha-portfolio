import { useCallback, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { videos } from "@/data/videos";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import type { VideoItem } from "@/types";
import { getEmbedUrl, getThumbnail } from "@/utils/video";

function VideoModal({ video, onClose }: { video: VideoItem; onClose: () => void }) {
  useEscapeKey(true, onClose);
  const embed = getEmbedUrl(video);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={video.title} onClick={onClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close video">
          ×
        </button>
        <div className="video-frame">
          {video.source === "file" ? (
            <video src={video.url} controls autoPlay />
          ) : embed ? (
            <iframe
              src={embed}
              title={video.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <p className="video-error">This video link could not be loaded.</p>
          )}
        </div>
        <h3>{video.title}</h3>
      </div>
    </div>
  );
}

export default function Videos() {
  const [active, setActive] = useState<VideoItem | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section id="videos" className="section section-tint">
      <div className="container">
        <SectionHeading
          eyebrow="Videos"
          title="Watch and get to know me"
          subtitle="Tips, routines and recipes to help you get started."
        />
        <div className="card-grid">
          {videos.map((video, i) => {
            const thumb = getThumbnail(video);
            return (
              <Reveal key={video.id} delay={(i % 3) * 100}>
                <button type="button" className="card video-card" onClick={() => setActive(video)}>
                  <div
                    className="video-thumb"
                    style={thumb ? { backgroundImage: `url(${thumb})` } : undefined}
                  >
                    <span className="play" aria-hidden="true">▶</span>
                  </div>
                  <div className="video-info">
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
      {active && <VideoModal video={active} onClose={close} />}
    </section>
  );
}
