/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['cursive', 'sans-serif'],
        fantasy: ['fantasy', 'sans-serif'],
        ms: ['"Segoe UI"', 'sans-serif'],
        apple: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
        comic: ['"Comic Sans MS"', 'cursive'],
        decorative: ['"Copperplate"', 'sans-serif'],
        script: ['"Brush Script MT"', 'cursive'],
        slab: ['"Courier New"', 'Courier', 'monospace'],
        grotesque: ['"Arial Black"', 'Gadget', 'sans-serif'],
        transitional: ['Georgia', 'Times New Roman', 'Times', 'serif'],
        georgia: ['Georgia', 'serif'],
        // Add other fonts here as needed
      },
    },
  },
  plugins: [],
};
