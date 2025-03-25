// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-portofolio-animation.firebaseapp.com",
  projectId: "react-portofolio-animation",
  storageBucket: "react-portofolio-animation.firebasestorage.app",
  messagingSenderId: "955892235737",
  appId: "1:955892235737:web:06f289f78f16609261adc8",
  measurementId: "G-F5TDSHGR5S",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { app, db };
