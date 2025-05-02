// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration read from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID // Optional
};

// Initialize Firebase (ensure it only runs once)
let app;
let analytics;
// Check if Firebase has already been initialized
// This check might be necessary depending on how your app imports this file
if (typeof window !== 'undefined' && !initializeApp.apps.length) {
  try {
    app = initializeApp(firebaseConfig);
    // Check if analytics is supported in the browser environment
    if (typeof getAnalytics === "function") {
      analytics = getAnalytics(app);
    }
  } catch (error) {
    console.error("Firebase initialization error:", error);
  }
}

export { app, analytics, firebaseConfig }; // Export config if needed elsewhere