import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKsvHGvCaNxS6QnoDkrw2bi0odDe0hj0o",
  authDomain: "infinity-prd.firebaseapp.com",
  databaseURL: "https://infinity-prd-default-rtdb.firebaseio.com",
  projectId: "infinity-prd",
  storageBucket: "infinity-prd.appspot.com",
  messagingSenderId: "323059625856",
  appId: "1:323059625856:web:b632e4122f535028b05b65",
  measurementId: "G-PREB2XE1CK",
};

export const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
