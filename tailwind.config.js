module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "holtwood-one-sc": ["Holtwood One SC", "sans-serif"],
        "alfa-slab-one": ["Alfa Slab One", "sans-serif"],
        rowdies: ["Rowdies", "sans-serif"],
        thabit: ["Thabit", "sans-serif"],
        "nano-pix": ["Nano Pix", "sans-serif"],
        "retro-gaming": ["Retro Gaming", "sans-serif"],
        "coin-ding-dong": ["Coin Ding Dong", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 0px 50px 5px rgba(0, 0, 0, 0.50)",
        custom2: " 2px 2px 5px 0px #242E4D inset, 0px 3px 10px 0px #000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
