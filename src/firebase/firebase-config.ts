// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlB6nGrGTK6kyB32iG8XilVMpR1-sjzbM",
  authDomain: "whatsapp-clone-a81f3.firebaseapp.com",
  projectId: "whatsapp-clone-a81f3",
  storageBucket: "whatsapp-clone-a81f3.appspot.com",
  messagingSenderId: "607824568927",
  appId: "1:607824568927:web:de60e28220d0f078f931ea",
  measurementId: "G-0N7MRP3NQ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
