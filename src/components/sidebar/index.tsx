import React from "react";
import Tabs from "./tabs";

const SideBar: React.FC = () => {
  return (
    <>
      <img src="/logo.png" alt="app logo" className="mt- mb-10 h-10 w-10" />
      <Tabs />
    </>
  );
};

export default SideBar;
