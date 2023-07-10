<template>
    <div>
      <h2>Extra Credit Assignments</h2>
      <ul>
        <li v-for="assignment in extraCreditAssignments" :key="assignment.id">
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
        extraCreditAssignments: [],
      };
    },
    mounted() {
      // Fetch extra credit assignments from Firebase Realtime Database
      db.ref('extraCreditAssignments').on('value', (snapshot) => {
        this.extraCreditAssignments = snapshot.val();
      });
    },
  };
  </script>
  