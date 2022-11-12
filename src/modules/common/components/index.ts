import type { Component } from 'vue'
import AView from './AView.vue'
export { default as AView } from './AView.vue'

export const globalComponents: Record<string, Component> = {
  AView,
}

export { default as TheLayout } from './TheLayout.vue'
export { default as TheNav } from './TheNav.vue'
export { default as WithScaleLoadingSpinner } from './WithScaleLoadingSpinner.vue'
