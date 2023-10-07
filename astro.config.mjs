import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

import svelte from "@astrojs/svelte"
/** @type {import("prettier").Config} */

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  plugins: ["prettier-plugin-astro"],
})
