import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnVGh9WtkEGrRwG7XJNaxiOm7g6epDy8g",
  authDomain: "e-commerce-cf8e1.firebaseapp.com",
  projectId: "e-commerce-cf8e1",
  storageBucket: "e-commerce-cf8e1.appspot.com",
  messagingSenderId: "295335178171",
  appId: "1:295335178171:web:9ae7a4a2383c50d9625e9e"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

