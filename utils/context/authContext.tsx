import { auth } from "@/services/database/firebase";
import { User as IUser } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

type User = IUser | null;
type ContextState = { user: User };

const FirebaseAuthContext = createContext<ContextState | undefined>(undefined);

export const FirebaseAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const value = { user };

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

export const useFirebaseAuth = () => {
  const context = useContext(FirebaseAuthContext);

  if (context === undefined) {
    throw new Error("Yo! Parece que não temos uma autenticaão válida!");
  }

  return context.user;
};
