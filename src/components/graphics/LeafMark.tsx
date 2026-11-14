interface Props {
  size?: number;
  className?: string;
}

/** Small leaf-in-circle logo mark. */
export default function LeafMark({ size = 32, className }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="leafGrad" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0" stopColor="#ffb347" />
          <stop offset="1" stopColor="#ff6b3d" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="15" stroke="url(#leafGrad)" strokeWidth="1.5" />
      <path
        d="M9 21c0-7 5-12 14-12 0 8-4 13-11 13-1.2 0-2-.3-3-1z"
        fill="url(#leafGrad)"
      />
      <path
        d="M10 22c4-4 7-7 11-10"
        stroke="#070b1a"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
