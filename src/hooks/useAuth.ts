import { useState, useEffect } from "react";
import {
  //   signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  //   signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { User } from "firebase/auth";

import { auth } from "@/api/auth";
import { FirebaseError } from "firebase/app";

interface AuthState {
  currentUser: User | null;
  loading: boolean;
}

interface AuthMethods {
  register: (email: string, password: string) => Promise<User | null>;
  signInWithGoogle: () => Promise<User | null>;
}

const useAuth = (): AuthState & AuthMethods => {
  const [authState, setAuthState] = useState<AuthState>({
    currentUser: null,
    loading: true,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthState({ currentUser: user, loading: false });
    });

    return () => unsubscribe();
  }, []);

  const register = async (
    email: string,
    password: string,
  ): Promise<User | null> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      setAuthState({ currentUser: user, loading: false });
      return user;
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error("Firebase Error:", error.code, error.message);
      } else {
        console.error("Unknown Error:", error);
      }
    }
    return null;
  };

  const signInWithGoogle = async (): Promise<User | null> => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setAuthState({ currentUser: user, loading: false });
      return user;
    } catch (error) {
      console.error("Error signing in with Google:");
      throw error;
    }
  };

  return { ...authState, register, signInWithGoogle };
};

export default useAuth;
