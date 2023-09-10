// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTufmURlUT2-F2CqvG4eLUtqzQ68PV7Cg",
  authDomain: "chat-app-realtiem.firebaseapp.com",
  projectId: "chat-app-realtiem",
  storageBucket: "chat-app-realtiem.appspot.com",
  messagingSenderId: "655425922066",
  appId: "1:655425922066:web:913601cf5fdeb6727a24cb",
  measurementId: "G-XXYE95228Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);