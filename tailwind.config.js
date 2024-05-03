/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Dancing Script", "sans-serif"],
        whisper: ["Whisper", "sans-serif"],
        stalemate: ["Stalemate", "sans-serif"],
        paint: ["Finger Paint", "sans-serif"],
        life: ["Life Savers", "sans-serif"],
        salsa: ["Salsa", "sans-serif"],
        sofia: ["Sofia", "Rubik", "sans-serif"],
        gloria: ["Gloria Hallelujah", "sans-serif"],
        cinzel: ["Cinzel", "Rubik", "sans-serif"],
        poppins: ["Poppins", "Rubik", "sans-serif"],
        urbanist: ["Urbanist", "Questrial", "sans-serif"],
        comfortaa: ["Comfortaa", "Rubik", "sans-serif"],
        handlee: ["Handlee", "Rubik", "sans-serif"],
        josefin: ["Josefin Slab", "Rubik", "sans-serif"],
        josefinsans: ["Josefin Sans", "sans-serif"],
        fantasy: ["Lora", "Bodoni Moda", "fantasy", "sans-serif"],
        ms: ["Mitr", "Nunito Sans", "sans-serif"],
        lato: ["Lato", "Nunito Sans", "sans-serif"],
        rubik: ["Rubik", "Nunito Sans", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
        apple: ["Nanum Gothic", '"Helvetica Neue"', "Arial", "sans-serif"],
        spectral: ["Spectral", '"Helvetica Neue"', "Arial", "sans-serif"],
        comic: ['"Luckiest Guy"', "cursive"],
        shadow: ["Shadows Into Light", "cursive"],
        quicksand: ["Quicksand", "cursive"],
        decorative: ['"Copperplate"', "sans-serif"],
        script: ["Sacramento", "cursive"],
        slab: ['"Courier New"', "Courier", "monospace"],
        grotesque: ["Cormorant Garamond", "Gadget", "sans-serif"],
        transitional: ["Cookie", "Times New Roman", "Times", "serif"],
        playfair: ["Playfair Display", "Lora", "serif"],
        yeseva: ["Yeseva One", "Lora", "serif"],
        georgia: ["Bodoni Moda", "Lora", "serif"],
        // Add other fonts here as needed
      },
      screens: {
        "lg-md": { min: "460px", max: "1024px" },
        // Add more custom breakpoints as needed
      },
    },
  },
  plugins: [],
};
