import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface Props {
  /** Value like "6", "100+" or "24/7". Any leading number is animated. */
  value: string;
  duration?: number;
}

/** Counts up to the number inside `value` when scrolled into view. */
export default function Counter({ value, duration = 1400 }: Props) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || target === null) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  if (target === null) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      {current}
      {suffix}
    </span>
  );
}
