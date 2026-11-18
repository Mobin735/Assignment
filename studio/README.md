# Northlight Studio

A photography website and an Instagram-style profile in one small app. The portfolio and the profile grid read the same photo catalog. There is no backend, database, or Instagram API key.

The studio name, handle, and bio are placeholders. Swap them before this stands in for a real practice.

## Run

```bash
cd studio
npm install
npm run dev
```

Vite prints a local URL, usually http://localhost:5173.

- `/` is the studio site: hero, portfolio with a lightbox, about, sessions, and contact.
- `/instagram` is the profile: avatar, name, handle, bio, counts, and the post grid.
- `/instagram/:id` is a single post.

To check the production build:

```bash
npm run build
npm run preview
```

## Change the name, handle, and bio

Edit **`src/brand.js`**. That file holds:

- `studioName` and `shortName`
- `handle`
- `bio`
- `contactEmail`, phone, and location
- session names and sample rates

The home page and the Instagram-style page both use it.

Photographs live in **`src/data/photos.js`**. Replace the `src` URLs, titles, and captions there. The portfolio and the profile update together.

## Limits

- Copy, rates, follower counts, and the city are sample text.
- Photographs are remote Unsplash images for the layout, not work by a real studio named Northlight.
- The contact form and post comments stay in the browser. Nothing is sent or stored.
