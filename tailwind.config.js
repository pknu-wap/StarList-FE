/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // JSX, TSX 파일에서도 Tailwind를 적용하도록 설정
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
