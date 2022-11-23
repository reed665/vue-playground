<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { UseDark } from '@vueuse/components'
import { TheNav } from './modules/common/components'
import { LoginLogoutButton } from './modules/auth'
import { useMousePosition } from './modules/composables-and-renderless-components'

const { listenMouseMove } = useMousePosition()

listenMouseMove()

const drawerOpened = ref(true)
</script>

<template>
  <UseDark v-slot="{ isDark, toggleDark }">
    <v-app
      :theme="isDark ? 'dark' : 'light'"
      :data-mode="isDark ? 'dark' : 'light'"
    >
      <v-navigation-drawer v-model="drawerOpened">
        <TheNav />
      </v-navigation-drawer>

      <v-app-bar>
        <v-app-bar-nav-icon @click="drawerOpened = !drawerOpened"></v-app-bar-nav-icon>
        <v-toolbar-title>Vue playground</v-toolbar-title>

        <v-btn
          :prepend-icon="isDark ? 'mdi-weather-night' : 'mdi-weather-sunny'"
          @click="toggleDark()"
        >
          Toggle Theme
        </v-btn>

        <LoginLogoutButton />
      </v-app-bar>

      <v-main>
        <RouterView />
      </v-main>
    </v-app>
  </UseDark>
</template>
