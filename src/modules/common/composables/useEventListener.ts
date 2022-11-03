import { onMounted, onUnmounted } from 'vue'

export const useEventListener = (target: EventTarget, event: string, callback: (event: any) => void) => {
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.addEventListener(event, callback))
}
