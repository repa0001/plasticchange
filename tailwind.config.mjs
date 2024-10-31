/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        "yellow-one": "#F3BD19", // Undgå mellemrum i navne
        "bright-yellow": "#FFED06",
=======
        "yellow-one": "#F3BD19",
        "bright-yellow": "#FFED06", // Undgå mellemrum i navne
>>>>>>> 00b1f1d30ff4f09345a6e8d9dff7bc181eec6f6b
        "almost-black": "#2C2D26",
        "blue-one": "#43489B",
        "dark-red": "#C72B25",
        "burned-orange": "#DF5231",
        "beige-one": "#EADDB7",
        "soft-white": "#FDF6EC",
      },
    },
  },
<<<<<<< HEAD
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
=======

  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
>>>>>>> 00b1f1d30ff4f09345a6e8d9dff7bc181eec6f6b
};
