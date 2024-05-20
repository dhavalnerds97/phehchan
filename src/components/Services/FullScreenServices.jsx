import { Link } from "react-router-dom";
import { useSectionInView } from "../../utils/useSectionInView";
import FullScreenServiceCard from "./FullScreenServiceCard";
import { motion } from "framer-motion";
import { services } from "../../utils/constants";

const FullScreenServices = () => {
  const { ref } = useSectionInView("Services");

  return (
    <motion.section
      ref={ref}
      className="w-full h-full flex flex-col gap-6 lg-md:gap-12 xl:flex-row xl:gap-1 pb-4 lg:pt-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="services"
    >
      {services.map((service, index) => (
        <Link key={service.hash} to={service.hash}>
          <FullScreenServiceCard service={service} isOdd={index % 2 !== 0} />
        </Link>
      ))}
    </motion.section>
  );
};

export default FullScreenServices;
