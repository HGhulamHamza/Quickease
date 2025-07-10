// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUbDCCgZuA3f-NL-xMnYs1NO1fPLHnq24",
  authDomain: "quickease-af8a6.firebaseapp.com",
  projectId: "quickease-af8a6",
  storageBucket: "quickease-af8a6.firebasestorage.app",
  messagingSenderId: "146109931685",
  appId: "1:146109931685:web:c680bc48b090ebbba7ed4c",
  measurementId: "G-LRVCF11PE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);