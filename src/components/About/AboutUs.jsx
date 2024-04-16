import { useActiveSectionContext } from "../../utils/active-section-context";
import { useSectionInView } from "../../utils/useSectionInView";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Team from "../Team/Team";
import ApproachObjCapab from "./ApproachObjCapab";
import WhyUs from "./WhyUs";
import { motion } from "framer-motion";

const AboutUs = () => {
  const { ref } = useSectionInView("About Us");
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const handleScroll = (e) => {
    e.preventDefault();

    const targetId = e.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      ref={ref}
      className="about-us-container relative w-screen min-h-screen overflow-auto"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <Services />
      <ApproachObjCapab />
      <Team />
      <div className="max-lg:hidden flex sticky px-10 overflow-hidden bg-inherit bottom-10 justify-between items-end">
        <a
          href="#hero"
          className="sticky font-bold text-white text-4xl left-0 bottom-10 mr-5 z-10"
          onClick={(e) => {
            setActiveSection("Hero");
            setTimeOfLastClick(Date.now());
            handleScroll(e);
          }}
        >
          {"<"}
        </a>
        <a
          href="#why-us"
          className="sticky font-bold text-white text-4xl bottom-10 mr-5 z-10"
          onClick={(e) => {
            setActiveSection("Why Us");
            setTimeOfLastClick(Date.now());
            handleScroll(e);
          }}
        >
          {">"}
        </a>
      </div>
    </motion.section>
  );
};

export default AboutUs;
