// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsDkGxuKGwwhM8aCfqtyfaSFvwCv0PNmk",
  authDomain: "entrega-final-benitez.firebaseapp.com",
  projectId: "entrega-final-benitez",
  storageBucket: "entrega-final-benitez.appspot.com",
  messagingSenderId: "478988876077",
  appId: "1:478988876077:web:150d7d65c76e062e93bba4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initFirebase = () => app