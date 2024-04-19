
import { ref } from 'vue';


export default function() {
    const email = ref('');
    const password = ref('');
    const username = ref('');
    

    const submitSignup = async () => {
      try {
        const response = await fetch('https://todo-mongo-vue-test-app.onrender.com/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.value,
            password: password.value,
            username: username.value,
          }),
        });

        if (!response.ok) {
          throw new Error(`Signup failed with status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Signup response:', data);
        // Handle successful signup (e.g., display success message, redirect)
      } catch (error) {
        console.error('Error during signup:', error);
        // Handle signup error (e.g., display error message)
      }
    };

    return {
      email,
      password,
      username,
      submitSignup,
    };
  }
