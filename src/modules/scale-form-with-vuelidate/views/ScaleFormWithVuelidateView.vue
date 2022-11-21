<script setup lang="ts">
import { ref } from 'vue'
import TheForm from '../components/TheForm.vue'

const showingSnackbar = ref(false)
</script>

<template>
  <AView>
    <template #heading>
      Scale form with Vuelidate
    </template>

    <TheForm @form-submit="showingSnackbar = true" />
  </AView>

  <v-snackbar v-model="showingSnackbar">
    Submitted!

    <template #actions>
      <v-btn
        type="button"
        variant="text"
        color="pink"
        @click="showingSnackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped>
form {
  max-width: 300px;
  margin-top: var(--scl-spacing-16);
}
</style>
