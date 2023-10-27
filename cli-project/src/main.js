import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import  FoodItem  from './components/FoodItem.vue'

const app = createApp(App)
app.use(router)

app.component('foodItem', FoodItem)


app.mount('#app')
