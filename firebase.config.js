import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA2AWLKab0iilCyrGYWzxjoWjXybH-X3bI",
  authDomain: "events-board-8db2a.firebaseapp.com",
  databaseURL:
    "https://events-board-8db2a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "events-board-8db2a",
  storageBucket: "events-board-8db2a.appspot.com",
  messagingSenderId: "383148792132",
  appId: "1:383148792132:web:9d012d3312ae96ff24df11",
  measurementId: "G-87H1P3C3CN",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
