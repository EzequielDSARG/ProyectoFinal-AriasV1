import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const { VITE_FIREBASE_API_KEY, VITE_FIREBASE_AUTH_DOMAIN, VITE_FIREBASE_PROJECT_ID, VITE_FIREBASE_STORAGE_BUCKET, VITE_FIREBASE_MESSAGING_SENDER_ID, VITE_FIREBASE_APP_ID } = import.meta.env;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqwk5WEpahmor_aGqSSz-v3GKGNDJrnhs",
  authDomain: "react-items-981ed.firebaseapp.com",
  projectId: "react-items-981ed",
  storageBucket: "react-items-981ed.firebasestorage.app",
  messagingSenderId: "226317623836",
  appId: "1:226317623836:web:85d013b0e579a79c6775d9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


