import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, auth } from "@/api/auth";

const uploadImageAndGetUrl = async (file: File) => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  const storageRef = ref(
    storage,
    `profile/${auth.currentUser.uid}/${file.name}`,
  );
  try {
    await uploadBytes(storageRef, file);
    const imageUrl = await getDownloadURL(storageRef);
    return imageUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export default uploadImageAndGetUrl;
