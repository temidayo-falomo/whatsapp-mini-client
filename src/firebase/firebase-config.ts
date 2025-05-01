// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const APIKEY = process.env.REACT_APP_APIKEY;
const AUTHDOMAIN = process.env.REACT_APP_AUTHDOMAIN;
const PROJECTID = process.env.REACT_APP_PROJECTID;
const STORAGEBUCKET = process.env.REACT_APP_STORAGEBUCKET;
const MESSAGINGSENDERID = process.env.REACT_APP_MESSAGINGSENDERID;
const APPID = process.env.REACT_APP_APPID;
const MEASUREMENTID = process.env.REACT_APP_MEASUREMENTID;


const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
