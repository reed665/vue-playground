<script setup lang="ts">
import { AView } from '@/modules/common/components'
import { useMousePosition } from '../composables/useMousePosition'

const { mouseX, mouseY } = useMousePosition()
</script>

<template>
  <AView class="composables">
    Mouse position is at: {{ mouseX }}, {{ mouseY }}
  </AView>
</template>
