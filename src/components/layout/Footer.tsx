import LeafMark from "@/components/graphics/LeafMark";
import { navLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a href="#home" className="brand">
            <LeafMark size={30} />
            <span>{site.coachName}</span>
          </a>
          <ul className="footer-links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className="footer-disclaimer">{site.disclaimer}</p>
        <p className="footer-copy">
          © {new Date().getFullYear()} {site.coachName} · {site.title}
        </p>
      </div>
    </footer>
  );
}
