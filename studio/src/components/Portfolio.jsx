import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { photos } from "../data/photos";
import Photo from "./Photo";

const filters = [
  { id: "all", label: "All plates" },
  { id: "Portrait", label: "Portraits" },
  { id: "Place", label: "Places" },
  { id: "Still", label: "Still life" },
];


export default function Portfolio({ onOpen }) {
  const [filter, setFilter] = useState("all");
  const visible = useMemo(
    () => (filter === "all" ? photos : photos.filter((photo) => photo.category === filter)),
    [filter]
  );
  const mosaic = filter === "all";

  return (
    <section className="band work" id="work">
      <div className="wrap-wide">
        <div className="section-head">
          <div>
            <p className="eyebrow">02 — Plates</p>
            <h2>Selected work</h2>
          </div>
          <p className="deck">
            {photos.length} photographs in one catalog. The same frames are on the{" "}
            <Link to="/instagram">studio profile</Link>.
          </p>
        </div>
        <div className="filters" role="group" aria-label="Filter plates">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className={mosaic ? "plates" : "plates is-even"}>
          {visible.map((photo, index) => (
            <article
              key={photo.id}
              className={mosaic && photo.category === "Place" ? "plate wide" : "plate"}
            >
              <button
                type="button"
                onClick={() => onOpen(photo.id, visible.map((item) => item.id))}
                aria-label={`Open ${photo.title}, plate ${photo.plate}`}
              >
                <span className="frame">
                  <Photo photo={photo} priority={index < 2} />
                  <span className="plate-no">{photo.plate}</span>
                </span>
                <span className="caption">
                  <span className="caption-title">{photo.title}</span>
                  <span className="caption-meta">
                    {photo.location} · {photo.year}
                  </span>
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
