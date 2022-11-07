<script setup lang="ts">
import { RouterView } from 'vue-router'
import { TheLayout, TheNav } from './modules/common/components'
import { useMousePosition } from './modules/composables-and-renderless-components'

const { listenMouseMove } = useMousePosition()

listenMouseMove()
</script>

<template>
  <TheLayout>
    <template #nav>
      <TheNav />
    </template>

    <template #content>
      <RouterView />
    </template>
  </TheLayout>
</template>
