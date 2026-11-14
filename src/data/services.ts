import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "nutrition",
    title: "Nutrition Guidance",
    description:
      "Balanced meal ideas and portion guidance built around your food preferences and daily routine.",
    icon: "🥗",
  },
  {
    id: "weight",
    title: "Weight Management Support",
    description:
      "Gradual, sustainable support for people who want to lose, gain or maintain weight in a healthy way.",
    icon: "⚖️",
  },
  {
    id: "habits",
    title: "Daily Habit Coaching",
    description:
      "Simple routines for water intake, sleep, movement and mindful eating that you can actually keep up.",
    icon: "🌿",
  },
  {
    id: "products",
    title: "Herbalife Nutrition Products",
    description:
      "Help choosing nutrition products that fit your goals, and how to use them as part of a balanced diet.",
    icon: "🥤",
  },
  {
    id: "followup",
    title: "Regular Follow-ups",
    description:
      "Friendly check-ins to track progress, answer questions and keep you motivated week after week.",
    icon: "💬",
  },
  {
    id: "community",
    title: "Wellness Community",
    description:
      "Join a supportive group of people on the same journey, sharing tips, recipes and encouragement.",
    icon: "🤝",
  },
];
