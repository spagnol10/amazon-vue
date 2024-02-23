import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/input.css'

const app = createApp(App)

app.use(router) // Now router is defined

app.mount('#app')