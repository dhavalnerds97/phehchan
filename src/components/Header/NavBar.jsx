import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import LOGO from "../../assets/Phehchan-white-logo.png";
import { useTheme } from "../../utils/ThemeContext";
import ToggleTheme from "../ui/ToggleTheme";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const { darkMode } = useTheme();

  function alterMenu() {
    setMenu(!menu);
  }

  return (
    <div className="text-amber-400 bg-gradient-to-b to-gray-800 from-slate-950 shadow-md flex justify-between items-center md:space-x-5 sticky px-4 md:px-8 lg:px-20 top-0 md:absolute md:w-screen left-0 z-40">
      <div className="flex flex-col h-16 py-3">
        <img
          src={LOGO}
          alt="logo"
          className="h-full  object-cover"
          width={240}
        />
        {/* <h1 className="font-bold text-xl md:text-2xl">Phehchan</h1>
        <p className="text-xs">Brand Solutions</p> */}
      </div>
      <div className="sm:hidden max-sm:block">
        <ToggleTheme />
      </div>
      <div onClick={alterMenu} className="cursor-pointer md:hidden flex">
        {!menu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
      <AnimatePresence>
        {menu && (
          <motion.ul
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            className={`md:hidden md:space-x-4 py-4 text-slate-900 font-semibold divide-y-2 shadow-md  text-lg absolute top-full w-full left-0 px-5 ${
              darkMode ? "bg-slate-950 text-white divide-gray-400" : "bg-white divide-gray-100"
            }`}
          >
            <li className="py-2">Studio</li>
            <li className="py-2">Services</li>
            <li className="py-2">Method</li>
            <li className="py-2">Works</li>
          </motion.ul>
        )}
      </AnimatePresence>
      <ul className="hidden font-semibold font-custom capitalize md:flex md:space-x-4 lg:space-x-8 text-lg items-center">
        <li className="py-2 item-hover" data-text="Studio">
          Studio
        </li>
        <li className="py-2 item-hover" data-text="Services">
          Services
        </li>
        <li className="py-2 item-hover" data-text="Method">
          Method
        </li>
        <li className="py-2 item-hover" data-text="Works">
          Works
        </li>
      </ul>
      <div className="hidden md:block">
        <ToggleTheme />
      </div>
    </div>
  );
}

export default NavBar;
