<script setup lang="ts">
import { AView } from '@/modules/common/components'
import MouseTracker from '../components/MouseTracker.vue'
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
