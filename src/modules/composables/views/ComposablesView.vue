<script setup lang="ts">
import { useMousePosition } from '../composables/useMousePosition'

const { mouseX, mouseY } = useMousePosition()
</script>

<template>
  <div class="composables">
    Mouse position is at: {{ mouseX }}, {{ mouseY }}
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .composables {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
