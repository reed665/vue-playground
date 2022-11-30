<script setup lang="ts">
import { useAuth } from '../composables/useAuth'
import { RouteName } from '@/router/RouteName'

const { isLoggedIn, authUser, showLoginDialog } = useAuth()
</script>

<template>
  <v-btn
    v-if="isLoggedIn"
    type="button"
    :to="{ name: RouteName.Profile }"
  >
    Hello, {{ authUser.username }}!
  </v-btn>

  <v-btn
    v-else
    type="button"
    @click="showLoginDialog"
  >
    Log in
  </v-btn>
</template>
