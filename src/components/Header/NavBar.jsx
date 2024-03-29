import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import COLOUR_LOGO from "../../assets/Phehchan-colour-logo.png";
import WHITE_LOGO from "../../assets/Phehchan-white-logo.png";
import { useTheme } from "../../utils/ThemeContext";
import ToggleTheme from "../ui/ToggleTheme";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const { darkMode } = useTheme();

  function alterMenu() {
    setMenu(!menu);
  }

  return (
    <div
      className="bg-transparent flex justify-between items-center md:space-x-5 px-4 md:px-8 lg:px-20 top-0 absolute w-screen left-0 z-30"
      style={{
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(255, 255, 255, 0)",
      }}
    >
      <div className="flex h-16 py-3">
        <Link to="/">
          <img
            src={darkMode ? WHITE_LOGO : COLOUR_LOGO}
            alt="logo"
            className="h-full object-cover"
            width={240}
          />
        </Link>
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
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-8 h-8 ${darkMode ? "text-white" : "text-slate-900"} `}
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
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-8 h-8 ${darkMode ? "text-white" : "text-slate-900"} `}
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
            className={`md:hidden md:space-x-4 py-4 font-semibold divide-y-2 shadow-md  text-lg absolute top-full w-full left-0 px-5 ${
              darkMode ? " text-white bg-slate-950" : "text-slate-900 bg-white"
            }`}
          >
            <Link to="/about" className="py-2 block">
              About Us
            </Link>
            <Link to="/" className="py-2 block">
              Studio
            </Link>
            <Link to="/" className="py-2 block">
              Services
            </Link>
            <Link to="/" className="py-2 block">
              Method
            </Link>
          </motion.ul>
        )}
      </AnimatePresence>
      <ul className="hidden font-semibold font-quicksand capitalize md:flex md:space-x-4 lg:space-x-8 text-lg items-center">
        <Link to="/about" className="py-2 item-hover" data-text="About Us">
          About Us
        </Link>
        <Link to="/" className="py-2 item-hover" data-text="Studio">
          Studio
        </Link>
        <Link to="/" className="py-2 item-hover" data-text="Services">
          Services
        </Link>
        <Link to="/" className="py-2 item-hover" data-text="Method">
          Method
        </Link>
      </ul>
      <div className="hidden md:block">
        <ToggleTheme />
      </div>
    </div>
  );
}

export default NavBar;
