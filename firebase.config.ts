// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc7p62HxqzyA5SeCheIUsatkLt7Wmy5eY",
  authDomain: "tabib-59c7a.firebaseapp.com",
  projectId: "tabib-59c7a",
  storageBucket: "tabib-59c7a.appspot.com",
  messagingSenderId: "466441696953",
  appId: "1:466441696953:web:5242609f7dc1d67d0b8d68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// export const db = getDatabase(app);
export const db = getFirestore(app)
export const storage = getStorage(app);