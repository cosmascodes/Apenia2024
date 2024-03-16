/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CC0101",
        secondary: "#f9f9f9",
        blackTheme: "#111111",
      },
      backgroundImage: {
        "hero-wave": "url('/images/online-banking-1c.png')",
        gradientTheme:
          "radial-gradient(circle at left, rgba(19, 98, 126, 0.4) 0%, rgba(255, 255, 255, 0) 25%) !important;",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
