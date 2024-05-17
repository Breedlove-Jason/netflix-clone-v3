// Importing necessary functionalities from the Firebase SDK
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

// Firebase configuration setup
const firebaseConfig = {
  apiKey: "AIzaSyDiVSCKRT_MFAoLD9Iz_MAxb5WvyogIgeQ",
  authDomain: "netflix-clone-d76c3.firebaseapp.com",
  projectId: "netflix-clone-d76c3",
  storageBucket: "netflix-clone-d76c3.appspot.com",
  messagingSenderId: "468657109346",
  appId: "1:468657109346:web:d93eeb62736ffa2255943b",
};
// Initialize Firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firestore and Authentication
const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);
// Export Firebase authentication functions and Firestore database
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
export default db;
