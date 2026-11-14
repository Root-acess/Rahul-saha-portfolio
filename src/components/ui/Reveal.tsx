import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface Props {
  children: ReactNode;
  /** Delay in ms, handy for staggering siblings. */
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

/** Fades and slides its children in the first time they scroll into view. */
export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const style: CSSProperties = { transitionDelay: `${delay}ms` };

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal reveal-${direction} ${inView ? "reveal-in" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
