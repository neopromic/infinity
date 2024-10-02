// utils/firebaseAdmin.ts
import * as admin from "firebase-admin";

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.applicationDefault(),
		databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
	});
}

export const verifyIdToken = async (token: string) => {
	try {
		const decodedToken = await admin.auth().verifyIdToken(token);
		return decodedToken;
	} catch (error) {
		console.error("Erro ao verificar token:", error);
		return null;
	}
};
