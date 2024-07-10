// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import Lara from '@primevue/themes/lara'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: Lara
  }
})
app.use(router)

app.mount('#app')
