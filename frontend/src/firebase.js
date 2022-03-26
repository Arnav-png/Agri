
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB82t625rLkPyyLA4hkIzQysV6B4UMnpJo",
  authDomain: "agriqna-a9bdf.firebaseapp.com",
  projectId: "agriqna-a9bdf",
  storageBucket: "agriqna-a9bdf.appspot.com",
  messagingSenderId: "449426995206",
  appId: "1:449426995206:web:0a660771918df0869fab87"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { auth, provider };
