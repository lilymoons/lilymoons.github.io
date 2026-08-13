/* ============================================================
   HALFLIGHT — series data
   All narrative content, character bios and panel scripts live here.
============================================================ */

const SERIES = {
  title: "HALFLIGHT",
  tagline: "Every dusk lasts nineteen minutes. That's how long the dead have to be seen.",
  synopsis: [
    "In the fishing town of Merrow Point, dusk doesn't just fall — it opens. For nineteen minutes between daylight and dark, the boundary between the living and the lost goes thin, and Wren Sato can see who's still waiting on the other side.",
    "This year the lighthouse is drawing more spirits than anyone remembers, and one of them — Bram, bound to the rocks since before Wren was born — is starting to forget his own name. She has until the light runs out to find out why."
  ],
};

const CHARACTERS = [
  {
    id: "wren",
    name: "Wren Sato",
    role: "The Seer",
    blurb: "Sees spirits only during halflight. Inherited the gift, and the scarf, from her grandmother.",
    avatar: { base: "#4a3b78", accent: "#ff6b5b" },
  },
  {
    id: "bram",
    name: "Bram",
    role: "The Keeper",
    blurb: "Bound to the lighthouse. Doesn't remember dying — and remembers less every night.",
    avatar: { base: "#8a7ac4", accent: "#f4ead9" },
  },
  {
    id: "nell",
    name: "Nell Osei",
    role: "The Skeptic",
    blurb: "Runs the failing bookshop with Wren. Believes in records, tide charts, and nothing she can't footnote.",
    avatar: { base: "#2e6b63", accent: "#f4ead9" },
  },
  {
    id: "tidekeeper",
    name: "The Tidekeeper",
    role: "The Collector",
    blurb: "Comes for spirits who overstay their halflight. No one has ever bargained with it and won.",
    avatar: { base: "#12241f", accent: "#2e6b63" },
  },
];

/* ---------- palette shorthand ---------- */
const DUSK = ["#3a2a5c", "#ff6b5b"];
const DUSK_DEEP = ["#241a3d", "#c9503f"];
const NIGHT = ["#150f24", "#3a2a5c"];
const INDOOR = ["#241a3d", "#1b1330"];
const DEEP_TEAL = ["#0d211d", "#1c3f3a"];

