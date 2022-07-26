module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
          fontFamily: {
              poppins: ["Poppins", "sans-serif"],
          },
          textColor: {
              skin: {
                  base: 'var(--color-text-base)',
                  muted: 'var(--color-text-muted)',
                  inverted: 'var(--color-text-inverted)',
                  red: 'var(--color-button-accent)'
              }
          },
          backgroundColor: {
              skin: {
                  fill: 'var(--color-fill)',
                  "button-accent": 'var(--color-button-accent)',
                  "button-accent-hover": 'var(--color-button-accent-hover)',
                  "button-accent-muted": 'var(--color-button-accent-muted)',
              }
          }
      }
  }
}