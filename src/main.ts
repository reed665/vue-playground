import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import toast from './plugins/vue-toasification'
import globalComponents from './plugins/global-components'
import { vuetify } from './plugins/vuetify'
import './plugins/scale'

const app = createApp(App)

app
  .use(createPinia())
  .use(router)
  .use(globalComponents)
  .use(vuetify)
  .use(toast)

app.mount('#app')
