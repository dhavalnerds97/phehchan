import { useTheme } from "../../utils/ThemeContext";

const ComingSoon = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex justify-center items-center h-screen w-full ${
        darkMode ? "bg-neutral-900 text-white" : "bg-gray-50 text-slate-950"
      }`}
    >
      <h1 className="text-wrap text-7xl text-center lg:text-8xl xl:text-9xl  font-playfair tracking-tight uppercase ">
        Coming {"  "} Soon
      </h1>
    </div>
  );
};

export default ComingSoon;
