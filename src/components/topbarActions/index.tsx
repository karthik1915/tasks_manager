import React from "react";
import Notifications from "./notifications";
import ThemeButton from "./themeButton";
import ProfileImage from "./profileImage";

const TopBarActions: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <ThemeButton />
      <Notifications />
      <ProfileImage />
    </div>
  );
};

export default TopBarActions;
