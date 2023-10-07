<script>
  // import img from '$lib/images/me.jpg';
  let isExpanded = false

  function toggleExpand() {
    isExpanded = !isExpanded
  }
</script>

<div
  class="card-content dark:bg-zinc-900 rounded-lg p-4 relative"
  style="margin-top: 40px;"
>
  <div class="avatar">
    <img src={""} class="object-center" alt="" />
  </div>

  <div class="flex flex-col gap-4" style="margin-top: 40px;">
    <div
      class="md:text-md-h3 text-primary-500 dark:text-primary-500 text-center"
    >
      Lorem Ipsum
    </div>
    <p
      class={`md:text-md-subtitle-h5 text-center  ${
        isExpanded ? "" : "line-clamp-3"
      }`}
    >
      🚀 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
      enim a est porttitor, vel ornare erat auctor. Vivamus fringilla, arcu quis
      ullamcorper lacinia, massa urna porttitor
      <br /><br />
      🎓 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium enim
      a est porttitor, vel ornare erat auctor. Vivamus fringilla, arcu quis ullamcorper
      lacinia, massa urna porttitor
      <br /><br />
      💼 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium enim
      a est porttitor, vel ornare erat auctor. Vivamus fringilla, arcu quis ullamcorper
      lacinia, massa urna porttitor
      <br /><br />
      💡 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium enim
      a est porttitor, vel ornare erat auctor. Vivamus fringilla, arcu quis ullamcorper
      lacinia, massa urna porttitor
      <br /><br />
      🤝 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium enim
      a est porttitor, vel ornare erat auctor. Vivamus fringilla, arcu quis ullamcorper
      lacinia, massa urna porttitor
    </p>
    <div class="text-end text-primary">
      <!-- svelte-ignore a11y-interactive-supports-focus -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-missing-attribute -->
      <a role="button" on:click={toggleExpand}>
        {#if isExpanded}
          Ocultar
        {:else}
          Leer más
        {/if}
      </a>
    </div>
  </div>
</div>

<style>
  .avatar {
    position: absolute;
    top: 0;
    width: 110px;
    height: 110px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    left: 50%;
    top: -55px;
    transform: translateX(-50%);
    overflow: hidden;
  }

  .box-shadow {
    box-shadow: 0 6px 10px #0000002c;
  }
</style>
