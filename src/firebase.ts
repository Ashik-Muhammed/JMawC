import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Jayamahesh Ayurveda Firebase Configuration
export const firebaseConfig = {
  apiKey: "AIzaSyD4vcBsKC94fqGOzNLTx71iDTD8bMaOSIE",
  authDomain: "jayamahesh.firebaseapp.com",
  projectId: "jayamahesh",
  storageBucket: "jayamahesh.firebasestorage.app",
  messagingSenderId: "833148622530",
  appId: "1:833148622530:web:c6fd094403c58353f34d5b",
  measurementId: "G-WTH1ZYWGYN"
};

// Initialize Firebase App
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics (safe for browser environments)
export const analyticsPromise = typeof window !== 'undefined'
  ? isSupported().then((supported) => supported ? getAnalytics(app) : null).catch(() => null)
  : Promise.resolve(null);
