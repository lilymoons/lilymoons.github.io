/* ============================================================
   Scene rendering helpers — builds the silhouette-and-twilight
   illustration style used across all panels, thumbnails and avatars.
============================================================ */

function figureMarkup({ x, y, scale = 1, flip = false, color = "#0d0a1a", pose = "stand", glow = false }) {
  const t = `translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale})`;
  const glowAttr = glow ? `filter="url(#emberRim)"` : "";

  if (pose === "cloaked") {
    return `<g transform="${t}" ${glowAttr}>
      <polygon points="0,-210 62,18 -62,18" fill="${color}"/>
      <circle cx="0" cy="-222" r="20" fill="${color}"/>
      <path d="M -20 -230 Q 0 -250 20 -230" stroke="${color}" stroke-width="6" fill="none" opacity="0.7"/>
    </g>`;
  }

  const armPath =
    pose === "reach"
      ? `<path d="M 18 -108 Q 44 -138 60 -168" stroke="${color}" stroke-width="10" stroke-linecap="round" fill="none"/>`
      : `<path d="M 18 -108 Q 30 -78 22 -48" stroke="${color}" stroke-width="10" stroke-linecap="round" fill="none"/>`;

  const legs =
    pose === "walk"
      ? `<rect x="-18" y="-22" width="10" height="46" rx="4" fill="${color}" transform="rotate(-10 -13 1)"/>
         <rect x="6" y="-22" width="10" height="46" rx="4" fill="${color}" transform="rotate(12 11 1)"/>`
      : `<rect x="-16" y="-22" width="10" height="46" rx="4" fill="${color}"/>
         <rect x="6" y="-22" width="10" height="46" rx="4" fill="${color}"/>`;

  return `<g transform="${t}" ${glowAttr}>
    <circle cx="0" cy="-140" r="16" fill="${color}"/>
    <path d="M -22 -120 Q 0 -132 22 -120 L 26 -22 Q 0 -12 -26 -22 Z" fill="${color}"/>
    ${legs}
    ${armPath}
  </g>`;
}

function groundMarkup(kind, width, height, tint) {
  const y = height * 0.78;
  switch (kind) {
    case "water":
      return `<rect x="0" y="${y}" width="${width}" height="${height - y}" fill="${tint}" opacity="0.55"/>
        <path d="M0 ${y + 14} Q ${width * 0.25} ${y + 4} ${width * 0.5} ${y + 14} T ${width} ${y + 14}" stroke="${tint}" stroke-width="2" fill="none" opacity="0.5"/>
        <path d="M0 ${y + 34} Q ${width * 0.25} ${y + 24} ${width * 0.5} ${y + 34} T ${width} ${y + 34}" stroke="${tint}" stroke-width="2" fill="none" opacity="0.35"/>`;
    case "cliff":
      return `<polygon points="0,${height} ${width * 0.15},${y - 30} ${width * 0.4},${y + 20} ${width * 0.7},${y - 10} ${width},${y + 30} ${width},${height}" fill="${tint}" opacity="0.65"/>`;
    case "shore":
      return `<polygon points="0,${height} ${width},${height} ${width},${y + 20} 0,${y}" fill="${tint}" opacity="0.55"/>`;
    case "room":
      return `<rect x="0" y="${y - 40}" width="${width}" height="${height - y + 40}" fill="${tint}" opacity="0.5"/>
        <rect x="${width * 0.62}" y="${y - 130}" width="90" height="90" fill="none" stroke="${tint}" stroke-width="3" opacity="0.6"/>`;
    default:
      return "";
  }
}

let defCounter = 0;
function renderPanelSVG(p) {
  defCounter += 1;
  const id = `p${defCounter}`;
  const width = 800;
  const height = p.height || 700;
  const [skyTop, skyBottom] = p.sky;

  const figures = (p.figures || []).map(figureMarkup).join("");
  const orbs = (p.orbs || [])
    .map(
      (o) =>
        `<circle cx="${o.x}" cy="${o.y}" r="${o.r}" fill="url(#orb-${id})" opacity="${o.opacity ?? 1}"/>`
    )
    .join("");
  const ground = p.ground ? groundMarkup(p.ground, width, height, p.groundTint || skyBottom) : "";

  return `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escapeAttr(p.alt || "")}">
    <defs>
      <linearGradient id="sky-${id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${skyTop}"/>
        <stop offset="100%" stop-color="${skyBottom}"/>
      </linearGradient>
      <radialGradient id="orb-${id}">
        <stop offset="0%" stop-color="#fff3e0"/>
        <stop offset="40%" stop-color="#ffb199"/>
        <stop offset="100%" stop-color="#ff6b5b" stop-opacity="0"/>
      </radialGradient>
      <filter id="emberRim" x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#ff6b5b" flood-opacity="0.65"/>
      </filter>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#sky-${id})"/>
    ${ground}
    ${figures}
    ${orbs}
  </svg>`;
}

function escapeAttr(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

/* Small circular avatar portrait for cast + comments */
function renderAvatarSVG({ base, accent, mood = "stand" }) {
  defCounter += 1;
  const id = `a${defCounter}`;
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg-${id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${base}"/>
        <stop offset="100%" stop-color="${accent}"/>
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="url(#bg-${id})"/>
    <circle cx="100" cy="82" r="34" fill="#150f24" opacity="0.9"/>
    <path d="M 46 190 Q 100 132 154 190 Z" fill="#150f24" opacity="0.9"/>
  </svg>`;
}
