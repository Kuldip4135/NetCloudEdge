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
        // The glass panel's layered shadow (see .glass-panel in input.css).
        glass: "0 1px 1px rgb(16 28 46 / 0.04), 0 12px 32px -12px rgb(16 28 46 / 0.12)",
        // Colour-matched glow behind solid icon chips / primary buttons.
        glow: "0 8px 24px -8px rgb(var(--color-brand) / 0.45)",
        "glow-accent": "0 8px 24px -8px rgb(var(--color-accent) / 0.45)",
        instrument: "0 8px 24px -8px rgb(var(--color-signal) / 0.45)",
      },
      keyframes: {
        "orb-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(3%, -4%) scale(1.06)" },
        },
        "grid-sweep": {
          "0%": { transform: "translateY(-10%)", opacity: "0" },
          "12%": { opacity: "1" },
          "88%": { opacity: "1" },
          "100%": { transform: "translateY(110%)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "orb-float-slow": "orb-float 12s ease-in-out infinite",
        "orb-float-slower": "orb-float 14s ease-in-out infinite",
        "grid-sweep-slow": "grid-sweep 9s ease-in-out infinite",
        marquee: "marquee 34s linear infinite",
        "marquee-fast": "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};
