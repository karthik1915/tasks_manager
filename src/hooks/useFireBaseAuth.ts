import { auth } from "@/api";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from "firebase/auth";
import { useEffect } from "react";
import { useAppDispatch } from "./storeHooks";
import { Dispatch } from "redux";
import {
  updateUserInfo,
  updateUserInfoError,
} from "@/redux/features/auth/authReducer";
import { FirebaseError } from "firebase/app";

const useFireBaseAuth = () => {
  const dispatch: Dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(updateUserInfo(user));
    });

    return () => unsubscribe();
  }, [dispatch]);

  const signInWithGoogle = async (): Promise<User | null> => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user: User = result.user;
      return user;
    } catch (error) {
      if (error instanceof FirebaseError) {
        dispatch(updateUserInfoError(error));
      }
      dispatch(updateUserInfoError(error));
      return null;
    }
  };

  const signOut = async (): Promise<void> => {
    await auth.signOut();
    console.log("signed out");
  };

  return { signInWithGoogle, signOut };
};

export default useFireBaseAuth;
