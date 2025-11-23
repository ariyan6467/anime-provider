// Import the functions you need from the SDKs you need
"use client";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKxiW64e0UxBX3kCF9DTCJehjk2ZjHqdo",
  authDomain: "anime-provider.firebaseapp.com",
  projectId: "anime-provider",
  storageBucket: "anime-provider.firebasestorage.app",
  messagingSenderId: "550875936814",
  appId: "1:550875936814:web:27ae68de8c1c913275c7bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);