document.addEventListener("DOMContentLoaded", () => {
  spawnEmbers(document.querySelector(".ember-field"));
  renderHero();
  renderCast();
  renderEpisodeList();
});

function spawnEmbers(field) {
  if (!field) return;
  const count = window.innerWidth < 640 ? 10 : 18;
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.style.left = Math.random() * 100 + "%";
    s.style.animationDuration = 8 + Math.random() * 10 + "s";
    s.style.animationDelay = Math.random() * 10 + "s";
    field.appendChild(s);
  }
}

function renderHero() {
  const mount = document.getElementById("heroCover");
  if (!mount) return;
  mount.innerHTML = renderPanelSVG({
    height: 460,
    sky: ["#3a2a5c", "#ff6b5b"],
    ground: "water",
    groundTint: "#1c3f3a",
    figures: [
      { x: 620, y: 380, scale: 0.65, color: "#0c0916", pose: "stand" },
      { x: 760, y: 380, scale: 0.6, color: "#ffb199", pose: "stand", glow: true },
    ],
    orbs: [
      { x: 150, y: 150, r: 10, opacity: 0.55 },
      { x: 260, y: 220, r: 6, opacity: 0.4 },
      { x: 90, y: 260, r: 8, opacity: 0.45 },
      { x: 700, y: 120, r: 14, opacity: 0.6 },
    ],
    alt: "Wren and Bram silhouetted before the lighthouse at dusk",
  });
}

function renderCast() {
  const mount = document.getElementById("castGrid");
  if (!mount) return;
  mount.innerHTML = CHARACTERS.map(
    (c) => `
    <article class="cast-card">
      <div class="cast-avatar"><img src="${c.avatar}" alt="${c.name}"></div>
      <h3 class="cast-name">${c.name}</h3>
      <p class="cast-role">${c.role}</p>
      <p class="cast-blurb">${c.blurb}</p>
    </article>`
  ).join("");
}

function renderEpisodeList() {
  const mount = document.getElementById("episodeList");
  if (!mount) return;
  mount.innerHTML = EPISODES.map(
    (ep) => `
    <a class="ep-card" href="chapter.html?ep=${ep.number}">
      <div class="ep-thumb">
        <img src="${ep.thumb || ep.image}" alt="${ep.title}">
        <span class="ep-num">EP ${ep.number}</span>
      </div>
      <div class="ep-meta">
        <div class="ep-title-row">
          <h3 class="ep-title">${ep.title}</h3>
          ${ep.isNew ? '<span class="ep-badge">New</span>' : ""}
        </div>
        <p class="ep-sub">${ep.subtitle}</p>
        <span class="ep-date">${ep.date}</span>
      </div>
      <span class="ep-arrow">&#8250;</span>
    </a>`
  ).join("");
}
