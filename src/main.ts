import 'sweetalert2/dist/sweetalert2.min.css'
import Vue3Toastify, {type ToastContainerOptions} from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(Vue3Toastify)
app.use(VueAxios, axios)
app.use(router)

app.mount('#app')
