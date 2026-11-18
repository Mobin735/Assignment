import { useEffect } from "react";
import { Link } from "react-router-dom";
import { brand } from "../brand";
import { photos } from "../data/photos";
import { formatCount } from "../format";
import Avatar from "../components/Avatar";
import IgBar from "../components/IgBar";
import Photo from "../components/Photo";
import { Bubble, Heart } from "../components/Icons";

export default function Instagram() {
  useEffect(() => {
    document.title = `${brand.studioName} (@${brand.handle})`;
  }, []);

  return (
    <div className="ig-shell">
      <IgBar label="Profile" />
      <main className="ig-wrap" id="profile">
        <header className="ig-head">
          <Avatar />
          <div className="ig-id">
            <h1 className="ig-user">@{brand.handle}</h1>
            <ul className="ig-counts">
              <li>
                <strong>{photos.length}</strong>
                <span>posts</span>
              </li>
              <li>
                <strong>{formatCount(brand.followers)}</strong>
                <span>followers</span>
              </li>
              <li>
                <strong>{formatCount(brand.following)}</strong>
                <span>following</span>
              </li>
            </ul>
          </div>
          <div className="ig-bio">
            <strong>{brand.studioName}</strong>
            <p>{brand.bio}</p>
            <p className="ig-loc">{brand.location}</p>
            <Link to="/" className="ig-site">
              Studio site
            </Link>
          </div>
        </header>
        <div className="ig-grid">
          {photos.map((photo, index) => (
            <Link
              key={photo.id}
              to={`/instagram/${photo.id}`}
              className="ig-cell"
              aria-label={`${photo.title}, ${formatCount(photo.likes)} likes`}
            >
              <Photo photo={photo} priority={index < 6} />
              <span className="ig-hover">
                <span>
                  <Heart filled />
                  {formatCount(photo.likes)}
                </span>
                <span>
                  <Bubble />
                  {photo.comments.length}
                </span>
              </span>
            </Link>
          ))}
        </div>
        <p className="ig-note">
          The profile grid reads the same catalog as the studio portfolio. Sample photographs,
          placeholder counts.
        </p>
      </main>
    </div>
  );
}
