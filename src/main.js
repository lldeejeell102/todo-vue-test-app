import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// require('dotenv').config()

// app.config.globalProperties.databaseUrl = process.env.VUE_APP_DATABASE_URL

createApp(App).use(router).mount('#app')