import { ref, set } from "firebase/database";
import { database } from "@/services/database/firebase";

interface IUserData {
	userId: string;
	email: string;
	name: string;
}

export function writeUserData({ userId, email, name }: IUserData) {
	set(ref(database, `users/${userId}`), {
		username: name,
		email: email,
	});
}
