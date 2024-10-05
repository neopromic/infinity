import { type FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MSG_SENDER,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEANSUREMENT_ID,
};
/**
 * Initialize FirebaseApp instance on this project.
 * @param firebaseConfig firebase keys to setup the project. (use in .env!)
 */
export const app: FirebaseApp = initializeApp(firebaseConfig);

/**
 * Authentication global variable
 * @param app this is used to initialize the auth instance
 *
 * @example
 *
 * import { auth } from "@/services/database/firebase";
 * // ...others imports
 *
 * // let's give an example using auth
 * const provider = new GoogleAuthProvider();
 * signInWithPopup(auth, provider);
 *
 */
export const auth = getAuth(app);
/**
 * Returns the instance to database realtime
 * @returns databaseInstance
 */
export const database = getDatabase(app);
