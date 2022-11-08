import '@telekom/scale-components-neutral/dist/scale-components/scale-components.css'
import {
  applyPolyfills,
  defineCustomElements,
} from '@telekom/scale-components-neutral/loader'

applyPolyfills().then(() => {
  defineCustomElements(window)
})
