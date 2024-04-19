<template>
    <p v-if="token">You are logged in as {{ username }}</p>
</template>

<script setup>
import { ref } from 'vue';

const token = ref(localStorage.getItem('jwt_token'));

// Optional: Fetch user data using the token if needed
const username = ref('');
const fetchUserData = async () => {
    if (token.value) {
        // ... fetch user data using the token
        // Update the username ref with fetched data
    }
};

fetchUserData(); // Call the function on component mount (optional)

</script>