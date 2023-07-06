// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqSv8xsqvIuMdfNgf4yb8cKoG7RRXaxUM",
  authDomain: "bustracker-125b0.firebaseapp.com",
  databaseURL: "https://bustracker-125b0-default-rtdb.firebaseio.com",
  projectId: "bustracker-125b0",
  storageBucket: "bustracker-125b0.appspot.com",
  messagingSenderId: "693399239523",
  appId: "1:693399239523:web:027c53ef5facb2a0f8b156",
  measurementId: "G-P17SLY7Z7Y"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
export default database;