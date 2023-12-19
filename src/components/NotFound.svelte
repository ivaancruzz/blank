<script lang="ts">
  import type { ui } from "../i18n/ui"
  import { useTranslations } from "../i18n/utils"
  const lang = document.documentElement.lang as keyof typeof ui
  const t = useTranslations(lang)
</script>

<!-- svelte-ignore missing-declaration -->
<div class="h-full gap-4 flex flex-col justify-center items-center text-center">
  <i class="fi fi-rr-hiking text-primary" style="font-size: 150px;" />
  <h1 class="text-primary text-md-h3">¡Oops!</h1>
  <p>{t("404.message")}</p>

  <a
    href={`/${lang}/`}
    type="button"
    class="btn variant-filled-primary flex gap-2 items-center"
    ><i class="fi fi-rr-house-chimney" /> {t("404.back")}</a
  >
</div>
