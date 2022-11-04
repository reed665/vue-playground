<script setup lang="ts">
import { useMousePosition } from '../composables/useMousePosition'
import { AView } from '@/modules/common/components'

const { mouseX, mouseY } = useMousePosition()
</script>

<template>
  <AView class="composables">
    <template #heading>
      Composables
    </template>

    Mouse position is at: {{ mouseX }}, {{ mouseY }}
  </AView>
</template>
