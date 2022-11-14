<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { TheNav } from './modules/common/components'
import { useMousePosition } from './modules/composables-and-renderless-components'

const { listenMouseMove } = useMousePosition()

listenMouseMove()

const drawerOpened = ref(true)
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawerOpened">
      <TheNav />
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawerOpened = !drawerOpened"></v-app-bar-nav-icon>

      <v-toolbar-title>Vue playground</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
