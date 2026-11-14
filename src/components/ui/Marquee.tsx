interface Props {
  items: string[];
}

/** Infinite horizontal ticker. The list is rendered twice so the loop is seamless. */
export default function Marquee({ items }: Props) {
  const row = (suffix: string) =>
    items.map((item) => (
      <span key={`${suffix}-${item}`} className="marquee-item">
        <i aria-hidden="true">✦</i>
        {item}
      </span>
    ));

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
