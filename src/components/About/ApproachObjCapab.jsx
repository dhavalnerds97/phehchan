import { useTheme } from "../../utils/ThemeContext";
import { useSectionInView } from "../../utils/useSectionInView";
import Approach from "./Approach";
import Capabilities from "./Capabilities";
import { motion } from "framer-motion";

const ApproachObjCapab = () => {
  const { darkMode } = useTheme();

  const { ref } = useSectionInView("Method", 0.5);

  return (
    <motion.section
      ref={ref}
      className={`text-wrap p-8 lg:p-16 grid grid-cols-1 md:items-center md:grid-cols-2 md:gap-12 lg:gap-16 ${
        darkMode
          ? "bg-neutral-900 text-neutral-100"
          : "bg-gray-50 text-slate-800"
      }`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="method"
    >
      <div className="flex flex-col gap-6">
        <Capabilities />
        <Approach />
      </div>
      <div className="flex place-content-center bg-cover object-center">
        <img src="img2.png" alt="" />
      </div>
    </motion.section>
  );
};

export default ApproachObjCapab;
