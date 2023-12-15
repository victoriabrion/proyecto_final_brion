import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBXuijVkMvaPkUBAN2eQn10qOFG6WlTSkM",
  authDomain: "ecommerce-brion.firebaseapp.com",
  projectId: "ecommerce-brion",
  storageBucket: "ecommerce-brion.appspot.com",
  messagingSenderId: "649066165417",
  appId: "1:649066165417:web:1f95d54c58e7086be5a5b8"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore (app)
