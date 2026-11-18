import { Link } from "react-router-dom";
import { brand } from "../brand";
import Nav from "../components/Nav";

export default function Missing() {
  return (
    <>
      <Nav />
      <main className="missing" id="content">
        <p className="eyebrow">404</p>
        <h1>This page is not on the sheet.</h1>
        <p>The studio site and the profile are the two rooms in this project.</p>
        <div className="missing-links">
          <Link to="/">Studio site</Link>
          <Link to="/instagram">@{brand.handle}</Link>
        </div>
      </main>
    </>
  );
}
