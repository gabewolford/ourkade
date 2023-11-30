module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
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
      colors: {
        buttonGreen: "#067A5E",
        buttonLightBlue: "#386D9D",
        buttonDarkBlue: "#3D4D7C",
        buttonDarkRed: "#783B28",
        lightPurple: "#C5AAFF",
        darkPurple: "#8578A0",
        gold: "#E3BA24",
        silver: "#A5A0A0",
        bronze: "#AA7918",
        successGreen: "#46FFBC",
        errorRed: "#FF7246",
        formDarkPurple: "#603961",
      },
      boxShadow: {
        custom: "0px 0px 50px 5px rgba(0, 0, 0, 0.50)",
        custom2: " 2px 2px 5px 0px #242E4D inset, 0px 3px 10px 0px #000",
        custom3: "0px 1px 1px 0px rgba(0, 0, 0, 0.60)",
        custom4: "0px 4px 50px 5px rgba(0, 0, 0, 0.50)",
        custom5: "0px 4px 4px rgba(0, 0, 0, 0.50)",
        customWhite: "0px 0px 10px 0px rgba(255, 255, 255, 0.5);",
        tvShadow: "0px 0px 40px 15px #656565 inset",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
