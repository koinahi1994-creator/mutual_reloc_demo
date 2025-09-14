// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your actual Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyBXanzu0YWrPToINnWa-NC7j9k41HmX6kA",
  authDomain: "mutualreloc.firebaseapp.com",
  projectId: "mutualreloc",
  storageBucket: "mutualreloc.firebasestorage.app",
  messagingSenderId: "449023461115",
  appId: "1:449023461115:web:5a6d7009b948c7d082925e",
  measurementId: "G-D38VQNHGC2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
