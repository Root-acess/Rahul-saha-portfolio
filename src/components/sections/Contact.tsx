import { useState } from "react";
import type { FormEvent } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/utils/video";

export default function Contact() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hi Rahul, I'm ${name}.\nMy goal: ${goal}\n${message}`.trim();
    window.open(buildWhatsAppLink(site.whatsappNumber, text), "_blank", "noreferrer");
  };

  return (
    <section id="contact" className="section section-tint">
      <div className="container contact-grid">
        <Reveal direction="left">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title="Let's start your journey"
              subtitle="Send me a message and I'll get back to you personally."
            />
            <ul className="contact-list">
              <li>
                <a href={buildWhatsAppLink(site.whatsappNumber, "Hi Rahul!")} target="_blank" rel="noreferrer">
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>✉️ {site.email}</a>
              </li>
              {site.facebookUrl && (
                <li>
                  <a href={site.facebookUrl} target="_blank" rel="noreferrer">
                    📘 Facebook profile
                  </a>
                </li>
              )}
            </ul>
          </div>
        </Reveal>

        <Reveal direction="right">
          <form className="card contact-form" onSubmit={onSubmit}>
            <label>
              Your name
              <input value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
              Your goal
              <input
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="e.g. healthier eating, weight management"
                required
              />
            </label>
            <label>
              Message
              <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
            <button type="submit" className="btn btn-primary">
              Send via WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
