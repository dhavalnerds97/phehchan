import { useSectionInView } from "../../utils/useSectionInView";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Team from "../Team/Team";
import ApproachObjCapab from "./ApproachObjCapab";
import WhyUs from "./WhyUs";
import { motion } from "framer-motion";

const AboutUs = () => {
  const { ref } = useSectionInView("About Us");

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
    </motion.section>
  );
};

export default AboutUs;
