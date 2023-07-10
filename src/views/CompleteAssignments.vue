<template>
    <div>
      <h2>Complete Assignments</h2>
      <ul>
        <li v-for="assignment in assignments" :key="assignment.id">
          {{ assignment.title }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { db } from '../firebase';
  
  export default {
    data() {
      return {
        assignments: [],
      };
    },
    mounted() {
      // Fetch assignments from Firebase Realtime Database
      db.ref('assignments').on('value', (snapshot) => {
        this.assignments = snapshot.val();
      });
    },
  };
  </script>
  