import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="section section-tint">
      <div className="container">
        <SectionHeading
          eyebrow="What I offer"
          title="Support that fits your life"
          subtitle="Simple, friendly guidance to help you reach your wellness goals."
        />
        <div className="card-grid">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 100}>
              <TiltCard className="card service-card">
                <span className="service-icon" aria-hidden="true">
                  {s.icon}
                </span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
