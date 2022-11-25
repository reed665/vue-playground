<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useAuth } from '../composables/useAuth'

const { showingLoginDialog, logIn } = useAuth()

const state = reactive({
  username: '',
  password: '',
})

const rules = {
  username: { required },
  password: { required },
}

const loadingForm = ref(false)

const loadForm = (timeout = 1000): Promise<void> => {
  loadingForm.value = true

  return new Promise((resolve) => {
    setTimeout(() => {
      loadingForm.value = false
      resolve()
    }, timeout)
  })
}

const v$ = useVuelidate(rules, state)

const resetForm = () => {
  v$.value.$reset()

  state.username = ''
  state.password = ''
}

const onFormSubmit = async () => {
  const formIsValid = await v$.value.$validate()
  if (!formIsValid)
    return

  await loadForm()
  resetForm()
  logIn()
}

watch(() => showingLoginDialog.value, () => {
  if (showingLoginDialog.value === false)
    resetForm()
})
</script>

<template>
  <v-dialog
    v-model="showingLoginDialog"
    width="400"
  >
    <v-card class="px-6 py-8">
      <v-form @submit.prevent="onFormSubmit">
        <v-text-field
          v-model="state.username"
          class="mb-2"
          :readonly="loadingForm"
          label="Username"
          :error-messages="v$.username.$error ? [v$.username.$errors[0].$message.toString()] : []"
        />

        <v-text-field
          v-model="state.password"
          type="password"
          class="mb-2"
          :readonly="loadingForm"
          label="Password"
          :error-messages="v$.password.$errors.map(item => item.$message.toString())"
        />

        <v-btn
          type="submit"
          size="large"
          block
          :loading="loadingForm"
          :disabled="loadingForm"
        >
          Log In
        </v-btn>
      </v-form>
    </v-card>
  </v-dialog>
</template>
