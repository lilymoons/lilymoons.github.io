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

/* ---------- episodes ----------
   Each episode is just one tall vertical comic image (exported as a
   single long file, e.g. from Clip Studio Paint) plus its listing info.

   - image:      the full scrolling chapter — put the file in /images
                 and point to it here.
   - thumb:      the small square-ish preview used in the episode list
                 and the "next episode" card. Reuses `image` by default
                 if you don't set one — set your own for a tighter crop.
------------------------------------------------- */
const EPISODES = [
  {
    id: 1,
    number: 1,
    title: "The Hour Between",
    subtitle: "Wren keeps her nineteen minutes. Bram is waiting, and something else has followed the tide in.",
    date: "Aug 3",
    isNew: false,
    image: "images/ep1.jpg",
    thumb: "images/ep1-thumb.jpg",
  },
  {
    id: 2,
    number: 2,
    title: "Low Tide",
    subtitle: "Old newspapers, older ghosts. Wren finds a pattern in the wrecks — and Bram is disappearing faster than she can ask why.",
    date: "Aug 7",
    isNew: false,
    image: "images/ep2.jpg",
    thumb: "images/ep2-thumb.jpg",
  },
  {
    id: 3,
    number: 3,
    title: "What the Water Keeps",
    subtitle: "Wren bargains with the thing that collects the overdue. To keep Bram, she offers the one thing she shouldn't.",
    date: "Aug 12",
    isNew: true,
    image: "images/ep3.jpg",
    thumb: "images/ep3-thumb.jpg",
  },
];

function getEpisode(num) {
  return EPISODES.find((e) => e.number === Number(num));
}
