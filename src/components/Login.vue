<template>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" name="email" required />
      <input type="password" v-model="password" placeholder="Password" name="password" required />
      <button type="submit">Login</button>
    </form>
</template>
  
<script>
  export default {
    data(){
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      async login() {
        const email = this.email;
        const password = this.password;
  
        const response = await fetch('https://todo-mongo-vue-test-app.onrender.com/user/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
          throw new Error('Login failed');
        }
        
        console.log(response)

        const data = await response.json();

        console.log(data)
        const token = data.token;
  
        // Store the token in localStorage
        localStorage.setItem('jwt_token', token);
        const userData = data.user
        localStorage.setItem('userData', JSON.stringify(userData))
        console.log(token)
        this.$router.push('/todo')
      },
    },
  };
</script>
  