<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { nanoid } from 'nanoid/non-secure'
import { RouteName } from '@/router/RouteName'

interface INavItem {
  id: string
  to: RouteLocationRaw
  text: string
}

const newNavItem = (text: string, to: RouteLocationRaw) => {
  return {
    id: nanoid(),
    text,
    to,
  }
}

const navData: INavItem[] = [
  newNavItem('Home', { name: RouteName.Home }),
  newNavItem('About', { name: RouteName.About }),
  newNavItem('Composables And Renderless Components', { name: RouteName.ComposablesAndRenderlessComponents }),
  newNavItem('Scale Form With Vuelidate', { name: RouteName.ScaleFormWithVueldiate }),
]
</script>

<template>
  <v-list nav>
    <v-list-item
      v-for="item of navData"
      :key="item.id"
      link
      :to="item.to"
    >
      {{ item.text }}
    </v-list-item>
  </v-list>
</template>
