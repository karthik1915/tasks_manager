import { BellIcon } from "@/assets/icons";
import { useAppSelector } from "@/hooks";
import { RootState } from "@/redux/store";
import React from "react";

const Notifications: React.FC = () => {
  const isDarkMode = useAppSelector(
    (state: RootState) => state.theme.isDarkMode,
  );
  return (
    <div
      className={`rounded-full ${isDarkMode ? "bg-zinc-800 " : "bg-zinc-200"} p-2`}
    >
      <BellIcon
        width={22}
        height={22}
        stroke={isDarkMode ? "white" : "black"}
      />
    </div>
  );
};

export default Notifications;
