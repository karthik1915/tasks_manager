import uploadImageAndGetUrl from "@/api/auth/imageupload";
import uploadUserData from "@/api/auth/uploadUserData";
import { UserDataType } from "@/constants/userData";
import React, { useState, ChangeEvent } from "react";

const Schedule: React.FC = () => {
  return (
    <div>
      <h1>Schedule</h1>
      <SimpleForm />
      <ImageUploadForm />
    </div>
  );
};

const SimpleForm = () => {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const uid = "iYmgUCz9E2RUoKZAcj5DdolWsJu2";
  const udata: UserDataType = {
    name: username,
  };

  const handleUpload = () => {
    try {
      console.log("Username:", username);
      uploadUserData(uid, udata);
      console.log("uploaded successfully");
    } catch (error) {
      console.error("Error uploading user data:", error);
    }
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <button type="button" onClick={handleUpload}>
          Upload
        </button>
      </form>
    </div>
  );
};

const ImageUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) return;
      const imageUrl = await uploadImageAndGetUrl(selectedFile);
      setImageUrl(imageUrl);
      console.log(`Uploaded ${imageUrl}`);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <h2>Image Upload Form</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
      {imageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "100%" }} />
        </div>
      )}
    </div>
  );
};

export default Schedule;
