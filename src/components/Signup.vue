<template>
    <form @submit.prevent="handleSubmit">
      <input type="email" v-model="email" placeholder="Email" name="email" required />
      <input type="password" v-model="password" placeholder="Password" name="password" required />
      <input type="text" v-model="username" placeholder="Username" name="username" />
      <button type="submit">Sign Up</button>
    </form>
  </template>
  
  <script>
  import signupForm from '../utils/signupForm.js';
  
  export default {
    setup() {
      const { email, password, username, submitSignup } = signupForm();
  
      const handleSubmit = () => {
        submitSignup();
      };
  
      return {
        email,
        password,
        username,
        handleSubmit,
      };
    },
  };
  </script>

<style>
</style>