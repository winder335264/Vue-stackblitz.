import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'


const myApp = createApp(App)
myApp.use(VueAxios, axios) 
myApp.use(router)
myApp.use(store)
myApp.mount('#app')