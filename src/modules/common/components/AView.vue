<template>
  <div class="a-view">
    <slot />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .a-view {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
