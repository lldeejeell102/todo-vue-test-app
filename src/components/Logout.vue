<template>
    <h1>You are logged out</h1>
</template>
  
  <script>
  export default {
    mounted() {
      this.logout()
    },
    methods: {
      logout() {
        // Optional: Send a logout request to the server (if applicable)
        // fetch('/logout') // Example logout request
  
        // Clear the token from localStorage
        localStorage.removeItem('jwt_token');
  
        // Handle successful logout (redirect, etc.)
      },
    },
  };
  </script>
  