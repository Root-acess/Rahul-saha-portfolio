import { useEffect, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { getInitials } from "@/utils/text";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;
  const current = testimonials[index];

  useEffect(() => {
    if (paused || total < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % total), 6000);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section id="testimonials" className="section">
      <div className="container narrow">
        <SectionHeading
          eyebrow="Reviews"
          title="Kind words from clients"
          subtitle="Individual experiences vary and are not a guarantee of results."
        />
        <Reveal>
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <figure className="testimonial" key={current.id}>
              <span className="quote-mark" aria-hidden="true">“</span>
              <blockquote>{current.quote}</blockquote>
              <figcaption>
                <span className="avatar">{getInitials(current.name)}</span>
                <span>
                  <strong>{current.name}</strong>
                  {current.detail && <small>{current.detail}</small>}
                </span>
              </figcaption>
            </figure>

            <div className="carousel-controls">
              <button type="button" onClick={prev} aria-label="Previous testimonial">←</button>
              <div className="dots" role="tablist">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Testimonial ${i + 1}`}
                    className={i === index ? "dot dot-active" : "dot"}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
              <button type="button" onClick={next} aria-label="Next testimonial">→</button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
