import { brand } from "../brand";
import { photoOrFirst, photos } from "../data/photos";
import Photo from "./Photo";

export default function Hero({ onOpen }) {
  const hero = photoOrFirst(brand.heroPhotoId);
  const lines = brand.studioName.split(/\s+/).filter(Boolean);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <p className="hero-spine">
        {brand.shortName} · contact sheet · {photos.length} plates
      </p>
      <div className="hero-copy">
        <p className="eyebrow light">Vol. 01 — The studio</p>
        <h1 id="hero-title">
          {lines.map((line, index) => (
            <span
              key={`${line}-${index}`}
              className={lines.length > 1 && index === lines.length - 1 ? "is-soft" : undefined}
            >
              {line}
            </span>
          ))}
        </h1>
        <p className="hero-deck">{brand.tagline}</p>
      </div>
      <div className="rebate-wrap">
        <div className="marks" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <button
          type="button"
          className="rebate"
          aria-label={`Open ${hero.title}, plate ${hero.plate}`}
          onClick={() => onOpen(hero.id)}
        >
          <span className="rebate-top">
            <span>NL</span>
            <span>{hero.plate}</span>
            <span>400</span>
          </span>
          <Photo photo={hero} priority />
          <span className="rebate-bottom">
            <span>{hero.title}</span>
            <span>{hero.location}</span>
          </span>
        </button>
      </div>
      <div className="hero-foot">
        <p>
          {brand.availability}
          <span aria-hidden="true"> · </span>
          {brand.location}
        </p>
        <a href="#work">View the plates</a>
      </div>
    </section>
  );
}
