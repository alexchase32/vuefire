import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
        apiKey: "AIzaSyDPIISXPCQJk2A-qdQpetXEQdEH0741V2U",
        authDomain: "wproject-fc9d3.firebaseapp.com",
        databaseURL: "https://wproject-fc9d3-default-rtdb.firebaseio.com",
        projectId: "wproject-fc9d3",
        storageBucket: "wproject-fc9d3.appspot.com",
        messagingSenderId: "1076758167113",
        appId: "1:1076758167113:web:7a4a8ca966c5aa33c80998",
        measurementId: "G-TQ3YQE1JRR"
      };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();