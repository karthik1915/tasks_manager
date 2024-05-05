import { CalenderIcon, DocIcon, MenuIcon } from "@/assets/icons";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { RouteState, updateRoute } from "@/redux/features/route/routeReducer";
import React from "react";
import { Dispatch } from "redux";

const Tabs: React.FC = () => {
  const dashboardLink: RouteState = {
    route: "dashboard",
  };
  const tasksLink: RouteState = {
    route: "tasks",
  };
  const ScheduleLink: RouteState = {
    route: "schedule",
  };

  const selectedTab = useAppSelector((state) => state.route.route);

  return (
    <div className="my-4 flex flex-col gap-5">
      <IconButton
        Icon={MenuIcon}
        select={selectedTab === "dashboard"}
        link={dashboardLink}
      />
      <IconButton
        Icon={DocIcon}
        select={selectedTab === "tasks"}
        link={tasksLink}
      />
      <IconButton
        Icon={CalenderIcon}
        select={selectedTab === "schedule"}
        link={ScheduleLink}
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
  Icon: React.FC<IconProps>;
  select: boolean;
  link?: RouteState;
}

export const IconButton: React.FC<IconButtonProps> = ({
  Icon,
  select,
  link,
}) => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const dispatch: Dispatch = useAppDispatch();

  const handleRoute = () => {
    if (link) {
      dispatch(updateRoute(link));
    }
  };

  return (
    <button
      className={`${isDarkMode ? "hover:bg-lightblue " : "hover:bg-zinc-200"} ${select && (isDarkMode ? "bg-lightblue" : "bg-zinc-200")} rounded-lg p-2`}
      onClick={handleRoute}
    >
      <Icon
        width={24}
        height={24}
        stroke={`${isDarkMode ? "#2D76FF" : "#206EFF"}`}
      />
    </button>
  );
};

export default Tabs;
