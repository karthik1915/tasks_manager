import { doc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { UserDataType } from "@/constants/userData";

const db = getFirestore();

const uploadUserData = (userId: string, userData: UserDataType) => {
  try {
    const userRef = doc(db, "users", userId);
    setDoc(userRef, userData, { merge: true }); // Merge with existing data if any
    console.log("User data uploaded successfully");
  } catch (error) {
    console.error("Error uploading user data:", error);
    throw error;
  }
};

export default uploadUserData;
