<script setup lang="ts">
import { useMousePosition } from '@/modules/composables'

const { mouseX, mouseY } = useMousePosition()
</script>

<template>
  <slot
    :mouse-x="mouseX"
    :mouse-y="mouseY"
  />
</template>
