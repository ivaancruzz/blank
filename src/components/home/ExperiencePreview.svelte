<script lang="ts">
  import { Splide, SplideSlide } from "@splidejs/svelte-splide"
  import type { Experience } from "../../types/types"
  import ThemeSwitch from "../ButtonThemeSwitch.svelte"
  import type { ui } from "../../i18n/ui"
  import LanguageSwitch from "../ButtonLanguageSwitch.svelte"

  export let experience: Experience
  export let lang: keyof typeof ui
</script>

<!-- Header-->
<div
  class="flex justify-between items-center text-primary mb-2 sticky top-0 bg-surface-500 dark:bg-secondary-500 z-50 py-3 rounded-ee-lg rounded-es-lg"
>
  <a href={`/${lang}`} type="button" class="btn-icon bg-white dark:bg-zinc-900">
    <i class="fi fi-rr-arrow-small-left" style="font-size: 20px;" /></a
  >

  <div class="flex gap-4">
    <LanguageSwitch {lang} />
    <ThemeSwitch {lang} />
  </div>
</div>
<div class="flex flex-col gap-9" style="margin-top: 40px;">
  <!-- Title -->
  <div class="flex flex-col gap-4 justify-center items-center text-center">
    <div class="logo">
      <img src={experience.logo.url} class="object-center" alt="" />
    </div>
    <div class="md:text-md-h3 text-primary-500 dark:text-white">
      {experience.name}
    </div>
    <p class="text-surface-900 dark:text-gray-400">{experience.description}</p>
  </div>
  <div class="card-content dark:bg-zinc-900">
    <slot />
  </div>
</div>

<style>
  .logo {
    width: 100px;
    min-width: 100px;
    height: 100px;
    min-height: 100px;
    background-color: rgb(109, 109, 109);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
  }
</style>
