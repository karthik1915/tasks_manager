import React from "react";
import Tabs from "./tabs";
import LogButton from "./logButtons";
import ControlButtons from "./controlButtons";

const SideBar: React.FC = () => {
  return (
    <>
      <div>
        <img src="/logo.png" alt="app logo" className=" mb-7 h-10 w-10" />
        <Tabs />
      </div>
      <div>
        <ControlButtons />
        <LogButton />
      </div>
    </>
  );
};

export default SideBar;
