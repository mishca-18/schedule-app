import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { auth } from "./firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAvQpocSuZqEcCwG3vHclOWLoWv_JqaIGM",
  authDomain: "new-scheduler-22fa1.firebaseapp.com",
  projectId: "new-scheduler-22fa1",
  storageBucket: "new-scheduler-22fa1.appspot.com",
  messagingSenderId: "409732051151",
  appId: "1:409732051151:web:0798dea3b76793ded1c7ba",
  measurementId: "G-J46S0YK50D"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
