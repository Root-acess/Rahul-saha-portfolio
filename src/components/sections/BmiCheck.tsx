import { useState } from "react";
import ProgressRing from "@/components/graphics/ProgressRing";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/utils/video";

function categorize(bmi: number): string {
  if (bmi < 18.5) return "Below the usual range";
  if (bmi < 25) return "In the usual range";
  if (bmi < 30) return "Above the usual range";
  return "Well above the usual range";
}

export default function BmiCheck() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const h = parseFloat(height) / 100;
  const w = parseFloat(weight);
  const bmi = h > 0 && w > 0 ? w / (h * h) : null;
  const valid = bmi !== null && bmi > 8 && bmi < 80;
  // Map BMI 10..40 onto the 0..100 ring.
  const percent = valid ? Math.round(Math.min(Math.max(((bmi - 10) / 30) * 100, 0), 100)) : 0;

  return (
    <section id="bmi" className="section section-tint">
      <div className="container narrow">
        <SectionHeading
          eyebrow="Quick check"
          title="Know your starting point"
          subtitle="Enter your height and weight for a quick BMI estimate."
        />
        <Reveal>
          <div className="bmi card">
            <div className="bmi-form">
              <label>
                Height (cm)
                <input
                  type="number"
                  inputMode="decimal"
                  min="50"
                  max="250"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="e.g. 170"
                />
              </label>
              <label>
                Weight (kg)
                <input
                  type="number"
                  inputMode="decimal"
                  min="10"
                  max="300"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g. 68"
                />
              </label>
            </div>
            <div className="bmi-result">
              <div className="bmi-ring">
                <ProgressRing percent={percent} label="BMI gauge" size={150} />
                <span className="bmi-value">{valid ? bmi.toFixed(1) : "--"}</span>
              </div>
              <div>
                <h3>{valid ? categorize(bmi) : "Enter your details"}</h3>
                <p>
                  BMI is only a general guide and is not medical advice. Message me for a
                  plan that fits you personally.
                </p>
                <a
                  className="btn btn-primary"
                  href={buildWhatsAppLink(
                    site.whatsappNumber,
                    valid
                      ? `Hi Rahul, my BMI came out as ${bmi.toFixed(1)}. I'd like a personal plan.`
                      : "Hi Rahul, I'd like a personal plan.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get my plan
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
