import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { brand } from "../brand";
import { getPhoto, photos } from "../data/photos";
import { formatCount } from "../format";
import Avatar from "../components/Avatar";
import IgBar from "../components/IgBar";
import Photo from "../components/Photo";
import { Heart } from "../components/Icons";

export default function Post() {
  const { photoId } = useParams();
  const photo = getPhoto(photoId);
  const [liked, setLiked] = useState(false);
  const [extra, setExtra] = useState([]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    setLiked(false);
    setExtra([]);
    setDraft("");
  }, [photoId]);

  useEffect(() => {
    document.title = photo
      ? `${photo.title} · @${brand.handle}`
      : `Missing plate · ${brand.studioName}`;
  }, [photo]);

  if (!photo) {
    return (
      <div className="ig-shell">
        <IgBar label="Plate" />
        <main className="ig-wrap missing-plate" id="profile">
          <p className="eyebrow">Missing plate</p>
          <h1>This frame is not in the catalog.</h1>
          <Link to="/instagram" className="text-link">
            Back to the profile
          </Link>
        </main>
      </div>
    );
  }

  const index = photos.findIndex((item) => item.id === photo.id);
  const previous = photos[(index - 1 + photos.length) % photos.length];
  const next = photos[(index + 1) % photos.length];
  const likes = photo.likes + (liked ? 1 : 0);
  const comments = [...photo.comments, ...extra];
  const others = photos.filter((item) => item.id !== photo.id).slice(0, 6);

  function addComment(event) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setExtra((list) => [...list, { handle: "you", text }]);
    setDraft("");
  }

  return (
    <div className="ig-shell">
      <IgBar label={`Plate ${photo.plate}`} />
      <main className="ig-post-wrap" id="profile">
        <nav className="ig-pager" aria-label="Plates">
          <Link to={`/instagram/${previous.id}`}>Previous</Link>
          <Link to="/instagram">All posts</Link>
          <Link to={`/instagram/${next.id}`}>Next</Link>
        </nav>
        <article className="ig-post">
          <div className="ig-post-photo">
            <Photo photo={photo} priority />
          </div>
          <div className="ig-post-side">
            <header className="ig-post-user">
              <Avatar size="sm" />
              <div>
                <Link to="/instagram">@{brand.handle}</Link>
                <p>{photo.location}</p>
              </div>
            </header>
            <div className="ig-post-scroll">
              <h1>{photo.title}</h1>
              <p className="ig-caption">{photo.caption}</p>
              <ul className="ig-comments">
                {comments.map((comment, commentIndex) => (
                  <li key={`${comment.handle}-${commentIndex}`}>
                    <strong>@{comment.handle}</strong> {comment.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="ig-post-foot">
              <button
                type="button"
                className={liked ? "like is-on" : "like"}
                aria-pressed={liked}
                onClick={() => setLiked((value) => !value)}
              >
                <Heart filled={liked} />
                <span>{liked ? "Liked" : "Like"}</span>
              </button>
              <p className="ig-likes">{formatCount(likes)} likes</p>
              <p className="ig-date">{photo.posted}</p>
              <form className="ig-comment-form" onSubmit={addComment}>
                <label className="sr-only" htmlFor="comment">
                  Add a comment
                </label>
                <input
                  id="comment"
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Add a comment"
                  maxLength={240}
                />
                <button type="submit" disabled={!draft.trim()}>
                  Post
                </button>
              </form>
              <p className="ig-local">Comments and likes stay in this browser.</p>
            </div>
          </div>
        </article>
        <p className="ig-sheet-link">
          <Link to={`/?plate=${photo.id}#work`}>Open this plate on the contact sheet</Link>
        </p>
        <h2 className="ig-more-title">More from the catalog</h2>
        <div className="ig-grid ig-grid-more">
          {others.map((item) => (
            <Link
              key={item.id}
              to={`/instagram/${item.id}`}
              className="ig-cell"
              aria-label={item.title}
            >
              <Photo photo={item} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
