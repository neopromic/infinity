import { auth } from "@/services/database/firebase";
import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";

export const deleteUser = async (password: string) => {
	const currentUser = auth.currentUser;
	if (!currentUser) {
		console.error("Nenhum usuário autenticado.");
		return;
	}

	try {
		const credential = EmailAuthProvider.credential(
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			currentUser.email!,
			password,
		);
		await reauthenticateWithCredential(currentUser, credential);
		console.log("Reautenticação bem-sucedida.");

		await currentUser.delete();
		console.log("Usuário deletado com sucesso.");
	} catch (error) {
		console.error("Erro ao deletar usuário:", error);
	}
};
