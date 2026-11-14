import { site } from "@/data/site";
import { getInitials } from "@/utils/text";

/**
 * Animated hero graphic: a photo (or monogram) inside rotating rings,
 * with floating wellness chips orbiting around it.
 */
export default function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="ring ring-1" />
      <div className="ring ring-2" />
      <div className="ring ring-3" />

      <div className="orb">
        {site.photoUrl ? (
          <img src={site.photoUrl} alt={site.coachName} />
        ) : (
          <div className="monogram">
            <span>{getInitials(site.coachName)}</span>
          </div>
        )}
      </div>

      <div className="chip chip-1">🥗 Nutrition</div>
      <div className="chip chip-2">💧 Hydration</div>
      <div className="chip chip-3">😴 Sleep</div>
      <div className="chip chip-4">⚡ Energy</div>
    </div>
  );
}
