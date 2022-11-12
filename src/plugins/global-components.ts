import type { Plugin } from 'vue'
import { globalComponents } from '@/modules/common/components'

const plugin: Plugin = {
  install(app) {
    Object.keys(globalComponents).forEach((compName) => {
      app.component(compName, globalComponents[compName])
    })
  },
}

export default plugin
