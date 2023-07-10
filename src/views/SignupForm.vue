<template>
    <div>
      <h2>Signup</h2>
      <form @submit.prevent="signup">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Signup with Firebase</button>
      </form>
    </div>
  </template>
  
  <script>
  import { auth } from '../firebase';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      signup() {
        auth.createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.push('/dashboard');
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>  