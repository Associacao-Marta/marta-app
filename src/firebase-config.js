// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLzYkxn2oRSGBOyYqzb57tETxqxFQKyCQ",
  authDomain: "associacao-marta.firebaseapp.com",
  projectId: "associacao-marta",
  storageBucket: "associacao-marta.appspot.com",
  messagingSenderId: "539197330514",
  appId: "1:539197330514:web:edb2ab85b4706a0493bb8b",
  measurementId: "G-MQ0Y7MW57E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();