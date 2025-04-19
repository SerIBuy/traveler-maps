import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUeHRLadLQxkd2Ki0gac-F8YM9-SCATuY",
  authDomain: "travelers-map-7cd1a.firebaseapp.com",
  projectId: "travelers-map-7cd1a",
  storageBucket: "travelers-map-7cd1a.firebasestorage.app",
  messagingSenderId: "212034525682",
  appId: "1:212034525682:web:95590d69d405194514f36b",
  measurementId: "G-7L2F848HC5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);