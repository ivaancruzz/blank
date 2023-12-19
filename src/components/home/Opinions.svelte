<script lang="ts">
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide"
  import { OPINIONS } from "../../data/opinions"
  import { useTranslations } from "../../i18n/utils"
  import type { ui } from "../../i18n/ui"

  export let lang: keyof typeof ui
  const t = useTranslations(lang)
</script>

<Splide
  hasTrack={false}
  aria-label="My Favorite Images"
  options={{
    type: "loop",
    arrows: false,
    pagination: false,
    perPage: 1,
    gap: 10,
    flickPower: 1,
    rewind: false,
    autoplay: true,
  }}
>
  <div class="flex mb-5">
    <h3
      class="flex-1 md:text-md-subtitle-h3 flex gap-2 items-center text-black dark:text-white"
    >
      <i class="fi fi-sr-heart flex items-center text-primary-500" />
      {t("opinion.title")}
    </h3>
    <div class="splide__toggle">
      <span class="splide__toggle__play text-primary-500">
        <i class="fi fi-sr-play" />
      </span>
      <span class="splide__toggle__pause text-primary-500">
        <i class="fi fi-sr-pause" />
      </span>
    </div>
  </div>

  <SplideTrack>
    {#each OPINIONS as opinion}
      <SplideSlide>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          class="card-content dark:bg-zinc-900 flex gap-3 p-4 rounded-lg h-full"
        >
          <div class="flex flex-col items-center gap-4">
            <div class="logo">
              <img src="" class="object-center" alt="" />
            </div>

            <a href={opinion.linkedin}><i class="fi fi-brands-linkedin" /></a>
          </div>
          <div class="flex flex-col gap-2">
            <h5 class="text-md-subtitle-h5 text-primary">{opinion.name}</h5>
            <div class="text-md-subtitle-h6 line-clamp-5">
              {opinion.description[lang]}
            </div>
          </div>
        </div>
      </SplideSlide>
    {/each}
  </SplideTrack>
</Splide>

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
