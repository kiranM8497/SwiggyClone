// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgBf5nq3PaRCuRAgny0u6x_asWJVCGKXA",
  authDomain: "bitenow-food-delivery-app.firebaseapp.com",
  projectId: "bitenow-food-delivery-app",
  storageBucket: "bitenow-food-delivery-app.appspot.com",
  messagingSenderId: "916305339832",
  appId: "1:916305339832:web:544f384de5c00d15159b4d",
  measurementId: "G-VG4DMMKDEF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
