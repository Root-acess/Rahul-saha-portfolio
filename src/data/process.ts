import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    id: "hello",
    title: "Say hello",
    description:
      "Message me on WhatsApp and tell me about your goals and daily routine.",
  },
  {
    id: "plan",
    title: "Get your plan",
    description:
      "I build a simple nutrition and habit plan around your food preferences and schedule.",
  },
  {
    id: "start",
    title: "Start with support",
    description:
      "Begin your routine with regular check-ins, tips and answers to your questions.",
  },
  {
    id: "adjust",
    title: "Track and adjust",
    description:
      "We review your progress together and tweak the plan so it keeps working for you.",
  },
];
