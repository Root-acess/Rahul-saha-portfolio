import type { NavLink, SiteConfig } from "@/types";

/**
 * EDIT THIS FILE with Rahul's real details.
 * Placeholders to replace: whatsappNumber, email, photoUrl, location.
 */
export const site: SiteConfig = {
  coachName: "Rahul Saha",
  title: "Health Coach",
  badge: "Independent Herbalife Nutrition Member",
  heroText:
    "I'm Rahul Saha, a health coach helping people build balanced nutrition and daily habits that last, with friendly one-to-one support at every step.",
  rotatingWords: ["nutrition", "energy", "habits", "balance", "wellness"],
  marquee: [
    "Balanced Nutrition",
    "Daily Habits",
    "Weight Management",
    "Hydration",
    "Better Sleep",
    "Healthy Energy",
    "Mindful Eating",
    "Wellness Community",
  ],
  about: [
    "I am a health coach and an Independent Herbalife Nutrition Member. I started with my own wellness journey and now love helping others find a routine that truly fits their life.",
    "My approach is simple: understand your goals, build a realistic daily plan, and stay in touch so you never feel like you are doing it alone.",
  ],
  values: [
    {
      icon: "🎯",
      title: "Personal",
      text: "A plan built around your goals, food habits and daily schedule.",
    },
    {
      icon: "🧭",
      title: "Practical",
      text: "Simple steps you can follow in real life, not strict rules.",
    },
    {
      icon: "🤝",
      title: "Supportive",
      text: "Regular check-ins so you always have someone in your corner.",
    },
  ],
  location: "India",
  whatsappNumber: "910000000000", // country code + number, digits only
  email: "rahul@example.com",
  facebookUrl: "", // optional: paste the Facebook profile link to show it in Contact
  photoUrl: "/images/rahul.jpg", // file lives in /public/images
  // Swap these for real numbers (e.g. clients coached) if Rahul wants to show them.
  stats: [
    { value: "6", label: "Ways I can help" },
    { value: "4", label: "Simple steps to start" },
    { value: "1", label: "Personal plan, made for you" },
    { value: "7", label: "Days a week of support" },
  ],
  disclaimer:
    "Herbalife Nutrition products are not intended to diagnose, treat, cure or prevent any disease. Results vary from person to person. This is the website of an independent Herbalife Nutrition Member and is not operated by Herbalife.",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "BMI", href: "#bmi" },
  { label: "Videos", href: "#videos" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
