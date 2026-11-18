import { useState } from "react";

export default function Photo({ photo, priority = false, decorative = false }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="photo-fallback" role="img" aria-label={decorative ? undefined : photo.alt}>
        <span>Plate {photo.plate}</span>
        <span>{photo.title}</span>
      </span>
    );
  }

  return (
    <img
      src={photo.src}
      alt={decorative ? "" : photo.alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      style={{ objectPosition: photo.focus || "center" }}
      onError={() => setFailed(true)}
    />
  );
}
