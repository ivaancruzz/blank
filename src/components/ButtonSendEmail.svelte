<script lang="ts">
  import {
    getToastStore,
    initializeStores,
    Modal,
    Toast,
    type ModalComponent,
    type ToastSettings,
  } from "@skeletonlabs/skeleton"
  import { getModalStore, type ModalSettings } from "@skeletonlabs/skeleton"
  import FormSendEmail from "./FormSendEmail.svelte"
  import type { ui } from "../i18n/ui"
  import { popup, type PopupSettings } from "@skeletonlabs/skeleton"
  import { useTranslations } from "../i18n/utils"

  initializeStores()

  const modalStore = getModalStore()
  export let lang: keyof typeof ui

  const t = useTranslations(lang)
  const toastStore = getToastStore()
  const toast: ToastSettings = {
    message: "",
    classes: "rounded-lg",
    timeout: 4000,
  }

  const modalComponent: ModalComponent = {
    // Pass a reference to your custom component
    ref: FormSendEmail,
    // Add the component properties as key/value pairs
    props: {
      lang,
      onClose: () => {
        modalStore.close()
      },
      onSuccess: (message: string) => {
        toast.message = message
        toast.background = "variant-filled-success"
        toastStore.trigger(toast)
        modalStore.close()
      },
      onError: (message: string) => {
        toast.message = message
        toast.background = "variant-filled-error"
        toastStore.trigger(toast)
      },
    },
  }

  const modal: ModalSettings = {
    type: "component",
    modalClasses: "sm:w-auto w-full",
    backdropClasses:
      "bg-secondary-500 bg-opacity-75 dark:bg-secondary-900 dark:bg-opacity-75",
    component: modalComponent,
  }
  modalStore.subscribe((e) => {
    const isOpen = e.length

    if (isOpen) {
      document.querySelector("body")?.classList.add("modal-open")
    } else {
      document.querySelector("body")?.classList.remove("modal-open")
    }
  })
</script>

<button
  on:click={() => modalStore.trigger(modal)}
  type="button"
  class="btn-icon flex items-center justify-center bg-primary-500 dark:bg-zinc-900 text-white dark:text-primary-500"
>
  <i class="fi fi-sr-comment-smile" style="font-size: 21px;" />
</button>
<Modal />
<Toast buttonDismiss={"dark:bg-none ml-4 flex items-center"} />
