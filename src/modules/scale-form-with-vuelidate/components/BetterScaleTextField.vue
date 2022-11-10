<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

defineEmits([
  'update:modelValue',
])
</script>

<template>
  <scale-text-field
    :value="modelValue"
    @scale-input="$emit('update:modelValue', $event.target.value)"
  ></scale-text-field>
</template>
