import "../../App.css";
import { useTheme } from "../../utils/ThemeContext";

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <main
      className={`flex h-screen justify-center text-slate-800 md:h-screen items-center relative bg-white transition-bg ${
        darkMode ? "bg-slate-950 text-white" : ""
      }`}
    >
      <div
        className={`absolute inset-0 overflow-hidden ${
          darkMode ? "bg-slate-950 text-white" : ""
        }`}
      >
        <div className="jumbo absolute -inset-[10px] opacity-50"></div>
      </div>
      <div className="flex justify-between items-center max-sm:gap-4 flex-col p-4 md:p-12 md:max-w-4xl text-center transition-transform hover:scale-110 duration-500">
        <h1 className="py-4 relative md:font-thin font-georgia text-5xl text-wrap transition-opacity duration-1000">
          Elevating Brands: Unleashing the Power of Creativity and Strategy to
          Drive Unforgettable Success.
        </h1>
        <p className="py-4 px-6 md:py-12 relative lg:text-3xl text-xl text-wrap max-w-xl md:text-lg transition-opacity duration-1000">
          We craft campaigns with a human touch, igniting genuine
          connectionsthatresonate with consumers
        </p>
      </div>
    </main>
  );
};

export default Hero;
