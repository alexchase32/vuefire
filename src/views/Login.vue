<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Login with Firebase</button>
      </form>
      <p>Don't have an account? <router-link to="/signup">Signup</router-link></p>
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
      login() {
        auth.signInWithEmailAndPassword(this.email, this.password)
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