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
.a-view {
  padding: 12px;
}

@media (min-width: 1024px) {
  .a-view {
    padding: 24px;
  }
}
</style>
