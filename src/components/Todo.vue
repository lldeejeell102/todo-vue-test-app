<template>
    <p v-if="!token">You are not Logged in</p>
    <button v-if="!token" @click="redirectLogin">Login</button>
    <button v-if="!token" @click="redirectSignup">Signup</button>
    <p v-if="token">You are logged in as {{ userData.username }}</p>
    <p v-if="token">You're emails is {{ userData.email }}</p>
    <button v-if="token" @click="fetchTodos">Fetch Todos</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos" :key="todo.id">{{ todo.name }}</li>
    </ul>
  </template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const redirectLogin = () => {
    router.push('/login')
}

const redirectSignup = () => {
    router.push('/signup')
}

const token = ref(localStorage.getItem('jwt_token'));
const userData = ref(JSON.parse(localStorage.getItem('userData')) || null)
console.log(userData)
console.log(token)

const todos = ref([])

const fetchTodos = async () => {
    try {
        const username = userData.value.username
        const response = await fetch(`https://todo-mongo-vue-test-app.onrender.com/todo?username=${username}`, {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch todos');
        }

        const data = await response.json();
        todos.value = data.todo;
        // console.log(data.todo)
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}


</script>