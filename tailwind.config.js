/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { },
     screens: {
   vs:'375px', 
   xs: "480px",
   ss: "620px",
   sm: "768px",
   mmd:'880px',
   xmd:"940px",
   md: "1060px",
   llg:"1150px",
   lg: "1280px",
   xl: "1700px",
  },
  },
  plugins: [],
}