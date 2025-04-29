/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter var",
          "var(--font-inter)",
          ...require("tailwindcss/defaultTheme").fontFamily.sans,
        ],
        apercu: ["Apercu Pro", "sans-serif"],
        "apercu-mono": ["Apercu Mono Pro", "monospace"],
      },
      colors: {
        brand: require("./app/colors").default.brand,
        primary: require("./app/colors").default.primary,
        secondary: require("./app/colors").default.secondary,
      },
    },
  },
  plugins: [],
};
