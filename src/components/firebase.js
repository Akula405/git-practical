import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAz8NOLpdS_1l8FF1XJopQR7jKeAmIKa5s",
  authDomain: "auth-practice-2bd33.firebaseapp.com",
  projectId: "auth-practice-2bd33",
  storageBucket: "auth-practice-2bd33.appspot.com",
  messagingSenderId: "684981736684",
  appId: "1:684981736684:web:ccbc57158d339e2adcc1c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
const auth = getAuth(app);
export { auth };
export default app;
