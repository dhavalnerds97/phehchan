import { useTheme } from "../../utils/ThemeContext";
import { ImageDiv } from "../ui/motion";
import Approach from "./Approach";
import Capabilities from "./Capabilities";
import { motion } from "framer-motion";

const ApproachObjCapab = () => {
  const { darkMode } = useTheme();

  return (
    <motion.section
      className={`text-wrap p-8 lg:p-12 grid grid-cols-1 md:items-center md:grid-cols-2 border-b border-neutral-800 rounded-b-[2.5rem] lg:rounded-b-[3rem] md:gap-12 ${
        darkMode
          ? "bg-neutral-700/50 text-neutral-100"
          : "bg-gray-50 text-slate-800"
      }`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="flex flex-col gap-6">
        <Capabilities />
        <Approach />
      </div>
      <div className="flex relative overflow-hidden place-content-center bg-cover object-center">
        <ImageDiv>
          <img src="img50.png" alt="" />
        </ImageDiv>
      </div>
    </motion.section>
  );
};

export default ApproachObjCapab;
