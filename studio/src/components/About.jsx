import { brand } from "../brand";
import { photoOrFirst } from "../data/photos";
import Photo from "./Photo";

export default function About({ onOpen }) {
  const photo = photoOrFirst(brand.aboutPhotoId);

  return (
    <section className="band about" id="about">
      <div className="wrap about-grid">
        <div className="about-copy">
          <p className="eyebrow">03 — Studio</p>
          <h2>{brand.tagline}</h2>
          <p className="lede">{brand.bio}</p>
          {brand.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <figure className="about-figure">
          <button
            type="button"
            className="text-button"
            aria-label={`Open ${photo.title}, plate ${photo.plate}`}
            onClick={() => onOpen(photo.id)}
          >
            <span className="frame">
              <Photo photo={photo} />
              <span className="plate-no">{photo.plate}</span>
            </span>
          </button>
          <figcaption>
            {photo.title} — {photo.location}
          </figcaption>
        </figure>
        <dl className="notes">
          {brand.notes.map((note) => (
            <div key={note.label}>
              <dt>{note.label}</dt>
              <dd>{note.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
