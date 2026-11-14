import { useCallback, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { gallery } from "@/data/gallery";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import type { GalleryItem } from "@/types";

function Lightbox({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  useEscapeKey(true, onClose);
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={item.caption} onClick={onClose}>
      <div className="modal-body lightbox" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close photo">
          ×
        </button>
        <img src={item.src} alt={item.alt} />
        <h3>{item.caption}</h3>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [active, setActive] = useState<GalleryItem | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section id="moments" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Moments"
          title="Life in our wellness community"
          subtitle="A few snapshots from the journey."
        />
        <div className="gallery">
          {gallery.map((item, i) => (
            <Reveal key={item.id} delay={(i % 4) * 90}>
              <button type="button" className="gallery-item" onClick={() => setActive(item)}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span>{item.caption}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {active && <Lightbox item={active} onClose={close} />}
    </section>
  );
}
