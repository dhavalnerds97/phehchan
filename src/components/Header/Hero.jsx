import "../../App.css";
import { useTheme } from "../../utils/ThemeContext";

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <main
      id="hero"
      className={`flex h-screen justify-center md:h-screen items-center relative  transition duration-500  ${
        darkMode ? "bg-neutral-900 text-white" : "bg-gray-50 text-slate-800"
      }`}
    >
      <div
        className={`absolute inset-0 overflow-hidden ${
          darkMode ? "bg-neutral-900 text-white" : ""
        }`}
      >
        <div className="jumbo absolute -inset-[10px] opacity-50"></div>
      </div>
      <div className="flex justify-between items-center max-sm:gap-4 flex-col p-4 md:p-12 md:max-w-4xl text-center transition-transform hover:scale-105 duration-500">
        <h1 className="py-4 relative font-medium font-cinzel text-4xl md:text-5xl text-wrap transition-opacity duration-1000">
          Elevating Brands: Unleashing the Power of Creativity and Strategy to
          Drive Unforgettable Success.
        </h1>
        <p className="py-4 px-6 md:py-12 font-quicksand relative lg:text-3xl text-2xl text-wrap max-w-xl transition-opacity duration-1000">
          We craft campaigns with a human touch, igniting genuine connections
          that resonate with consumers
        </p>
      </div>
    </main>
  );
};

export default Hero;
