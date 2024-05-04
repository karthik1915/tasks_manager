import React from "react";

const ProfileImage: React.FC = () => {
  return (
    <div className="relative inline-block">
      <img
        src="/karthik.png"
        alt="Profile Picture"
        className="h-9 w-9 rounded-full border-2 border-green-500"
      />
      <span className="absolute bottom-0 right-0 h-3 w-3  rounded-full border-2  bg-green-500"></span>
      <span className="absolute bottom-0 right-0 h-3 w-3 animate-ping rounded-full border-2 border-white bg-green-500"></span>
    </div>
  );
};

export default ProfileImage;
