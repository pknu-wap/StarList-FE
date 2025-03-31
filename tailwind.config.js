/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // 웹 관련
    "./src/web/**/*.{js,ts,jsx,tsx,html}",
    // 크롬 익스텐션 관련
    "./src/chrome-extension/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
