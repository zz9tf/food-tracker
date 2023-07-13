// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeKNUNBD9lWGKXMKQMGnzt5QExRaEhEmI",
  authDomain: "food-tracker-64f89.firebaseapp.com",
  projectId: "food-tracker-64f89",
  storageBucket: "food-tracker-64f89.appspot.com",
  messagingSenderId: "552043809666",
  appId: "1:552043809666:web:f470c7a12b2293f7fe5d9b",
  measurementId: "G-L43NEGD115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {
    auth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged,
    // analytics
};