import { CrossIcon } from "@/assets/icons";
import { useAppSelector } from "@/hooks";
import React, { ReactNode } from "react";

interface PopupProps {
  isOpen: boolean; // Add isOpen prop
  onClose: () => void; // Add onClose prop
  children: ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent closing the popup when clicking on the content
    e.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
          onClick={onClose} // Close the popup when clicking outside
        >
          <div
            className={`relative w-72 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-white"} p-4 shadow-lg`}
            onClick={handleClick}
          >
            <button
              onClick={onClose} // Close the popup when clicking the close button
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
