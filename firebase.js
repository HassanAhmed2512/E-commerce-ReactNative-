// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app';
// import 'firebase/auth';

import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA-atbyw-l92PBR_J6fVwBV4_8i0QPQGts",
  authDomain: "react-native-auth-8fa1b.firebaseapp.com",
  projectId: "react-native-auth-8fa1b",
  storageBucket: "react-native-auth-8fa1b.appspot.com",
  messagingSenderId: "971567626598",
  appId: "1:971567626598:web:e0d7aff57494615174b0a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export { auth };


