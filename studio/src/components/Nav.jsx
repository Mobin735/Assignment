import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { brand } from "../brand";

const sections = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "sessions", label: "Sessions" },
  { id: "contact", label: "Contact" },
];

function SectionLink({ id, children, onNavigate }) {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return (
      <a href={`#${id}`} onClick={onNavigate}>
        {children}
      </a>
    );
  }

  return (
    <Link to={`/#${id}`} onClick={onNavigate}>
      {children}
    </Link>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 841px)");
    const closeIfWide = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", closeIfWide);
    return () => media.removeEventListener("change", closeIfWide);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header className="nav">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <Link to="/" className="nav-mark" onClick={close}>
        <span className="lamp" aria-hidden="true" />
        {brand.shortName}
      </Link>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav id="site-menu" className={open ? "nav-links is-open" : "nav-links"} aria-label="Studio">
        {sections.map((section) => (
          <SectionLink key={section.id} id={section.id} onNavigate={close}>
            {section.label}
          </SectionLink>
        ))}
        <Link to="/instagram" className="nav-ig" onClick={close}>
          Instagram
        </Link>
      </nav>
    </header>
  );
}
