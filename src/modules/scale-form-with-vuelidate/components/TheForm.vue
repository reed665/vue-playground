<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import FormControl from '../components/FormControl.vue'
import BetterScaleTextField from '../components/BetterScaleTextField.vue'
import { WithScaleLoadingSpinner } from '@/modules/common/components'

const emit = defineEmits([
  'formSubmit',
])

const state = reactive({
  firstName: '',
  lastName: '',
})

const rules = {
  firstName: { required },
  lastName: { required },
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

  state.firstName = ''
  state.lastName = ''
}

const onFormSubmit = async () => {
  const formIsValid = await v$.value.$validate()
  if (!formIsValid)
    return

  await loadForm()
  resetForm()

  emit('formSubmit')
}
</script>

<template>
  <form @submit.prevent="onFormSubmit">
    <WithScaleLoadingSpinner
      size="large"
      :loading="loadingForm"
    >
      <FormControl>
        <BetterScaleTextField
          v-model="state.firstName"
          label="First name"
          :invalid="v$.firstName.$error"
          :helper-text="v$.firstName.$error ? v$.firstName.$errors[0].$message : ''"
        />
      </FormControl>

      <FormControl>
        <BetterScaleTextField
          v-model="state.lastName"
          label="Last name"
          :invalid="v$.lastName.$error"
          :helper-text="v$.lastName.$error ? v$.lastName.$errors[0].$message : ''"
        />
      </FormControl>

      <scale-button type="submit">
        Submit
      </scale-button>

      <scale-button
        type="button"
        variant="secondary"
        style="margin-left: var(--scl-spacing-16);"
        @click="resetForm"
      >
        Reset
      </scale-button>
    </WithScaleLoadingSpinner>
  </form>
</template>
