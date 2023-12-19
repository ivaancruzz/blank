<script lang="ts">
  import { form, field } from "svelte-forms"
  import { email, required } from "svelte-forms/validators"
  import type { ui } from "../i18n/ui"
  import { ProgressRadial } from "@skeletonlabs/skeleton"
  import Spinner from "./Spinner.svelte"
  import { useTranslations } from "../i18n/utils"
  export let lang: keyof typeof ui
  export let onClose: () => void
  export let onSuccess: (message: string) => void
  export let onError: (message: string) => void

  const t = useTranslations(lang)
  const name = field("name", "", [required()])
  const _email = field("email", "", [email()])
  const message = field("message", "", [required()])
  const _lang = field("lang", lang, [required()])
  const myForm = form(name, _email, message, _lang)
  let loading = false
  myForm.validate()

  async function onSubmit() {
    loading = true
    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(myForm.summary()),
    })
      .then(async (response) => {
        if (response.ok) {
          return response.json()
        }
        const res = await response.json()
        throw new Error(res.message)
      })
      .then((res) => {
        myForm.clear()
        onSuccess(res.message)
      })
      .catch((error) => {
        onError(error.message)
      })
      .finally(() => {
        loading = false
      })
  }
</script>

<div
  class="bg-surface-500 dark:bg-zinc-900 shadow-md rounded text-secondary-500 rounded-lg"
>
  <div
    class="card-header text-md-h3 py-10 text-start bg-white dark:bg-primary-900 text-primary-500 dark:text-white rounded-lg"
  >
    {t("contactForm.title")}
  </div>

  <div class="p-4">
    <form id="send" on:submit|preventDefault={onSubmit}>
      <div class="sm:flex gap-4">
        <div class="mb-4">
          <label
            class="text-secondary-500 dark:text-white text-sm text-start mb-2"
            for="username"
          >
            {t("contactForm.name")}
          </label>
          <input
            class="shadow appearance-none border dark:border-0 rounded w-full py-2 px-3 text-secondary-500 dark:bg-secondary-400 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
            bind:value={$name.value}
            id="username"
            type="text"
          />
        </div>
        <div class="mb-4">
          <label
            class="text-secondary-500 dark:text-white text-sm text-start mb-2"
            for="username"
          >
            {t("contactForm.email")}
          </label>
          <input
            class="shadow appearance-none border rounded dark:border-0 w-full py-2 px-3 text-secondary-500 dark:bg-secondary-400 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
            bind:value={$_email.value}
            id="username"
            type="text"
          />
        </div>
      </div>
      <div class="mb-4">
        <label
          class="text-secondary-500 dark:text-white text-sm text-start mb-2"
          for="username"
        >
          {t("contactForm.message")}
        </label>
        <textarea
          rows="4"
          class="shadow max-h-[300px] appearance-none border rounded dark:border-0 w-full py-2 px-3 text-gray-700 dark:bg-secondary-400 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
          bind:value={$message.value}
          id="username"
        />
      </div>
    </form>
  </div>
  <div class="card-footer flex justify-between">
    <button
      class="btn flex gap-2 items-center !bg-transparent dark:text-white"
      on:click={onClose}>{t("contactForm.cancelButton")}</button
    >

    <button
      class="btn flex gap-2 items-center bg-white dark:bg-zinc-900 dark:text-white"
      form="send"
      disabled={!$myForm.valid || loading}
    >
      {#if loading}
        {t("contactForm.sendButton")} <Spinner />
      {:else}
        {t("contactForm.sendButton")}
      {/if}</button
    >
  </div>
</div>
