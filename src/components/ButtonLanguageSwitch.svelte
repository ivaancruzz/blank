<script lang="ts">
  import { popup } from "@skeletonlabs/skeleton"
  import type { PopupSettings } from "@skeletonlabs/skeleton"
  import type { ui } from "../i18n/ui"

  export let lang: keyof typeof ui

  const popupClick: PopupSettings = {
    event: "click",
    target: "popupClick",
    placement: "bottom",
  }

  function langSwitch() {
    const lagnIsEs = lang === "es"
    location.href = location.href.replace(lang, lagnIsEs ? "en" : "es")
  }
</script>

<div>
  <button
    type="button"
    class="btn flex gap-2 items-center bg-white dark:bg-zinc-900 dark:text-white"
    use:popup={popupClick}
  >
    <i class="fi fi-rr-earth-americas" style="font-size: 20px;" />
    <!-- svelte-ignore a11y-missing-attribute -->

    {#if lang === "es"}
      Español
    {:else if lang === "en"}
      English
    {/if}
  </button>
</div>

<div class="card p-4 variant-filled-surface z-50" data-popup="popupClick">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="flex flex-col font-semibold" on:click={langSwitch}>
    <button class="flex gap-2 items-center">
      <!-- svelte-ignore a11y-missing-attribute -->
      {#if lang === "es"}
        <img src="https://flagsapi.com/US/flat/24.png" />
        English
      {:else if lang === "en"}
        <img src="https://flagsapi.com/ES/flat/24.png" />
        Español
      {/if}
    </button>
  </div>
  <!-- <div class="arrow variant-filled-primary" /> -->
</div>
