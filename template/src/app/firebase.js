import store from "./store";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { update } from "../features/auth/userSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
  // TODO: Add firebase configurations here
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Services
const analytics = getAnalytics();
const db = getFirestore();
const auth = getAuth();

// Sync User Auth
onAuthStateChanged(auth, user => {
  store.dispatch(
    update({
      uid: user?.uid,
      email: user?.email,
      displayName: user?.displayName,
      emailVerified: user?.emailVerified,
      initialized: true,
    })
  );
});

// Export
export { firebaseApp, analytics, db };
