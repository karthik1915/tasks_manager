import { CrossIcon } from "@/assets/icons";
import { useAppSelector } from "@/hooks";
import React, { ReactNode, useState } from "react";

interface PopupProps {
  children: ReactNode;
}

const Popup: React.FC<PopupProps> = ({ children }) => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
          onClick={handleClose}
        >
          <div
            className={`relative w-72 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-white"} p-4 shadow-lg`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute right-2 top-4 p-2"
            >
              <CrossIcon width={16} height={16} fill="red" />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
