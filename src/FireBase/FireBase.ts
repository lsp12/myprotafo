import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBwgY0rX88DKHXzFMr0-E76tsYei2FkKhQ",
  authDomain: "briefcase-3d5e0.firebaseapp.com",
  projectId: "briefcase-3d5e0",
  storageBucket: "briefcase-3d5e0.appspot.com",
  messagingSenderId: "345085214937",
  appId: "1:345085214937:web:c7ed91da5ddc5151947ec8",
  measurementId: "G-2JBMDJ0663"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);