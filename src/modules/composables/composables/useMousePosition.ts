import { ref } from 'vue'
import { useEventListener } from '@/modules/common/composables'

export const useMousePosition = () => {
  const mouseX = ref(0)
  const mouseY = ref(0)
  
  useEventListener(window, 'mousemove', (event: MouseEvent) => {
    mouseX.value = event.pageX
    mouseY.value = event.pageY
  })

  return {
    mouseX,
    mouseY
  }
}
