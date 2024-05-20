/** @type {import(' tailwindcss').Config} */

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
        cinzel2: ["seasons", "Rubik", "sans-serif"],
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
        seasons: ["seasons", "serif"],
        ogg: ["ogg", "serif"],
        // Add other fonts here as needed
      },
      screens: {
        "lg-md": { min: "460px", max: "1024px" },
        // Add more custom breakpoints as needed
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
