import { ref, set } from "firebase/database";
import { database } from "@/services/database/firebase";
import type { User } from "@/types/user";

export function writeUserData({ userId, email, name }: User) {
	set(ref(database, `users/${userId}`), {
		username: name,
		email: email,
	});
}
