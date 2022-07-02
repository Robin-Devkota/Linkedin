import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAFDwxHEWD3bbN08S9IfVhlsnqkrThHQaQ",
  authDomain: "linkedin-clone-4a5ec.firebaseapp.com",
  projectId: "linkedin-clone-4a5ec",
  storageBucket: "linkedin-clone-4a5ec.appspot.com",
  messagingSenderId: "767843831455",
  appId: "1:767843831455:web:1e048ed0c1725597e79caa",
  measurementId: "G-K69K2HWQEQ"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export  {db, auth};
