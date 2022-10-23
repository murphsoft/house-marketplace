// Copy the Firebase info from https://console.firebase.google.com/u/0/project/house-marketplace-app-f0fad/overview

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Which I did right here...
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDADgb381kY21NDZ6eiGjo89MrdHZLV84",
  authDomain: "house-marketplace-app-f0fad.firebaseapp.com",
  projectId: "house-marketplace-app-f0fad",
  storageBucket: "house-marketplace-app-f0fad.appspot.com",
  messagingSenderId: "690961744728",
  appId: "1:690961744728:web:e42fb86825a3eda2bc9b2d"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
export const db = getFirestore()