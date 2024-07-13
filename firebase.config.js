// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC02zhjyigI6Vr-tOQZ78Ihu18-PYR2EaI",
  authDomain: "anchor-travels.firebaseapp.com",
  projectId: "anchor-travels",
  storageBucket: "anchor-travels.appspot.com",
  messagingSenderId: "408140811666",
  appId: "1:408140811666:web:0e35fd93d3426cacd6854b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app)