// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "blooog-19e82.firebaseapp.com",
  projectId: "blooog-19e82",
  storageBucket: "blooog-19e82.appspot.com",
  messagingSenderId: "557377361057",
  appId: "1:557377361057:web:9d14674086a06f08010ce0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);