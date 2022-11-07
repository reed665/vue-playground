<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { RouteName } from '@/router/RouteName'

const navData = [
  {
    to: { name: RouteName.Home },
    text: 'Home',
  },
  {
    to: { name: RouteName.About },
    text: 'About',
  },
  {
    to: { name: RouteName.ComposablesAndRenderlessComponents },
    text: 'Composables And Renderless Components',
  },
]
</script>

<template>
  <nav>
    <RouterLink
      v-for="item of navData"
      :key="item.to.name"
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
