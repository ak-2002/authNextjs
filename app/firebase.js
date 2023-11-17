// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE-abOPzjxNkt9avqWtcjRsFJH1ZWSky4",
  authDomain: "nextjs-auth-project-b065a.firebaseapp.com",
  projectId: "nextjs-auth-project-b065a",
  storageBucket: "nextjs-auth-project-b065a.appspot.com",
  messagingSenderId: "1091786337635",
  appId: "1:1091786337635:web:013d48c0080de477917756"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);