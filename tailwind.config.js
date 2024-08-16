/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "markit": "url('./images/codioful-formerly-gradienta-ix_kUDzCczo-unsplash.jpg')",
        "vupdate": "url('./images/milad-fakurian-E8Ufcyxz514-unsplash.jpg')",
      }
    },
  },
  plugins: [],
}
