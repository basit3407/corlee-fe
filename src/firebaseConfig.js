// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0BK6ojLen63-w1WuOn-bRENMtyiovWR8",
  authDomain: "corlee-85a80.firebaseapp.com",
  projectId: "corlee-85a80",
  storageBucket: "corlee-85a80.appspot.com",
  messagingSenderId: "81090684417",
  appId: "1:81090684417:web:61c6f5abb9414067968200",
  measurementId: "G-G3JEN2Z8MM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
