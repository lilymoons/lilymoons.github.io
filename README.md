# Halflight

> Every dusk lasts nineteen minutes. That's how long the dead have to be seen.

A Webtoon-style comic reader site — a series home page (cover, synopsis, cast, episode list) plus a vertical-scroll chapter reader with a **Next Episode** button, exactly like the Webtoon app's layout. Fully static, no build step, no dependencies. All artwork is generated as SVG at runtime, so there are no image files to manage — swap in real illustrations whenever you're ready (see [Customizing](#customizing-with-your-own-art) below).

**[Live demo →](#)** *(replace with your GitHub Pages URL once deployed — see below)*

## Structure

```
.
├── index.html          # Series home: hero, synopsis, cast, episode list
├── chapter.html         # Chapter reader — reads ?ep=1, ?ep=2, etc.
├── css/
│   └── style.css        # All styling (design tokens at the top)
├── js/
│   ├── data.js           # Series info, characters, and every episode's script
│   ├── scenes.js          # SVG panel/avatar renderer (the "art engine")
│   ├── main.js             # Renders the home page
│   └── chapter.js           # Renders the reader page + next/prev logic
└── .github/workflows/deploy.yml   # Auto-deploys to GitHub Pages on push
```

## Running it locally

No build tools needed — it's plain HTML/CSS/JS. Just serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

(Opening `index.html` directly by double-clicking works too, though a local server avoids occasional browser restrictions on local scripts.)

## Deploying to GitHub Pages

1. Create a new GitHub repo and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Halflight webtoon site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. In your repo on GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**. The included workflow (`.github/workflows/deploy.yml`) will build and deploy automatically on every push to `main`.
4. After the first push, check the **Actions** tab for the deploy run. Once it's green, your site is live at:
   ```
   https://<your-username>.github.io/<your-repo>/
   ```

**Alternative (no Actions):** Under **Settings → Pages → Source**, choose **Deploy from a branch**, pick `main` and `/ (root)`. This works fine too since the site is fully static — you just won't get the Actions build log. Either way `.nojekyll` is included so GitHub doesn't run the files through Jekyll.

## Adding your own chapter images

Each episode is just **one tall vertical image** — export your finished page from Clip Studio (or whatever you use) as a single long file, same as you'd upload to Webtoon.

1. Drop the file in the `images/` folder, e.g. `images/ep1.jpg`.
2. Open `js/data.js` and point that episode's `image` field at it:
   ```js
   image: "images/ep1.jpg",
   ```
3. Optional: set `thumb` to a separate, tighter-cropped image for the episode list / next-episode card. If you skip it, the full chapter image is used and auto-cropped to fit the thumbnail square.

That's it — the reader page just displays that one image full-width, scrolling top to bottom like the real Webtoon app.

Cast avatars on the home page are still generated SVG placeholders (in `js/scenes.js` / the `avatar` field in `js/data.js`) — swap those the same way if you'd rather use drawn portraits: replace `renderAvatarSVG(c.avatar)` in `js/main.js` with an `<img>` tag.

## Adding a new episode

Add a new object to the `EPISODES` array in `js/data.js` (copy an existing one as a template) with its own `image` and `thumb`. It'll automatically appear in the home page list and slot into the Next/Previous navigation in the reader.

## Editing the story

All character bios and episode/panel scripts (captions, dialogue) live in `js/data.js` — no HTML editing required for new content.

---

Built as a reusable webtoon-reader template. Swap the story, characters, and palette in `js/data.js` and `css/style.css` to make it your own.
