document.addEventListener("DOMContentLoaded", () => {
  spawnEmbers(document.querySelector(".ember-field"));
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
          function renderEpisodeList() {
  const mount = document.getElementById("episodeList");
  if (!mount) return;
  const latestNumber = Math.max(...EPISODES.map((e) => e.number));

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
          ${ep.number === latestNumber ? '<span class="ep-badge">New</span>' : ""}
        </div>
        <p class="ep-sub">${ep.subtitle}</p>
        <span class="ep-date">${ep.date}</span>
      </div>
      <span class="ep-arrow">&#8250;</span>
    </a>`
  ).join("");
}
        </div>
        <p class="ep-sub">${ep.subtitle}</p>
        <span class="ep-date">${ep.date}</span>
      </div>
      <span class="ep-arrow">&#8250;</span>
    </a>`
  ).join("");
}
