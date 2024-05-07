import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfFkqft0rmLsgvaWGxVWqDy8epSB4EolM",
  authDomain: "taskmanager-be5fe.firebaseapp.com",
  projectId: "taskmanager-be5fe",
  storageBucket: "taskmanager-be5fe.appspot.com",
  messagingSenderId: "36218241560",
  appId: "1:36218241560:web:6fc71f15720a057d90b96d",
  measurementId: "G-J4LZGYYTSJ",
  // apiKey: process.env.FIREBASE_API_KEY,
  // measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);
export const storage = getStorage(app);
