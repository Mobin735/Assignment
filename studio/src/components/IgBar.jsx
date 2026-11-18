import { Link } from "react-router-dom";
import { brand } from "../brand";

export default function IgBar({ label }) {
  return (
    <header className="ig-bar">
      <a className="skip" href="#profile">
        Skip to profile
      </a>
      <Link to="/" className="nav-mark">
        <span className="lamp" aria-hidden="true" />
        {brand.shortName}
      </Link>
      <p className="ig-bar-label">{label}</p>
      <Link to="/" className="ig-bar-back">
        Studio site
      </Link>
    </header>
  );
}
