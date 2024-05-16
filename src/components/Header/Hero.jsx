import "../../App.css";
import { useTheme } from "../../utils/ThemeContext";
import FloatingImages from "../ui/FloatingImages";
import { Example } from "../ui/MouseImageTrail";
import TitleScroll from "../ui/titleScroll/page";

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <main
      id="hero"
      className={`flex h-screen justify-center md:h-screen items-center relative  transition duration-500  ${
        darkMode
          ? "bg-neutral-900 text-neutral-100"
          : "bg-gray-50 text-slate-800"
      }`}
    >
      <FloatingImages />
      {/* <div className="block lg:hidden absolute overflow-hidden w-full bottom-0 left-0">
        <TitleScroll />
      </div> */}
    </main>
  );
};

export default Hero;

// <div
//   className={`absolute inset-0 overflow-hidden ${
//     darkMode ? "bg-neutral-900 text-neutral-100" : ""
//   }`}
// >
//   <div className="jumbo absolute -inset-[10px] opacity-50"></div>
// </div>
// <div className="flex justify-between items-center max-sm:gap-4 flex-col p-4 md:p-12 md:max-w-5xl text-center transition-transform hover:scale-105 duration-500">
//   {/* <h1 className="py-4 relative font-semibold font-cinzel text-4xl md:text-5xl text-wrap transition-opacity bg-clip-text text-transparent bg-gradient-to-b from-gray-50/80 to-gray-400/70 to-70% from-30% duration-1000"> */}
//   <h1 className="py-4 relative font-semibold font-cinzel text-4xl md:text-5xl text-wrap transition-opacity bg-clip-text text-transparent bg-gradient-to-r from-gray-200/70 via-gray-50 to-gray-200/70 duration-1000">
//     <span>Elevating Brands:</span>
//     <br />
//     <span className="text-3xl md:text-4xl">
//       Unleashing the Power of Creativity and Strategy to Drive
//       Unforgettable Success.
//     </span>
//   </h1>
//   <p className="py-4 px-6 md:py-12 font-quicksand relative lg:text-3xl text-2xl text-wrap max-w-3xl transition-opacity duration-1000 font-medium bg-clip-text text-transparent bg-gradient-to-b from-gray-50/80 to-gray-400/70">
//     We craft campaigns with a human touch, igniting genuine connections
//     that resonate with consumers
//   </p>
// </div>
