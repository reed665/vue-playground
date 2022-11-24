<script setup lang="ts">
import { useAuth } from '../composables/useAuth'

const { isLoggedIn, showLoginDialog, logOut } = useAuth()
</script>

<template>
  <v-btn
    v-if="isLoggedIn"
    type="button"
    @click="logOut"
  >
    Log out
  </v-btn>

  <v-btn
    v-else
    type="button"
    @click="showLoginDialog"
  >
    Log in
  </v-btn>
</template>
