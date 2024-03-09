import { useTheme } from "../../utils/ThemeContext";
import Approach from "./Approach";
import Capabilities from "./Capabilities";
import ObjectivesKPIs from "./ObjectivesKPIs";

const ApproachObjCapab = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`text-wrap p-8 lg:p-16 grid grid-cols-1 md:items-center md:grid-cols-2 md:gap-12 lg:gap-16 lg:h-screen ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-slate-800"
      }`}
    >
      <div className="flex flex-col gap-6">
        <Capabilities />
        <Approach />
      </div>
      <ObjectivesKPIs />
    </div>
  );
};

export default ApproachObjCapab;
