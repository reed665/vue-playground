import type AView from './modules/common/components/AView.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AView: typeof AView
  }
}
