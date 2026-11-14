import { useEffect, useState } from "react";

export function useRotatingWord(words: string[], interval = 2400) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [words, interval]);

  return words[index] ?? "";
}
