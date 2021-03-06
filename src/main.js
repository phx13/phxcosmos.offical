import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/css/style.css"
import "font-awesome/css/font-awesome.min.css"

createApp(App).use(store).use(router).mount('#app')
