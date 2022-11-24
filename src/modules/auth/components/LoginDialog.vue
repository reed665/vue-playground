<script setup lang="ts">
import { useAuth } from '../composables/useAuth'

const { showingLoginDialog, logIn } = useAuth()
</script>

<template>
  <v-dialog
    v-model="showingLoginDialog"
    width="400"
  >
    <form @submit.prevent>
      <v-card>
        <v-card-text>
          TODO: username and password text field here
        </v-card-text>

        <v-card-actions>
          <v-btn
            type="submit"
            @click="logIn"
          >
            Log In
          </v-btn>
        </v-card-actions>
      </v-card>
    </form>
  </v-dialog>
</template>
