// Colours resolve through CSS variables (see src/assets/css/input.css :root) so the
// Console palette is defined in exactly one place and consumed as ordinary Tailwind
// classes (bg-brand, text-ink/65) everywhere in the markup.
function withOpacity(variable) {
  return ({ opacityValue }) =>
    opacityValue === undefined
      ? `rgb(var(${variable}))`
      : `rgb(var(${variable}) / ${opacityValue})`;
}

module.exports = {
  content: [
    "./src/**/*.{njk,html,js}",
  ],
  theme: {
    extend: {
      colors: {
        ink: withOpacity("--color-ink"),
        paper: withOpacity("--color-paper"),
        brand: {
          DEFAULT: withOpacity("--color-brand"),
          dark: withOpacity("--color-brand-dark"),
        },
        accent: {
          DEFAULT: withOpacity("--color-accent"),
          // Text-safe darkening of accent, for accent text on the surface tone.
          deep: withOpacity("--color-accent-deep"),
        },
        surface: withOpacity("--color-surface"),
        border: withOpacity("--color-border"),
        // The one signature accent — instrument-orange. Reserved for primary actions
        // and diagram callouts; never the ambient color. See THEME.md "Blueprint".
        signal: {
          DEFAULT: withOpacity("--color-signal"),
          dark: withOpacity("--color-signal-dark"),
        },
      },
      // Headings: Space Grotesk. Body: Public Sans. Labels, status, stat figures: IBM
      // Plex Mono. Fraunces stays available but is not the default theme's display face.
      fontFamily: {
        grotesk: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["Public Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        // The card's resting elevation — a hairline plus a soft, wide ambient shadow.
        // No colour in it; colour comes from .glass-panel's border instead.
        card: "0 1px 2px rgb(15 23 42 / 0.04), 0 10px 28px -10px rgb(15 23 42 / 0.10)",
        "card-hover": "0 2px 4px rgb(15 23 42 / 0.05), 0 20px 40px -14px rgb(15 23 42 / 0.16)",
        // Restrained, colour-matched lift behind solid primary buttons only.
        glow: "0 8px 20px -6px rgb(var(--color-brand) / 0.35)",
        "glow-accent": "0 8px 20px -6px rgb(var(--color-accent) / 0.35)",
        instrument: "0 8px 20px -6px rgb(var(--color-signal) / 0.35)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        "marquee-fast": "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};
