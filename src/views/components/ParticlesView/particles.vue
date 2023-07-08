<script setup lang="ts">
  import { options } from "./options.js";
  import { loadFull } from "tsparticles"
  const particlesInit = async (engine) => {
    await loadFull(engine)
  }

  const particlesLoaded = async (container) => {
    console.log('Particles container loaded', container)
  }
</script>

<template>
  <div class="all">
    <Particles id="tsparticles" class="login-particles" :particlesInit="particlesInit"
               :particlesLoaded="particlesLoaded" :options="options" />
  </div>
</template>

<style scoped lang="scss">
  .all{
    width: 100%;
    height: 100%;
  }
</style>