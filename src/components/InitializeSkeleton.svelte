<script lang="ts">
  import {
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
    hide,
    arrow,
  } from "@floating-ui/dom"

  import { storePopup } from "@skeletonlabs/skeleton"
  storePopup.set({
    computePosition,
    autoUpdate,
    offset,
    shift,
    hide,
    flip,
    arrow,
  })
</script>

<slot />
