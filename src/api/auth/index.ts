import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBfFkqft0rmLsgvaWGxVWqDy8epSB4EolM",
  authDomain: "taskmanager-be5fe.firebaseapp.com",
  projectId: "taskmanager-be5fe",
  storageBucket: "taskmanager-be5fe.appspot.com",
  messagingSenderId: "36218241560",
  appId: "1:36218241560:web:6fc71f15720a057d90b96d",
  measurementId: "G-J4LZGYYTSJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
