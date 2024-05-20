import { useTheme } from "../../utils/ThemeContext";
import { useActiveSectionContext } from "../../utils/active-section-context";
import { principles, process } from "../../utils/constants";
import { useSectionInView } from "../../utils/useSectionInView";
import PrimaryButton from "../ui/PrimaryButton";
import TextMask from "../ui/TextMask";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const Services = () => {
  const { darkMode } = useTheme();
  const { ref } = useSectionInView("Method");

  return (
    <motion.section
      ref={ref}
      className={`p-4 md:p-12 flex flex-col md:justify-center w-full h-full ${
        darkMode
          ? "bg-neutral-900 text-neutral-100"
          : "bg-gray-50 text-slate-800"
      }`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="method"
    >
      <div className="lg:pb-8 pb-6 gap-4 flex flex-col md:pt-32 sm:justify-between items-center sm:flex-row ">
        <h2 className="font-bold font-cinzel text-wrap text-2xl px-8 md:p-0 lg:text-4xl max-w-2xl">
          <TextMask>{["Our Principles"]}</TextMask>
        </h2>
        <a href="#contact">
          <PrimaryButton>BOOK A DISCOVERY CALL</PrimaryButton>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-6 ">
        {principles.map((item, index) => (
          <ServiceCard key={index} data={item} />
        ))}
      </div>
      <div className="lg:pb-8 pb-6 gap-4 flex max-sm:flex-col  lg:justify-between items-center lg:flex-row ">
        <h2 className="font-bold font-cinzel text-wrap text-2xl px-8 md:p-0 lg:text-4xl max-w-2xl">
          <TextMask>{["Our Process"]}</TextMask>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 pb-6 ">
        {process.map((item, index) => (
          <ServiceCard key={index} data={item} />
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
