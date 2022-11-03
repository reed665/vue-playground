<script setup lang="ts">
import { useMousePosition } from '../composables/useMousePosition'

const { mouseX, mouseY } = useMousePosition()
</script>

<template>
  <div class="ComposablesView">
    Mouse position is at: {{ mouseX }}, {{ mouseY }}
  </div>
</template>
