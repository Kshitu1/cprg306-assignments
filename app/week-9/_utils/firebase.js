import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFhFE2AZwHumAPG7Ad8qIl8-fDjk2jkuw",
  authDomain: "cprg306-assignments-2892d.firebaseapp.com",
  projectId: "cprg306-assignments-2892d",
  storageBucket: "cprg306-assignments-2892d.firebasestorage.app",
  messagingSenderId: "663855133502",
  appId: "1:663855133502:web:b5232d29cb3586c387f26f",
  measurementId: "G-SM05SHMPSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
