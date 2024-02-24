import { useState } from "react";
import PrimaryButton from "../ui/PrimaryButton";

function NavBar() {
  const [menu, setMenu] = useState(false);

  // Altering menu
  function alterMenu() {
    setMenu(!menu);
  }

  return (
    <div
      className={`text-black shadow-md flex justify-between items-center md:space-x-5 sticky px-12 top-0 z-50 ${
        menu ? "bg-white bg-opacity-80" : "bg-transparent"
      }`}
      style={{
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <h1 className="font-semibold text-xl py-4">Phehchan</h1>
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
      {menu && (
        <ul
          className={`md:hidden md:space-x-4 bg-white divide-y-2 shadow-md divide-gray-100 text-lg absolute top-full w-full left-0 px-5 ${
            menu && "bg-white md:bg-transparent"
          }`}
        >
          <li className="py-2">Studio</li>
          <li className="py-2">Services</li>
          <li className="py-2">Method</li>
          <li className="py-2">Works</li>
        </ul>
      )}
      <ul
        className={`hidden font-bold capitalize md:flex md:space-x-12 text-lg items-center`}
      >
        <li className="py-2">Studio</li>
        <li className="py-2">Services</li>
        <li className="py-2">Method</li>
        <li className="py-2">Works</li>
      </ul>
      <PrimaryButton>Phehchan</PrimaryButton>
    </div>
  );
}

export default NavBar;
