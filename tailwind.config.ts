/** @type {import('tailwindcss').Config} */
import { join } from "path"
import { skeleton } from "@skeletonlabs/tw-plugin"
import type { Config } from "tailwindcss"
import { customTheme } from "./src/theme/theme"
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    join(
      require.resolve("@skeletonlabs/skeleton"),
      "./src/**/*.{astro, html,js,svelte,ts}"
    ),
  ],
  theme: {
    fontSize: {
      "sm-h3": [
        "16px",
        {
          fontWeight: "bold",
        },
      ],
      "md-h3": [
        "28px",
        {
          fontWeight: "bold",
        },
      ],
      "md-subtitle-h3": ["24px", {}],
      "md-subtitle-h4": ["20px", {}],
      "md-subtitle-h5": ["16px", {}],
      "md-subtitle-h6": ["14px", {}],
    },
    extend: {
      fontFamily: {
        sans: ["Alexandria", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    skeleton({
      themes: { custom: [customTheme] },
    }),
  ],
} satisfies Config
