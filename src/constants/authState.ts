import { FirebaseError } from "firebase/app";
import { User } from "firebase/auth";

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: FirebaseError | unknown | null;
}
