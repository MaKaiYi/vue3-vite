import { createApp } from 'vue'
import router from './router/router.js'
// ARCO
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
const pinia = createPinia()

createApp(App).use(router).use(pinia).use(ArcoVue).mount('#app')
