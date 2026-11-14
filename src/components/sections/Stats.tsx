import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";

export default function Stats() {
  return (
    <section className="stats-band">
      <div className="container stats-grid">
        {site.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <div className="stat">
              <strong>
                <Counter value={s.value} />
              </strong>
              <span>{s.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
