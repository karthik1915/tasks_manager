// import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { LogInIcon, LogOutIcon } from "@/assets/icons";
import { useState } from "react";
import Popup from "@/components/popup";
import RegisterForm from "@/components/auth/registerForm";
// import { Dispatch } from "redux";

const LogButton: React.FC = () => {
  const [active, setActive] = useState(false);
  // const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  // const isLoggedIn = useAppSelector((state) => state.login.logged);
  // const dispatch: Dispatch = useAppDispatch();

  const [popUp, setPopUp] = useState(false);

  const isLoggedIn = true;
  const handleActive = () => {
    setActive(true);
  };
  const handleInActive = () => {
    setActive(false);
  };
  const handleLogin = () => {
    setPopUp(!popUp);
    //   dispatch(handleLogin());
  };

  return (
    <div
      className={`${active ? "purple" : ""} cursor-pointer rounded-lg p-2`}
      onMouseEnter={handleActive}
      onMouseLeave={handleInActive}
      onClick={handleLogin}
    >
      {isLoggedIn ? (
        <LogInIcon width={24} height={24} stroke="#f94d4d" />
      ) : (
        <LogOutIcon width={24} height={24} stroke="#f94d4d" />
      )}
      {popUp && (
        <Popup>
          <RegisterForm />
        </Popup>
      )}
    </div>
  );
};

export default LogButton;
