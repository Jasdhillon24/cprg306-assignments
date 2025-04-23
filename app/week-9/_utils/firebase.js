// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDumh-dGYJBGLwcDTRbzb_X1smjBJvaueA",
  authDomain: "cprg306-assignments-eb208.firebaseapp.com",
  projectId: "cprg306-assignments-eb208",
  storageBucket: "cprg306-assignments-eb208.firebasestorage.app",
  messagingSenderId: "428428819621",
  appId: "1:428428819621:web:5be3af1e61230df421a14c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
