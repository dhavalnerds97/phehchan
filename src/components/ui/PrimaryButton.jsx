import React from "react";
import { useTheme } from "../../utils/ThemeContext";

const PrimaryButton = ({ children, onClick }) => {
  const { darkMode } = useTheme();
  
  return (
    <button
      onClick={onClick}
      className="px-4 py-1.5 border border-black text-neutarl-700 font-semibold hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-300"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
