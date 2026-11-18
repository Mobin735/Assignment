import { Link } from "react-router-dom";
import { brand } from "../brand";
import { photos } from "../data/photos";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap-wide footer-inner">
        <div className="footer-top">
          <p className="footer-mark">{brand.studioName}</p>
          <nav className="footer-links" aria-label="Footer">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#sessions">Sessions</a>
            <a href="#contact">Contact</a>
            <Link to="/instagram">Instagram</Link>
          </nav>
        </div>
        <p className="fine">
          {photos.length} plates in the shared catalog. Sample photographs are remote Unsplash images
          for this layout, not a claim that the studio made them. Replace the name, handle, bio, and
          email in <code>src/brand.js</code>, and the pictures in <code>src/data/photos.js</code>.
        </p>
        <p className="fine">© {new Date().getFullYear()} {brand.studioName}</p>
      </div>
    </footer>
  );
}
