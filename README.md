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

## Customizing with your own art

Every panel, thumbnail, and avatar is described as data and rendered as SVG by `renderPanelSVG()` / `renderAvatarSVG()` in `js/scenes.js`. To use real illustrations instead:

1. Open `js/data.js` — each panel has fields like `sky`, `figures`, `ground`, `caption`, `bubble`.
2. Swap the call to `renderPanelSVG(p)` (in `js/main.js` and `js/chapter.js`) for an `<img src="images/ep1-panel1.jpg">` tag, keeping the panel's `caption`/`bubble` overlays if you still want text on top.
3. Add your images under an `images/` folder and reference them by path.

## Adding a new episode

Add a new object to the `EPISODES` array in `js/data.js` (copy an existing one as a template — `thumb` for the episode list, `panels` for the reader). It'll automatically appear in the home page list and slot into the Next/Previous navigation in the reader.

## Editing the story

All character bios and episode/panel scripts (captions, dialogue) live in `js/data.js` — no HTML editing required for new content.

---

Built as a reusable webtoon-reader template. Swap the story, characters, and palette in `js/data.js` and `css/style.css` to make it your own.
