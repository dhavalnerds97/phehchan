import { useTheme } from "../../utils/ThemeContext";
import { useActiveSectionContext } from "../../utils/active-section-context";
import { useSectionInView } from "../../utils/useSectionInView";
import PrimaryButton from "../ui/PrimaryButton";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const process = [
  {
    title: "Kick-off",
    description:
      "Introduction and alignment to make sure you’re okay with how much we cost",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Concepts",
    description:
      "Present the output of our many, many brainstorm sessions and hope you don’t have major revision requests",
  },
  {
    title: "Delivery & Execution",
    description:
      "Select one concept and refine into final delivery and then execute the same on multiple channels",
    icon: "bx:bxs-data",
  },
];
const principles = [
  {
    title: "Think",
    description: "We spend majority of our time on the drawing board.",
  },
  {
    title: "Create",
    description: "Make it simple, but significant",
  },
  {
    title: "Perform",
    description: "Success comes from standing out, not fitting in",
  },
  {
    title: "Optimize",
    description: "If it's good, make it better",
  },
];

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
      <div className="lg:pb-8 pb-6 gap-4 flex max-sm:flex-col  sm:justify-between items-center lg:flex-row ">
        <h2 className="font-bold font-cinzel text-wrap text-2xl px-8 md:p-0 lg:text-4xl max-w-2xl">
          Our Principles
        </h2>
        <PrimaryButton>BOOK A DISCOVERY CALL</PrimaryButton>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-6 ">
        {principles.map((item, index) => (
          <ServiceCard key={index} data={item} />
        ))}
      </div>
      <div className="lg:pb-8 pb-6 gap-4 flex max-sm:flex-col  lg:justify-between items-center lg:flex-row ">
        <h2 className="font-bold font-cinzel text-wrap text-2xl px-8 md:p-0 lg:text-4xl max-w-2xl">
          Our Process
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
