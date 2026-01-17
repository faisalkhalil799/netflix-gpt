// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDviuGRN7emDA9C1EhmgvOSezSO1rjvfso",
  authDomain: "netflix-gpt-webapp.firebaseapp.com",
  projectId: "netflix-gpt-webapp",
  storageBucket: "netflix-gpt-webapp.firebasestorage.app",
  messagingSenderId: "346069374438",
  appId: "1:346069374438:web:a3f1a3b0ece4893e513227",
  measurementId: "G-56JEJ7H66T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
