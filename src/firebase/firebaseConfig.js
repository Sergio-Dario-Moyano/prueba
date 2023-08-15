// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0kBRRWpQGJd8uSgdNmFC26vRURjmkwto",
  authDomain: "pruebadb-c2aa7.firebaseapp.com",
  databaseURL: "https://pruebadb-c2aa7-default-rtdb.firebaseio.com",
  projectId: "pruebadb-c2aa7",
  storageBucket: "pruebadb-c2aa7.appspot.com",
  messagingSenderId: "688636218127",
  appId: "1:688636218127:web:a2695574a8bfd2d5c18c7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)