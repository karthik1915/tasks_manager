import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Dispatch } from "redux";
import { toggleTheme } from "@/redux/features/themes/themeReducer";
import { RootState } from "@/redux/store";
import { DarkModeIcon, LightModeIcon } from "@/assets/icons";

const ThemeButton: React.FC = () => {
  const isDarkMode = useAppSelector(
    (state: RootState) => state.theme.isDarkMode,
  );

  const dispatch: Dispatch = useAppDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleTheme}
      className={`rounded-full ${isDarkMode ? "bg-zinc-800 " : "bg-zinc-200"} p-2`}
    >
      {isDarkMode ? (
        <LightModeIcon width={24} height={24} stroke="white" />
      ) : (
        <DarkModeIcon width={24} height={24} stroke="black" />
      )}
    </button>
  );
};

export default ThemeButton;
