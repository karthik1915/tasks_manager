import { LogInIcon, LogOutIcon } from "@/assets/icons";
import { useState } from "react";
import Popup from "@/components/popup";
import useFireBaseAuth from "@/hooks/useFireBaseAuth";
import { useAppSelector } from "@/hooks";

const LogButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const { signInWithGoogle, signOut } = useFireBaseAuth();
  const userInfo = useAppSelector((state) => state.auth.user);
  const isAuthenticated = userInfo !== null;

  return (
    <div className={`cursor-pointer rounded-lg p-2`}>
      {isAuthenticated ? (
        <LogOutIcon
          width={24}
          height={24}
          stroke="#f94d4d"
          onClick={() => handleOpen()}
        />
      ) : (
        <LogInIcon
          width={24}
          height={24}
          stroke="#f94d4d"
          onClick={() => handleOpen()}
        />
      )}
      <Popup isOpen={isOpen} onClose={handleClose}>
        {!isAuthenticated ? (
          <button
            onClick={() => {
              signInWithGoogle();
            }}
          >
            Log in
          </button>
        ) : (
          <button
            onClick={() => {
              signOut();
            }}
          >
            logOut
          </button>
        )}
      </Popup>
    </div>
  );
};

export default LogButton;
