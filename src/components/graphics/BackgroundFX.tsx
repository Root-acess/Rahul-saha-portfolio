/** Fixed, decorative background: drifting glow blobs, a soft grid and film grain. */
export default function BackgroundFX() {
  return (
    <div className="bg-fx" aria-hidden="true">
      <span className="blob blob-a" />
      <span className="blob blob-b" />
      <span className="blob blob-c" />
      <span className="bg-grid" />
    </div>
  );
}
