import { auth } from "@/services/database/firebase";
import {
	type User as IUser,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { writeUserData } from "@/services/database/utils/writeUserData";

// biome-ignore lint/suspicious/noConfusingVoidType: <explanation>
type User = IUser | null | void;
type ContextState = {
	user: User;
	login: (email: string, password: string) => void;
	signUp: (email: string, password: string) => void;
	logout: () => void;
};

const FirebaseAuthContext = createContext<ContextState | undefined>(undefined);

export const FirebaseAuthProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [user, setUser] = useState<User>(() => {
		const userCookies = Cookies.get("user");
		return userCookies ? JSON.parse(userCookies) : null;
	});

	const login = (email: string, password: string) => {
		// TODO: create add cookie storage

		signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
			const user = userCredential.user;
			const userToken = user.getIdToken;
			Cookies.set("user", JSON.stringify(user));
			Cookies.set("user_token", JSON.stringify(userToken));
		});
	};

	const signUp = async (email: string, password: string) => {
		createUserWithEmailAndPassword(auth, email, password).then(
			async (userCredential) => {
				const user = userCredential.user;
				const userToken = user.getIdToken;

				if (!user) {
					return;
				}

				const userUID = user.uid;
				const userEmail = user.email as string;
				const userName = "John Doe";

				await writeUserData({
					userId: userUID,
					email: userEmail,
					name: userName,
				});

				Cookies.set("user", JSON.stringify(user));
				Cookies.set("user_token", JSON.stringify(userToken));
			},
		);
	};

	const logout = () => {
		// TODO: create cookie remove and logout

		auth.signOut();

		Cookies.remove("user");
		Cookies.remove("user_token");
	};

	const value = { user, login, logout, signUp };

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(setUser);
		return unsubscribe;
	}, []);

	return (
		<FirebaseAuthContext.Provider value={value}>
			{children}
		</FirebaseAuthContext.Provider>
	);
};

/**
 * This hook is used to get the user data and manipulate then.
 * @returns auth hook
 * @example
 * const { user } = useFirebaseAuth();
 */
export const useFirebaseAuth = () => {
	const context = useContext(FirebaseAuthContext);

	if (context === undefined) {
		throw new Error("Yo! Parece que não temos uma autenticação válida!");
	}

	return context;
};
