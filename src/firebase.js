import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "appbodega-11ef8.firebaseapp.com",
  projectId: "appbodega-11ef8",
  storageBucket: "appbodega-11ef8.appspot.com",
  messagingSenderId: "957542915284",
  appId: "1:957542915284:web:a386bc30ffde1d4b866f41",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
