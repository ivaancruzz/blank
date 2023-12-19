<script lang="ts">
  import { Splide, SplideSlide } from "@splidejs/svelte-splide"
  import { useTranslations } from "../../i18n/utils"
  import type { ui } from "../../i18n/ui"

  export let projects: any
  export let lang: keyof typeof ui
  const t = useTranslations(lang)

  function getSlug(slug: string) {
    return slug.split("/")[1]
  }
</script>

<div class="flex flex-col gap-5">
  <h3
    class="md:text-md-subtitle-h3 flex gap-2 items-center text-black dark:text-white"
  >
    <i class="fi fi-sr-fire-flame-curved flex items-center text-primary-500" />
    {t("project.title")}
  </h3>

  <Splide
    aria-label="My Favorite Images"
    options={{
      perMove: 1,
      arrows: false,
      gap: 10,
      autoWidth: true,
      flickPower: 1,
      rewind: false,
      pagination: false,
    }}
  >
    {#each projects as project}
      <SplideSlide>
        <a href={`/${lang}/project/${getSlug(project.slug)}`}>
          <div class="card-content-static dark:bg-zinc-900 p-2">
            <div class="logo">
              <img src="" class="object-center" alt="" />
            </div>

            <div class="text-md-subtitle-h5 line-clamp-2 text-center" />
            {project.data.name}
          </div>
        </a>
      </SplideSlide>
    {/each}
  </Splide>
</div>

<style>
  .logo {
    width: 50px;
    min-width: 50px;
    max-width: 50px;
    height: 50px;
    min-height: 50px;
    max-height: 50px;
    background-color: rgb(109, 109, 109);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
  }
</style>
