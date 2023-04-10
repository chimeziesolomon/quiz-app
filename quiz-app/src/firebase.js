// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCobCKjHWJVdWkmsnwHQCJCnT0qmUA6ou0",
    authDomain: "quiz-3-a9541.firebaseapp.com",
    projectId: "quiz-3-a9541",
    storageBucket: "quiz-3-a9541.appspot.com",
    messagingSenderId: "964708683593",
    appId: "1:964708683593:web:dcf9319aaf53017fca5498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)