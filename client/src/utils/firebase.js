import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "interviewforge-2d116.firebaseapp.com",
    projectId: "interviewforge-2d116",
    storageBucket: "interviewforge-2d116.firebasestorage.app",
    messagingSenderId: "1007013753483",
    appId: "1:1007013753483:web:4d4538d78f618353a21a8e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export { auth, provider }