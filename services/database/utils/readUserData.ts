import { ref, get } from "firebase/database";
import { database } from "@/services/database/firebase";

export async function readUserData(userId: string) {
	const userRef = ref(database, `users/${userId}`);
	const snapshot = await get(userRef);
	if (snapshot.exists()) {
		console.log(snapshot.val());
		return snapshot.val();
	}
	console.log("No data available");
	return null;
}
