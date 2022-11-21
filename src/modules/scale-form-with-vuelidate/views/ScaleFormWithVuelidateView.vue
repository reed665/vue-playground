<script setup lang="ts">
import { useToast } from 'vue-toastification'
import TheForm from '../components/TheForm.vue'

const toast = useToast()

const onFormSubmit = () => {
  toast('Submitted!')
}
</script>

<template>
  <AView>
    <template #heading>
      Scale form with Vuelidate
    </template>

    <TheForm @form-submit="onFormSubmit" />
  </AView>
</template>

<style scoped>
form {
  max-width: 300px;
  margin-top: var(--scl-spacing-16);
}
</style>
