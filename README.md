# Rahul Saha: Health Coach Portfolio

Modern dark, animated portfolio built with React + TypeScript + Vite. No animation libraries: every effect is CSS or small React hooks.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Edit the content (all in `src/data/`)

| File | Controls |
| --- | --- |
| `site.ts` | Name, badge, hero text, rotating words, marquee, bio, WhatsApp number, email, photo, stats, nav, disclaimer |
| `services.ts` | Service cards |
| `process.ts` | The "4 simple steps" section |
| `gallery.ts` | Photo gallery (images in `public/images/`) |
| `videos.ts` | Videos (YouTube, Facebook or local mp4 in `public/videos/`) |
| `testimonials.ts` | Reviews slider |

## Folder structure

```
public/
  images/        Photos (rahul.jpg, moment-1..3.jpg)
  videos/        Optional local mp4 files
src/
  components/
    graphics/    BackgroundFX, HeroVisual, LeafMark, ProgressRing
    layout/      Navbar, Footer
    sections/    Hero, Stats, About, Services, Process, BmiCheck, Gallery, Videos, Testimonials, Contact
    ui/          Button, Reveal, Counter, TiltCard, Marquee, ScrollProgress, SectionHeading
  data/          All editable content
  hooks/         useInView, useActiveSection, useRotatingWord, useEscapeKey
  styles/        global.css
  types/         Shared TypeScript types
  utils/         Video embed helpers, WhatsApp link, text helpers
```

## Before publishing

- Set the real WhatsApp number (`whatsappNumber`, digits with country code) and email in `site.ts`.
- Replace the sample testimonials and sample video links with real ones.
- Replace the stats with real numbers if Rahul wants to show them.
- Keep the footer disclaimer, and avoid income or medical claims.
