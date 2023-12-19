<script lang="ts">
  import { Splide, SplideSlide } from "@splidejs/svelte-splide"
  import type { Project } from "../../types/types"
  import ButtonThemeSwitch from "../ButtonThemeSwitch.svelte"
  import type { ui } from "../../i18n/ui"
  import ButtonLanguageSwitch from "../ButtonLanguageSwitch.svelte"

  export let project: Project
  export let lang: keyof typeof ui
</script>

<!-- Header-->
<div
  class="flex justify-between items-center text-primary mb-2 sticky top-0 bg-surface-500 dark:bg-secondary-500 z-50 py-3 rounded-ee-lg rounded-es-lg"
>
  <a
    href={`/${lang}`}
    type="button"
    class="btn-icon bg-white dark:bg-zinc-900 dark:text-white"
  >
    <i class="fi fi-rr-arrow-small-left" style="font-size: 20px;" /></a
  >

  <div class="flex gap-4">
    <ButtonLanguageSwitch {lang} />
    <ButtonThemeSwitch {lang} />
  </div>
</div>
<div class="flex flex-col gap-9" style="margin-top: 40px;">
  <!-- Title -->
  <div class="flex items-center gap-4">
    <div class="logo">
      <img src={project.logo.url} class="object-center" alt="" />
    </div>
    <div class="flex flex-col gap-4 w-full">
      <div class="md:text-md-h3 text-primary-500 dark:text-white">
        {project.name}
      </div>
      {#if project.subtitle}
        <small>{project.subtitle}</small>
      {/if}
      <div class="flex gap-2">
        {#each project.technologies as techonlogy}
          <span class="badge variant-soft-primary font-normal"
            >{techonlogy}</span
          >
        {/each}
      </div>
    </div>
  </div>
  <!-- Detail -->

  <Splide
    aria-label="My Favorite Images"
    options={{
      perMove: 1,
      arrows: false,
      gap: 10,
      flickPower: 1,
      autoWidth: true,
      rewind: false,
      pagination: false,
    }}
  >
    {#each project.images as image}
      <SplideSlide>
        <div class="image-container">asd</div>
      </SplideSlide>
    {/each}
  </Splide>

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
  .image-container {
    min-width: 200px;
    min-height: 350px;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
  }
</style>
