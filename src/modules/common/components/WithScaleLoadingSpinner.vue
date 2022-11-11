<script setup lang="ts">
defineProps({
  loading: Boolean,
})
</script>

<template>
  <div class="with-scale-loading-spinner">
    <div
      class="content"
      :class="{ 'content-loading': loading }"
    >
      <slot />
    </div>

    <scale-loading-spinner
      v-show="loading"
      v-bind="$attrs"
    ></scale-loading-spinner>
  </div>
</template>

<style scoped>
.with-scale-loading-spinner {
  position: relative;
}

.content-loading {
  pointer-events: none;
  opacity: .66;
}

scale-loading-spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
