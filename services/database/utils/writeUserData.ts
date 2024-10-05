import { ref, set } from "firebase/database";
import { database } from "@/services/database/firebase";

interface IUserData {
	userId: string;
	email: string;
	name: string;
}

export async function writeUserData({ userId, email, name }: IUserData) {
	try {
		await set(ref(database, `users/${userId}`), {
			username: name,
			email: email,
		});
		console.log("Dados salvos com sucesso!");
	} catch (e) {
		console.error(`Erro ao gravar os dados no banco: ${e}`);
	}
}
