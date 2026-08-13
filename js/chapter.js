document.addEventListener("DOMContentLoaded", () => {
  spawnEmbers(document.querySelector(".ember-field"));

  const params = new URLSearchParams(window.location.search);
  const num = Number(params.get("ep")) || 1;
  const ep = getEpisode(num);

  if (!ep) {
    renderNotFound();
    return;
  }

  document.title = `${ep.title} — ${SERIES.title}`;
  renderReaderBar(ep);
  renderEpisodeHeader(ep);
  renderPanels(ep);
  renderEnd(ep);
  renderComments();
  wireProgress();
});

function spawnEmbers(field) {
  if (!field) return;
  const count = window.innerWidth < 640 ? 8 : 14;
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.style.left = Math.random() * 100 + "%";
    s.style.animationDuration = 8 + Math.random() * 10 + "s";
    s.style.animationDelay = Math.random() * 10 + "s";
    field.appendChild(s);
  }
}

function renderNotFound() {
  document.getElementById("readerRoot").innerHTML = `
    <div class="section" style="text-align:center; padding-top:120px;">
      <h1 style="font-family:var(--font-display); font-size:2rem;">Episode not found</h1>
      <p class="lede">That page drifted off with the tide.</p>
      <a class="btn-primary" href="index.html">Back to Halflight</a>
    </div>`;
}

function renderReaderBar(ep) {
  document.getElementById("seriesName").textContent = SERIES.title;
  document.getElementById("epName").textContent = `Ep ${ep.number} · ${ep.title}`;

  const select = document.getElementById("epSelect");
  select.innerHTML = EPISODES.map(
    (e) => `<option value="${e.number}" ${e.number === ep.number ? "selected" : ""}>Episode ${e.number} — ${e.title}</option>`
  ).join("");
  select.addEventListener("change", (e) => {
    window.location.href = `chapter.html?ep=${e.target.value}`;
  });
}

function renderEpisodeHeader(ep) {
  document.getElementById("epEyebrow").textContent = `Episode ${ep.number}`;
  document.getElementById("epTitle").textContent = ep.title;
  document.getElementById("epSubtitle").textContent = ep.subtitle;
}

function renderPanels(ep) {
  const mount = document.getElementById("panels");
  mount.innerHTML = ep.panels
    .map((p) => `<div class="panel">${renderPanelSVG(p)}</div>`)
    .join("");
}

function renderEnd(ep) {
  document.getElementById("epEndTitle").textContent = `End of Episode ${ep.number}`;
  const next = EPISODES.find((e) => e.number === ep.number + 1);
  const prev = EPISODES.find((e) => e.number === ep.number - 1);

  const prevMount = document.getElementById("prevLink");
  prevMount.innerHTML = prev
    ? `<a class="prev-link" href="chapter.html?ep=${prev.number}">&#8249; Episode ${prev.number}: ${prev.title}</a>`
    : `<a class="prev-link" href="index.html">&#8249; Back to all episodes</a>`;

  const nextMount = document.getElementById("nextBlock");
  if (next) {
    nextMount.innerHTML = `
      <a class="next-card" href="chapter.html?ep=${next.number}">
        <div class="thumb">${renderPanelSVG({ height: 700, ...next.thumb })}</div>
        <div class="txt">
          <div class="lbl">Next episode</div>
          <div class="ttl">Ep ${next.number} · ${next.title}</div>
        </div>
        <span class="arrow">&#8250;</span>
      </a>`;
  } else {
    nextMount.innerHTML = `<div class="end-of-story">That's everything so far. New episodes of ${SERIES.title} arrive weekly — come back for Episode ${ep.number + 1}.</div>`;
  }
}

function renderComments() {
  const mount = document.getElementById("commentList");
  const mock = [
    { name: "moonlit_reader", text: "the way the orbs multiplied between panels 4 and 5... I felt that", avatar: { base: "#4a3b78", accent: "#ff6b5b" } },
    { name: "harborlines", text: "Bram forgetting his own name is going to wreck me, called it", avatar: { base: "#2e6b63", accent: "#f4ead9" } },
    { name: "tidepools", text: "the Tidekeeper design is so quietly terrifying, no face needed", avatar: { base: "#12241f", accent: "#2e6b63" } },
  ];
  mount.innerHTML = mock
    .map(
      (c) => `
    <div class="comment">
      <div class="cavatar">${renderAvatarSVG(c.avatar)}</div>
      <div class="cbody">
        <div class="cname">${c.name}</div>
        <div class="ctext">${c.text}</div>
      </div>
    </div>`
    )
    .join("");
}

function wireProgress() {
  const fill = document.getElementById("progressFill");
  if (!fill) return;
  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
    fill.style.height = pct + "%";
  };
  document.addEventListener("scroll", update, { passive: true });
  update();
}
