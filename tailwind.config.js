/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        littleBounce: {
          "0%, 100%": { transform: "translateY(-2%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "little-Bounce": "littleBounce 2s infinite",
      },
    },
  },
  plugins: [],
};
