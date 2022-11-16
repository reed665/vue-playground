<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { TheNav } from './modules/common/components'
import { useEventListener } from './modules/common/composables'
import { useMousePosition } from './modules/composables-and-renderless-components'

const { listenMouseMove } = useMousePosition()

listenMouseMove()

const drawerOpened = ref(true)

const theme = ref(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

useEventListener(window.matchMedia('(prefers-color-scheme: dark)'), 'change', (event) => {
  const newThemeValue = event.matches ? 'dark' : 'light'

  theme.value = newThemeValue
})

// const toggleTheme = () => {
//   const newThemeValue = (theme.value === 'light' ? 'dark' : 'light')

//   theme.value = newThemeValue
// }
</script>

<template>
  <v-app :theme="theme">
    <v-navigation-drawer v-model="drawerOpened">
      <TheNav />
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawerOpened = !drawerOpened"></v-app-bar-nav-icon>
      <v-toolbar-title>Vue playground</v-toolbar-title>

      <!-- <v-btn
        :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="toggleTheme"
      >
        Toggle Theme
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
