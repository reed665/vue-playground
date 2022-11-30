<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'
import { RouteName } from '@/router/RouteName'

const router = useRouter()
const { authUser, logOut } = useAuth()

const logOutAndGoHome = () => {
  logOut()
  router.push({ name: RouteName.Home })
}
</script>

<template>
  <AView class="profile-view">
    <p>Username: <strong>{{ authUser.username }}</strong></p>
    <p>User roles: <strong>{{ authUser.userRoles.join(', ') }}</strong></p>

    <v-btn
      type="button"
      class="mt-4"
      @click="logOutAndGoHome"
    >
      Log out
    </v-btn>
  </AView>
</template>
