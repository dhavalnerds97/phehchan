import { useTheme } from "../../utils/ThemeContext";
import Approach from "./Approach";
import Capabilities from "./Capabilities";

const ApproachObjCapab = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`text-wrap p-8 lg:p-16 grid grid-cols-1 md:items-center md:grid-cols-2 md:gap-12 lg:gap-16 ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-slate-800"
      }`}
    >
      <div className="flex flex-col gap-6">
        <Capabilities />
        <Approach />
      </div>
      <div className="bg-gray-400">Image</div>
    </div>
  );
};

export default ApproachObjCapab;
