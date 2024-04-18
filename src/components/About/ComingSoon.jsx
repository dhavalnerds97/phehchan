import { useTheme } from "../../utils/ThemeContext";

const ComingSoon = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex justify-center items-center h-screen w-full ${
        darkMode
          ? "bg-neutral-900 text-neutral-100"
          : "bg-gray-50 text-slate-950"
      }`}
    >
      <h1 className="text-wrap text-7xl text-center lg:text-8xl xl:text-9xl  font-playfair tracking-tight uppercase bg-clip-text text-transparent bg-gradient-to-b from-gray-50/80 to-gray-400/70 to-70% from-30%">
        Coming {"  "} Soon
      </h1>
    </div>
  );
};

export default ComingSoon;
