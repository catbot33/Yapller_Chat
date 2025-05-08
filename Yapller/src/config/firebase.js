
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBGGOkUtQBeSUS0VkDEPiWkG5_7LGDU-8k",
  authDomain: "yapller-fd032.firebaseapp.com",
  projectId: "yapller-fd032",
  storageBucket: "yapller-fd032.firebasestorage.app",
  messagingSenderId: "948349389805",
  appId: "1:948349389805:web:f5db67d626d1f76b1bf5e4",
  measurementId: "G-PBZQ53YPQJ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()