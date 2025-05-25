import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVtsurwPkTeZHsc9xYoZu0C3_9d-wMXas",
  authDomain: "yash-portfolio-cc4b2.firebaseapp.com",
  projectId: "yash-portfolio-cc4b2",
  storageBucket: "yash-portfolio-cc4b2.firebasestorage.app",
  messagingSenderId: "50706652231",
  appId: "1:50706652231:web:d7e5b4fccfe206e61aa562",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
