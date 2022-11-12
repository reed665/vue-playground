import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import toast from './plugins/vue-toasification'
import globalComponents from './plugins/global-components'
import './plugins/scale'
import './assets/main.css'

const app = createApp(App)

app
  .use(createPinia())
  .use(router)
  .use(globalComponents)
  .use(toast)

app.mount('#app')
