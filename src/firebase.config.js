import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKpr7Eqb9MdQqtOjkEHJfUsCVFmZHOF18",
  authDomain: "house-marketplace-8b723.firebaseapp.com",
  projectId: "house-marketplace-8b723",
  storageBucket: "house-marketplace-8b723.firebasestorage.app",
  messagingSenderId: "527487040797",
  appId: "1:527487040797:web:f6650b0558308f687975f4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();