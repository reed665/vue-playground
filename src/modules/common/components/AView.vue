<script setup lang="ts">
</script>

<template>
  <div class="a-view">
    <h1 v-if="$slots.heading">
      <slot name="heading" />
    </h1>

    <slot />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .a-view {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
}
</style>
