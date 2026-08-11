// Colours resolve through CSS variables (see src/assets/css/input.css :root) so the
// Dossier palette is defined in exactly one place and consumed as ordinary Tailwind
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
      },
      // Display: Fraunces. Body: Public Sans. Labels, file numbers, metadata: IBM Plex Mono.
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["Public Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
      // No shadow scale on purpose: Dossier has no blur, glow, or drop shadow. If a new
      // component needs depth it is the wrong component for this theme — give it a border.
    },
  },
  plugins: [],
};
