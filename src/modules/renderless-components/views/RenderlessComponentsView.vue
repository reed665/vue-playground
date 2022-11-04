<script setup lang="ts">
import MouseTracker from '../components/MouseTracker.vue'
import { AView } from '@/modules/common/components'
</script>

<template>
  <AView class="renderless-components">
    <template #heading>
      Renderless Components
    </template>

    <MouseTracker v-slot="{ mouseX, mouseY }">
      Mouse position is at: {{ mouseX }}, {{ mouseY }}
    </MouseTracker>
  </AView>
</template>
