import React from "react";
import { useTheme } from "../../utils/ThemeContext";

const PrimaryButton = ({ children, onClick }) => {
  const { darkMode } = useTheme();

  return (
    <button
      onClick={onClick}
      className="px-6 py-1.5 border font-quicksand border-amber-300 text-neutarl-700 font-semibold hover:shadow-[4px_4px_0px_0px_rgba(255,215,0)] transition duration-300"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