const EPISODES = [
  {
    id: 1,
    number: 1,
    title: "The Hour Between",
    subtitle: "Wren keeps her nineteen minutes. Bram is waiting, and something else has followed the tide in.",
    date: "Aug 3",
    isNew: false,
    thumb: {
      sky: DUSK, ground: "cliff", groundTint: "#1b1330",
      figures: [{ x: 560, y: 560, scale: 0.55, color: "#0d0a1a", pose: "stand" }],
      orbs: [{ x: 620, y: 470, r: 14 }],
      alt: "Wren silhouetted on the cliff at dusk",
    },
    panels: [
      {
        height: 620, sky: DUSK, ground: "cliff", groundTint: "#1b1330",
        figures: [{ x: 620, y: 560, scale: 0.7, color: "#0c0916", pose: "stand" }],
        orbs: [{ x: 200, y: 300, r: 10, opacity: 0.6 }, { x: 340, y: 220, r: 6, opacity: 0.4 }],
        alt: "The lighthouse at dusk, seen from across the water",
        caption: { text: "Halflight lasts nineteen minutes. Wren has never missed one.", pos: "top" },
      },
      {
        height: 680, sky: DUSK_DEEP, ground: "cliff", groundTint: "#241a3d",
        figures: [{ x: 380, y: 600, scale: 1.05, color: "#0c0916", pose: "walk" }],
        orbs: [{ x: 640, y: 260, r: 16, opacity: 0.7 }],
        alt: "Wren walking up the cliff path toward the lighthouse",
        caption: { text: "The spirits always come out first, near water.", pos: "bottom" },
      },
      {
        height: 560, sky: NIGHT, ground: "shore", groundTint: "#3a2a5c",
        figures: [{ x: 400, y: 520, scale: 1.3, color: "#0c0916", pose: "reach" }],
        orbs: [],
        alt: "Close on Wren, scarf catching the wind",
        bubble: { speaker: "Wren", text: "You're late again.", side: "left", pos: "upper" },
      },
      {
        height: 640, sky: DUSK, ground: "cliff", groundTint: "#8a7ac4",
        figures: [
          { x: 350, y: 560, scale: 1.1, color: "#0c0916", pose: "stand" },
          { x: 540, y: 560, scale: 1.15, color: "#ffb199", pose: "stand", glow: true },
        ],
        orbs: [{ x: 540, y: 380, r: 22, opacity: 0.55 }],
        alt: "Bram appears beside the lighthouse, translucent and glowing faintly",
        bubble: { speaker: "Bram", text: "Been counting the minutes since you learned my name.", side: "right", pos: "upper" },
      },
      {
        height: 700, sky: NIGHT, ground: "water", groundTint: "#1c3f3a",
        figures: [
          { x: 300, y: 600, scale: 0.9, color: "#0c0916", pose: "stand" },
          { x: 480, y: 600, scale: 0.95, color: "#ffb199", pose: "stand", glow: true },
        ],
        orbs: [
          { x: 150, y: 300, r: 10, opacity: 0.5 },
          { x: 620, y: 260, r: 14, opacity: 0.6 },
          { x: 700, y: 420, r: 8, opacity: 0.4 },
          { x: 90, y: 460, r: 6, opacity: 0.35 },
        ],
        alt: "Wide shot of both silhouettes against a sky full of drifting lights",
        caption: { text: "Something's different tonight. More lights than usual, drifting in past the rocks.", pos: "center" },
      },
    ],
  },

  {
    id: 2,
    number: 2,
    title: "Low Tide",
    subtitle: "Old newspapers, older ghosts. Wren finds a pattern in the wrecks — and Bram is disappearing faster than she can ask why.",
    date: "Aug 7",
    isNew: false,
    thumb: {
      sky: DEEP_TEAL, ground: "water", groundTint: "#1c3f3a",
      figures: [{ x: 400, y: 560, scale: 0.55, color: "#12241f", pose: "cloaked" }],
      orbs: [{ x: 300, y: 460, r: 12 }],
      alt: "A cloaked figure standing at the waterline",
    },
    panels: [
      {
        height: 600, sky: INDOOR, ground: "room", groundTint: "#4a3b78",
        figures: [
          { x: 300, y: 560, scale: 1.0, color: "#0c0916", pose: "stand" },
          { x: 480, y: 560, scale: 1.0, color: "#0c0916", pose: "reach" },
        ],
        orbs: [],
        alt: "Nell and Wren bent over old newspapers in the bookshop",
        bubble: { speaker: "Nell", text: "Three ships. Same night. Same lighthouse.", side: "left", pos: "upper" },
      },
      {
        height: 520, sky: INDOOR, ground: null,
        figures: [{ x: 400, y: 480, scale: 1.35, color: "#0c0916", pose: "stand" }],
        orbs: [],
        alt: "Close on Wren, unsettled",
        bubble: { speaker: "Wren", text: "He doesn't remember any of it.", side: "right", pos: "upper" },
      },
      {
        height: 640, sky: NIGHT, ground: "cliff", groundTint: "#8a7ac4",
        figures: [{ x: 420, y: 560, scale: 1.1, color: "#ffb199", pose: "reach", glow: true }],
        orbs: [{ x: 420, y: 380, r: 26, opacity: 0.4 }],
        alt: "Bram flickering, half-faded against the lighthouse",
        caption: { text: "Every halflight, a little more of him goes quiet.", pos: "bottom" },
      },
      {
        height: 700, sky: DUSK_DEEP, ground: "water", groundTint: "#1c3f3a",
        figures: [{ x: 400, y: 600, scale: 0.9, color: "#0c0916", pose: "stand" }],
        orbs: [
          { x: 120, y: 260, r: 10 }, { x: 220, y: 340, r: 8 }, { x: 340, y: 220, r: 12 },
          { x: 500, y: 300, r: 9 }, { x: 620, y: 240, r: 14 }, { x: 700, y: 380, r: 7 }, { x: 780, y: 260, r: 10 },
        ],
        alt: "Establishing shot: seven drifting lights over the water, more than ever before",
        caption: { text: "Tonight there are seven.", pos: "top" },
      },
      {
        height: 660, sky: DEEP_TEAL, ground: "water", groundTint: "#0d211d",
        figures: [{ x: 460, y: 600, scale: 1.3, color: "#0a1a17", pose: "cloaked" }],
        orbs: [],
        alt: "A tall cloaked figure rising from the shallows",
        bubble: { speaker: null, text: "Time to come home.", side: "right", pos: "lower", ghost: true },
      },
    ],
  },

  {
    id: 3,
    number: 3,
    title: "What the Water Keeps",
    subtitle: "Wren bargains with the thing that collects the overdue. To keep Bram, she offers the one thing she shouldn't.",
    date: "Aug 12",
    isNew: true,
    thumb: {
      sky: NIGHT, ground: "water", groundTint: "#1c3f3a",
      figures: [
        { x: 300, y: 560, scale: 0.5, color: "#0d0a1a", pose: "reach" },
        { x: 500, y: 560, scale: 0.55, color: "#12241f", pose: "cloaked" },
      ],
      orbs: [],
      alt: "Wren facing the Tidekeeper across the shallows",
    },
    panels: [
      {
        height: 680, sky: NIGHT, ground: "water", groundTint: "#1c3f3a",
        figures: [
          { x: 280, y: 620, scale: 1.0, color: "#0c0916", pose: "reach" },
          { x: 560, y: 620, scale: 1.4, color: "#0a1a17", pose: "cloaked" },
        ],
        orbs: [],
        alt: "Wren facing down the Tidekeeper at the shoreline",
        bubble: { speaker: "Wren", text: "Give him back his name.", side: "left", pos: "upper" },
      },
      {
        height: 560, sky: DEEP_TEAL, ground: null,
        figures: [{ x: 420, y: 540, scale: 1.5, color: "#0a1a17", pose: "cloaked" }],
        orbs: [],
        alt: "Close on the Tidekeeper, water dripping from its cloak",
        bubble: { speaker: null, text: "Names are the first thing the tide takes.", side: "right", pos: "upper", ghost: true },
      },
      {
        height: 620, sky: DUSK, ground: "cliff", groundTint: "#8a7ac4",
        figures: [{ x: 420, y: 560, scale: 1.15, color: "#ffb199", pose: "reach", glow: true }],
        orbs: [{ x: 420, y: 360, r: 18, opacity: 0.3 }],
        alt: "Bram reaching out, his light almost gone",
        caption: { text: "He's almost gone.", pos: "bottom" },
      },
      {
        height: 540, sky: NIGHT, ground: null,
        figures: [{ x: 400, y: 500, scale: 1.5, color: "#0c0916", pose: "stand" }],
        orbs: [],
        alt: "Wren, resolved, close on her face",
        bubble: { speaker: "Wren", text: "Then take mine instead.", side: "left", pos: "upper" },
      },
      {
        height: 720, sky: DUSK_DEEP, ground: "water", groundTint: "#1c3f3a",
        figures: [
          { x: 260, y: 640, scale: 0.85, color: "#0c0916", pose: "stand" },
          { x: 460, y: 640, scale: 0.9, color: "#ffb199", pose: "stand", glow: true },
          { x: 640, y: 640, scale: 1.1, color: "#0a1a17", pose: "cloaked" },
        ],
        orbs: [
          { x: 150, y: 260, r: 10 }, { x: 320, y: 200, r: 14 }, { x: 700, y: 280, r: 12 },
        ],
        alt: "Wide final shot: the whole lighthouse scene bathed in ember light",
        caption: { text: "END OF EPISODE 3 — TO BE CONTINUED", pos: "center" },
      },
    ],
  },
];

function getEpisode(num) {
  return EPISODES.find((e) => e.number === Number(num));
}
