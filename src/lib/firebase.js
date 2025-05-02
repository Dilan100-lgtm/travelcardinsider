// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXlV4US6QfgIh7Y7j2uJ-r6dxqoad1dEk",
  authDomain: "travelcardinsider.firebaseapp.com",
  projectId: "travelcardinsider",
  storageBucket: "travelcardinsider.firebasestorage.app",
  messagingSenderId: "149061612901",
  appId: "1:149061612901:web:d626ee8689f7da6e685d8c",
  measurementId: "G-V3S6KKPXBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);