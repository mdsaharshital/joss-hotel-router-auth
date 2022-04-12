// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7VlKD6J9OaKyjWl6koN0x9NxNSzn9Ysc",
  authDomain: "joss-hotel.firebaseapp.com",
  projectId: "joss-hotel",
  storageBucket: "joss-hotel.appspot.com",
  messagingSenderId: "514909619763",
  appId: "1:514909619763:web:1df960ea5851dbf5e50546",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
