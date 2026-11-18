import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { brand } from "../brand";
import { photos } from "../data/photos";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Sessions from "../components/Sessions";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Lightbox from "../components/Lightbox";

export default function Home() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [lightbox, setLightbox] = useState(null);
  const plate = searchParams.get("plate");

  useEffect(() => {
    document.title = brand.studioName;
  }, []);

  useEffect(() => {
    if (!location.hash) return;
    const target = document.querySelector(location.hash);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  useEffect(() => {
    if (!plate) return;
    const index = photos.findIndex((photo) => photo.id === plate);
    if (index >= 0) {
      setLightbox({ ids: photos.map((photo) => photo.id), index });
    }
  }, [plate]);

  function openPhoto(id, ids) {
    const order = ids?.length ? ids : photos.map((photo) => photo.id);
    const index = order.indexOf(id);
    if (index >= 0) setLightbox({ ids: order, index });
  }

  function closeLightbox() {
    setLightbox(null);
    if (searchParams.has("plate")) {
      const next = new URLSearchParams(searchParams);
      next.delete("plate");
      setSearchParams(next, { replace: true });
    }
  }

  return (
    <>
      <Nav />
      <main id="content">
        <Hero onOpen={openPhoto} />
        <Portfolio onOpen={openPhoto} />
        <About onOpen={openPhoto} />
        <Sessions />
        <Contact />
      </main>
      <Footer />
      {lightbox ? (
        <Lightbox
          ids={lightbox.ids}
          index={lightbox.index}
          onIndex={(index) => setLightbox((current) => (current ? { ...current, index } : current))}
          onClose={closeLightbox}
        />
      ) : null}
    </>
  );
}
