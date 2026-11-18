import { useState } from "react";
import { brand } from "../brand";

const empty = {
  name: "",
  email: "",
  session: "Not sure yet",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");
  const [sentName, setSentName] = useState("");
  const mailto = `mailto:${brand.contactEmail}?subject=${encodeURIComponent("Sitting inquiry")}`;

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submit(event) {
    event.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setError("Name, email, and a note are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter an email address the studio can reply to.");
      return;
    }

    setError("");
    setSentName(name);
  }

  return (
    <section className="band contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow">05 — Correspondence</p>
          <h2>Write the studio</h2>
          <p className="lede">
            Tell us the date, the place, and the kind of picture you want. This form stays in the browser.
          </p>
          <dl className="contact-facts">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={mailto}>{brand.contactEmail}</a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}>{brand.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Studio</dt>
              <dd>{brand.location}</dd>
            </div>
          </dl>
        </div>
        {sentName ? (
          <div className="sent" role="status">
            <h3>Noted, {sentName}.</h3>
            <p>
              Nothing was sent from this demo. Write the studio directly at{" "}
              <a href={mailto}>{brand.contactEmail}</a>.
            </p>
            <button
              type="button"
              className="submit"
              onClick={() => {
                setSentName("");
                setForm(empty);
              }}
            >
              Write another note
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={submit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={update}
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={update}
              />
            </div>
            <div className="field">
              <label htmlFor="session">Session</label>
              <select id="session" name="session" value={form.session} onChange={update}>
                <option>Not sure yet</option>
                {brand.sessions.map((session) => (
                  <option key={session.name}>{session.name}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Note</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={update}
              />
            </div>
            {error ? (
              <p className="form-error" role="alert">
                {error}
              </p>
            ) : null}
            <button type="submit" className="submit">
              Leave a note
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
