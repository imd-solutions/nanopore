import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import './index.css'
import './style.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import router from "./router"
import App from './App.vue'

createApp(App).use(router).use(PrimeVue).mount('#app')
