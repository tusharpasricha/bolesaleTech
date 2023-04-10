// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEoMrAp7m6Mj-d4-S56-d9cEj9-T2KFX8",
  authDomain: "bolesale-faf6f.firebaseapp.com",
  databaseURL: "https://bolesale-faf6f-default-rtdb.firebaseio.com",
  projectId: "bolesale-faf6f",
  storageBucket: "bolesale-faf6f.appspot.com",
  messagingSenderId: "499514626702",
  appId: "1:499514626702:web:6d645f1e6a7d2c5d1aafdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()

export default app;