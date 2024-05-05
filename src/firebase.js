import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiVSCKRT_MFAoLD9Iz_MAxb5WvyogIgeQ",
  authDomain: "netflix-clone-d76c3.firebaseapp.com",
  projectId: "netflix-clone-d76c3",
  storageBucket: "netflix-clone-d76c3.appspot.com",
  messagingSenderId: "468657109346",
  appId: "1:468657109346:web:d93eeb62736ffa2255943b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();
// const auth = getAuth(firebaseApp);
const auth = getAuth();
// console.log(auth);
export { auth, createUserWithEmailAndPassword };
export default db;
