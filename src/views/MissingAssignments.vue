<template>
    <div>
      <h2>Missing Assignments</h2>
      <ul>
        <li v-for="assignment in missingAssignments" :key="assignment.id">
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
        completedAssignments: [],
      };
    },
    mounted() {
      // Fetch assignments from Firebase Realtime Database
      db.ref('assignments').on('value', (snapshot) => {
        this.assignments = snapshot.val();
      });
      
      // Fetch completed assignments from Firebase Realtime Database
      db.ref('completedAssignments').on('value', (snapshot) => {
        this.completedAssignments = snapshot.val();
      });
    },
    computed: {
      missingAssignments() {
        // Compare the assignments and completedAssignments arrays to find missing assignments
        return this.assignments.filter((assignment) => {
          return !this.completedAssignments.includes(assignment);
        });
      },
    },
  };
  </script>
  