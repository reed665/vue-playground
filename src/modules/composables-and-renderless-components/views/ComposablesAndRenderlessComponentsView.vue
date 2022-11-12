<script setup lang="ts">
import MouseTracker from '../components/MouseTracker.vue'
</script>

<template>
  <AView class="composables-and-renderless-components">
    <template #heading>
      Composables and Renderless Components
    </template>

    <MouseTracker v-slot="{ mouseX, mouseY }">
      Mouse position is at: {{ mouseX }}, {{ mouseY }}
    </MouseTracker>
  </AView>
</template>
