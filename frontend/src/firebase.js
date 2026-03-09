import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZir8axuZgiCYZJcms1gl0QUtlyn66gbw",
    authDomain: "portfolio-153a2.firebaseapp.com",
    projectId: "portfolio-153a2",
    storageBucket: "portfolio-153a2.firebasestorage.app",
    messagingSenderId: "802833383514",
    appId: "1:802833383514:web:71f1efa55e6c51c09fd863"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
