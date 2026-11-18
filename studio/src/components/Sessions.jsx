import { brand } from "../brand";

export default function Sessions() {
  return (
    <section className="band sessions" id="sessions">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow light">04 — Sittings</p>
            <h2>Sessions</h2>
          </div>
          <p className="deck light">
            Three ways to book the studio. Figures below are sample rates for this layout.
          </p>
        </div>
        <div className="rates">
          {brand.sessions.map((session) => (
            <article key={session.name} className="rate">
              <div>
                <h3>{session.name}</h3>
                <p>{session.detail}</p>
                <ul className="rate-includes">
                  {session.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="rate-aside">
                <span className="rate-duration">{session.duration}</span>
                <strong>
                  {brand.currencySymbol}
                  {session.price}
                </strong>
              </p>
            </article>
          ))}
        </div>
        <p className="fineprint">
          Sample rates. Change the names and figures in <code>src/brand.js</code> before anyone books from this page.
        </p>
      </div>
    </section>
  );
}
