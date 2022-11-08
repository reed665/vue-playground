import type { Plugin } from 'vue'
import type { PluginOptions } from 'vue-toastification'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const plugin: Plugin = {
  install(app) {
    const options: PluginOptions = {

    }

    app.use(Toast, options)
  },
}

export default plugin
