// Colors resolve through CSS variables (see src/assets/css/input.css :root) so the
// palette can swap via [data-theme] without touching Tailwind classes anywhere in the markup.
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
          // Text-safe darkening of accent; see the note in input.css.
          deep: withOpacity("--color-accent-deep"),
        },
        surface: withOpacity("--color-surface"),
        border: withOpacity("--color-border"),
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["Public Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
        grotesk: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        glass: "0 1px 1px 0 rgb(var(--color-ink) / 0.04), 0 12px 32px -12px rgb(var(--color-ink) / 0.12)",
        glow: "0 8px 30px -6px rgb(var(--color-brand) / 0.35)",
        "glow-accent": "0 8px 30px -6px rgb(var(--color-accent) / 0.4)",
        brut: "5px 5px 0 0 rgb(var(--color-ink))",
        "brut-lg": "9px 9px 0 0 rgb(var(--color-ink))",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(2%, -4%) scale(1.05)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-3%, 3%) scale(1.04)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        float: "float 12s ease-in-out infinite",
        "float-delayed": "float-delayed 14s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        "marquee-slow": "marquee 46s linear infinite",
        "marquee-reverse": "marquee-reverse 52s linear infinite",
      },
    },
  },
  plugins: [],
};
