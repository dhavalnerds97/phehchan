import { useTheme } from "../../utils/ThemeContext";
import PrimaryButton from "../ui/PrimaryButton";
import ServiceCard from "./ServiceCard";

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

  return (
    <div
      className={`p-4 lg:p-16 xl:pt-32 md:p-12 text-slate-800 flex flex-col bg-gradient-to-r xl:h-screen md:justify-center  ${
        darkMode
          ? "to-slate-900 from-gray-950 text-white"
          : "to-neutral-300 from-white text-slate-800"
      }`}
    >
      <div className="lg:pb-8 pb-6 gap-4 flex max-sm:flex-col  sm:justify-between items-center lg:flex-row ">
        <h2 className="font-bold font-georgia text-wrap text-2xl px-8 md:p-0 lg:text-4xl max-w-2xl">
          Our Principles
        </h2>
        <PrimaryButton>BOOK A DISCOVERY CALL</PrimaryButton>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 pb-6 ">
        {principles.map((item, index) => (
          <ServiceCard key={index} data={item} />
        ))}
      </div>
      <div className="lg:pb-8 pb-6 gap-4 flex max-sm:flex-col  lg:justify-between items-center lg:flex-row ">
        <h2 className="font-bold font-georgia text-wrap text-2xl px-8 md:p-0 lg:text-4xl max-w-2xl">
          Our Process
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 pb-6 ">
        {process.map((item, index) => (
          <ServiceCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
