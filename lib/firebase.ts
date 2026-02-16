import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzVB0Oi7m9ii9zviUiLtWjQc9hnTUj81A",

  authDomain: "vrm-29032.firebaseapp.com",

  projectId: "vrm-29032",

  storageBucket: "vrm-29032.firebasestorage.app",

  messagingSenderId: "733214099078",

  appId: "1:733214099078:web:4f5533e4d61274dd613307",

  measurementId: "G-NP2JPLFRQ3"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

