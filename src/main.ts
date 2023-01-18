import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import Previewer from 'virtual:vue-component-preview'
import App from './App.vue'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import '@/assets/styles/app.scss'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Previewer)
app.mount('#app')
