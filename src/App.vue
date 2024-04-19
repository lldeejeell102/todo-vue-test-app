<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/todo">Todo List</router-link> |
      <router-link to="/logout">Logout</router-link>
    </nav>
    <RouterView/>
  </div>
</template>


<script>
import { RouterView } from 'vue-router';
import Signup from './components/Signup.vue'
import Logout from './components/Logout.vue'
import Login from './components/Login.vue'
  export default {
    name: "App",
    components: {
      Signup,
      Login,
      Logout,
    }
  }
</script>


<style scoped>
</style>