import HeroVisual from "@/components/graphics/HeroVisual";
import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";
import { site } from "@/data/site";
import { useRotatingWord } from "@/hooks/useRotatingWord";
import { buildWhatsAppLink } from "@/utils/video";

export default function Hero() {
  const word = useRotatingWord(site.rotatingWords);
  const waLink = buildWhatsAppLink(
    site.whatsappNumber,
    "Hi Rahul! I found your website and would like to know more about your health coaching.",
  );

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="badge">
            <i className="pulse-dot" /> {site.badge}
          </span>
          <h1>
            Better <span className="rotator" key={word}>{word}</span>
            <br />
            starts with a <span className="grad">coach</span>.
          </h1>
          <p className="hero-text">{site.heroText}</p>
          <div className="hero-actions">
            <Button href={waLink} target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </Button>
            <Button href="#videos" variant="ghost">
              ▶ Watch videos
            </Button>
          </div>
        </div>
        <HeroVisual />
      </div>
      <Marquee items={site.marquee} />
    </section>
  );
}
