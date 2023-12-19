<script lang="ts">
  import { popup, type PopupSettings } from "@skeletonlabs/skeleton"
  import { useTranslations } from "../i18n/utils"
  import type { ui } from "../i18n/ui"
  export let lang: keyof typeof ui

  const t = useTranslations(lang)
  let darkMode = window.sessionStorage.getItem("theme") == "dark" ?? true

  function handleSwitchDarkMode() {
    darkMode = !darkMode

    sessionStorage.setItem("theme", darkMode ? "dark" : "light")

    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={handleSwitchDarkMode}>
  <button
    type="button"
    class="btn-icon bg-white dark:bg-zinc-900 dark:text-white"
    ><i
      class={`fi fi-rr-${!darkMode ? "moon-stars" : "brightness"}`}
      style="font-size: 20px;"
    /></button
  >
</div>
