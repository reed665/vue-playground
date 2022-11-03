import { ref } from 'vue'
import { useEventListener } from '@/modules/common/composables'

const mouseX = ref(0)
const mouseY = ref(0)

export const useMousePosition = () => {
  const listenMouseMove = () => {
    useEventListener(window, 'mousemove', (event: MouseEvent) => {
      mouseX.value = event.pageX
      mouseY.value = event.pageY
    })
  }
  
  return {
    mouseX,
    mouseY,
    listenMouseMove,
  }
}
