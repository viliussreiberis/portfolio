import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD98zwxJTBiJqeoL8uwRMYFUs_Zd0uAdrY",
  authDomain: "personal-portfolio-d3b3e.firebaseapp.com",
  projectId: "personal-portfolio-d3b3e",
  storageBucket: "personal-portfolio-d3b3e.appspot.com",
  messagingSenderId: "85633501029",
  appId: "1:85633501029:web:ebde35fd7ee8a0256d838c",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
