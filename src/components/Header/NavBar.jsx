import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import COLOUR_LOGO from "../../assets/Phehchan-colour-logo.svg";
import BLACK_LOGO from "../../assets/Phehchan-black-logo.svg";
import WHITE_LOGO from "../../assets/Phehchan-white-logo.svg";
import { useTheme } from "../../utils/ThemeContext";
import ToggleTheme from "../ui/ToggleTheme";
import { useActiveSectionContext } from "../../utils/active-section-context";

const navItems = [
  {
    name: "About Us",
    hash: "#about",
    dataText: "About Us",
  },
  {
    name: "Method",
    hash: "#method",
    dataText: "Method",
  },
  {
    name: "Services",
    hash: "#services",
    dataText: "Services",
  },
  {
    name: "Contact Us",
    hash: "#contact",
    dataText: "Contact Us",
  },
];

function NavBar() {
  const [menu, setMenu] = useState(false);
  const { darkMode } = useTheme();

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  function alterMenu() {
    setMenu(!menu);
  }

  const handleScroll = (e) => {
    // Prevent the default anchor click behavior
    e.preventDefault();

    // Get the target section ID from the href attribute of the clicked anchor tag
    const targetId = e.currentTarget.getAttribute("href").slice(1); // Remove the '#' from the href
    const targetElement = document.getElementById(targetId);

    // Use scrollIntoView to scroll to the target element
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="bg-transparent flex justify-between items-center md:space-x-5 px-4 md:px-8 lg:px-20 top-0 absolute w-screen left-0 z-30"
      style={{
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(255, 255, 255, 0)",
      }}
    >
      <div className="flex h-20 py-3">
        <Link to="/">
          <img
            src={darkMode ? WHITE_LOGO : BLACK_LOGO}
            alt="logo"
            className="h-full object-cover"
            width={240}
          />
        </Link>
        {/* <h1 className="font-bold text-xl md:text-2xl">Phehchan</h1>
        <p className="text-xs">Brand Solutions</p> */}
      </div>
      {/* <div className="sm:hidden max-sm:block">
        <ToggleTheme />
      </div> */}
      <div onClick={alterMenu} className="cursor-pointer md:hidden flex">
        {!menu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-8 h-8 ${
              darkMode ? "text-neutral-100" : "text-slate-900"
            } `}
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
            className={`w-8 h-8 ${
              darkMode ? "text-neutral-100" : "text-slate-900"
            } `}
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
              darkMode
                ? " text-neutral-100 bg-neutral-900"
                : "text-slate-900 bg-gray-50"
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.hash}
                className="py-2 block"
                onClick={(e) => {
                  setActiveSection(item.name);
                  setTimeOfLastClick(Date.now());
                  handleScroll(e);
                }}
              >
                {item.name}
              </a>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <motion.ul
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "100%" }}
        className={`hidden font-semibold font-quicksand capitalize md:flex space-x-2  items-center ${
          darkMode ? " text-neutral-100" : "text-slate-900 "
        }`}
      >
        {navItems.map((item) => (
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            key={item.name}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <a
              href={item.hash}
              className="py-2 item-hover "
              data-text={item.dataText}
              onClick={(e) => {
                setActiveSection(item.name);
                setTimeOfLastClick(Date.now());
                handleScroll(e);
              }}
            >
              {item.name}
              {item.name === activeSection && (
                <motion.span
                  className="bg-gray-400/40 rounded-3xl absolute inset-0 -z-10"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              )}
            </a>
          </motion.li>
        ))}
      </motion.ul>
      {/* <div className="hidden md:block">
        <ToggleTheme />
      </div> */}
    </div>
  );
}

export default NavBar;
