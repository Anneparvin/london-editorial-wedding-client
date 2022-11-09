// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbFql3yJaDhj9TKS0B5jpVosC1esE5U68",
  authDomain: "wedding-photographer-7581c.firebaseapp.com",
  projectId: "wedding-photographer-7581c",
  storageBucket: "wedding-photographer-7581c.appspot.com",
  messagingSenderId: "498614037483",
  appId: "1:498614037483:web:bbbca6d65e8ac96d3b07ae",
  measurementId: "G-H6P1HF25SS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;