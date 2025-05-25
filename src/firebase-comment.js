import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVtsurwPkTeZHsc9xYoZu0C3_9d-wMXas",
  authDomain: "yash-portfolio-cc4b2.firebaseapp.com",
  projectId: "yash-portfolio-cc4b2",
  storageBucket: "yash-portfolio-cc4b2.firebasestorage.app",
  messagingSenderId: "50706652231",
  appId: "1:50706652231:web:d7e5b4fccfe206e61aa562",
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, "comments-app");
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
