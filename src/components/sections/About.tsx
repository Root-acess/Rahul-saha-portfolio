import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="About me"
          title={`Meet ${site.coachName}`}
          subtitle="Your partner in building a healthier routine."
        />
        <div className="about-grid">
          <Reveal direction="left">
            <div className="about-photo">
              {site.photoUrl && <img src={site.photoUrl} alt={site.coachName} loading="lazy" />}
              <span className="about-tag">💪 {site.title}</span>
            </div>
          </Reveal>
          <div>
            {site.about.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="lead">{p}</p>
              </Reveal>
            ))}
            <div className="values">
              {site.values.map((v, i) => (
                <Reveal key={v.title} delay={150 + i * 100}>
                  <TiltCard className="value-card">
                    <span className="value-icon">{v.icon}</span>
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
            <p className="location">📍 {site.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
