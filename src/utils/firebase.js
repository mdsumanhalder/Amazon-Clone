import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqwQmOb3xqGb7UgFDBCKPQXCeJf4aV2Xc",
  authDomain: "clone-61f81.firebaseapp.com",
  projectId: "clone-61f81",
  storageBucket: "clone-61f81.appspot.com",
  messagingSenderId: "186862991618",
  appId: "1:186862991618:web:fef3dd7a6d19e66ca7ea1b",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
