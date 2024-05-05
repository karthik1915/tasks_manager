import {
  MicOffIcon,
  MicOnIcon,
  SettingsIcon,
  SoundOffIcon,
  SoundOnIcon,
} from "@/assets/icons";
import { useAppSelector } from "@/hooks";
import React from "react";
import { IconButton } from "./tabs";
import { RouteState } from "@/redux/features/route/routeReducer";

const ControlButtons: React.FC = () => {
  const selectedTab = useAppSelector((state) => state.route.route);

  const SettingsLink: RouteState = {
    route: "settings",
  };

  return (
    <div className=" my-3 flex flex-col items-center gap-3">
      <ControlButton IconOn={MicOnIcon} IconOff={MicOffIcon} active={false} />
      <IconButton
        Icon={SettingsIcon}
        select={selectedTab === "settings"}
        link={SettingsLink}
      />
      <ControlButton
        IconOn={SoundOnIcon}
        IconOff={SoundOffIcon}
        active={false}
      />
    </div>
  );
};

export interface IconProps {
  stroke?: string;
  width?: string | number;
  height?: string | number;
}

interface IconButtonProps {
  IconOn: React.FC<IconProps>;
  IconOff: React.FC<IconProps>;
  active: boolean;
}

const ControlButton: React.FC<IconButtonProps> = ({
  IconOn,
  IconOff,
  active,
}) => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <button
      className={`${isDarkMode ? "hover:bg-lightblue " : "hover:bg-zinc-200"}  rounded-lg p-2`}
      onClick={() => {}}
    >
      {active ? (
        <IconOn
          width={24}
          height={24}
          stroke={`${isDarkMode ? "white" : "black"}`}
        />
      ) : (
        <IconOff
          width={24}
          height={24}
          stroke={`${isDarkMode ? "white" : "black"}`}
        />
      )}
    </button>
  );
};

export default ControlButtons;
