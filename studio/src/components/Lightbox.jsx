import { useEffect, useRef } from "react";
import { getPhoto } from "../data/photos";
import Photo from "./Photo";

export default function Lightbox({ ids, index, onIndex, onClose }) {
  const closeRef = useRef(null);
  const photo = getPhoto(ids[index]);
  const count = ids.length;

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onIndex((index + 1) % count);
      if (event.key === "ArrowLeft") onIndex((index - 1 + count) % count);
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count, index, onClose, onIndex]);

  if (!photo) return null;

  function step(delta) {
    onIndex((index + delta + count) % count);
  }

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${photo.title} photograph`}
      onClick={onClose}
    >
      <p className="lightbox-count">
        Plate {photo.plate}
        <span>
          {index + 1} / {count}
        </span>
      </p>
      <button
        type="button"
        className="lightbox-close"
        ref={closeRef}
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
      >
        Close
      </button>
      <button
        type="button"
        className="lightbox-nav prev"
        aria-label="Previous plate"
        onClick={(event) => {
          event.stopPropagation();
          step(-1);
        }}
      >
        Prev
      </button>
      <figure
        className="lightbox-figure"
        onClick={(event) => event.stopPropagation()}
      >
        <Photo photo={photo} priority />
        <figcaption>
          <strong>{photo.title}</strong>
          <span>
            {photo.location} · {photo.year} · {photo.category}
          </span>
          <p>{photo.caption}</p>
        </figcaption>
      </figure>
      <button
        type="button"
        className="lightbox-nav next"
        aria-label="Next plate"
        onClick={(event) => {
          event.stopPropagation();
          step(1);
        }}
      >
        Next
      </button>
    </div>
  );
}
