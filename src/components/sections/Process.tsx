import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="How it works"
          title="Four simple steps to start"
        />
        <ol className="steps">
          {processSteps.map((step, i) => (
            <Reveal key={step.id} delay={i * 120}>
              <li className="step">
                <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
