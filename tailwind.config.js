/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        wht: "#f5f5f7",
        blk: "#1d1d1f",
        acc: "#232323",
        grn: "#68ED01",
        grnh: "#53C20F",
      },
    },
  },
  plugins: [],
};
