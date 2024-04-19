import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import Todo from '../components/Todo.vue'
import Logout from '../components/Logout.vue'


// console.log(process.env.VUE_APP_DATABASE_URL)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/todo', name: 'Todo', component: Todo },
  { path: '/logout', name: 'Logout', component: Logout },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
