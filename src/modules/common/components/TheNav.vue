<script setup lang="ts">
import { type RouteLocationRaw, RouterLink } from 'vue-router'
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
  <nav>
    <RouterLink
      v-for="item of navData"
      :key="item.id"
      :to="item.to"
    >
      {{ item.text }}
    </RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }

  nav a {
    padding: 0 1rem;
  }
}
</style>
