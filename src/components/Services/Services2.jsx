import { useTheme } from "../../utils/ThemeContext";
import { useActiveSectionContext } from "../../utils/active-section-context";
import {
  marketingExpertise,
  mediaProductions,
  techSolutions,
} from "../../utils/constants";
import { useSectionInView } from "../../utils/useSectionInView";
import PrimaryButton from "../ui/PrimaryButton";
import ServiceCard2 from "./ServiceCard2";
import { motion } from "framer-motion";

const Services2 = () => {
  const { ref } = useSectionInView("Services");
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { darkMode } = useTheme();

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
      className="services-container relative w-screen min-h-screen overflow-auto"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="services"
    >
      <div
        className={`p-4 lg:p-16 xl:pt-32 md:p-12 text-wrap flex flex-col md:justify-center  ${
          darkMode ? "bg-neutral-900 text-white" : "bg-gray-50 text-slate-800"
        }`}
      >
        <div className="lg:pb-8 pb-6 gap-4 flex flex-col lg:max-w-3xl mx-auto lg:text-center justify-center items-center ">
          <h2 className="font-bold font-cinzel text-wrap text-3xl px-8 md:p-0 lg:text-4xl max-w-2xl">
            Our services
          </h2>
          <h2 className="font-bold font-cinzel text-wrap text-2xl px-8 md:p-0 lg:text-4xl max-w-2xl">
            Tech Solutions
          </h2>
          <p className="p-4">
            In a digital-first world, staying ahead of technology trends isn't
            just an option; it's a necessity. We specialize in custom web
            development that ensures your site is both visually appealing and
            highly functional, innovative app development to keep your brand at
            users' fingertips with versatile CMS solutions that simplify content
            management. Whether you're looking to enhance online engagement or
            streamline operations, our technology services are tailored to meet
            your unique needs and drive your success.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:max-w-3xl mx-auto pb-6 ">
          {techSolutions.map((item, index) => (
            <ServiceCard2 key={index} data={item} />
          ))}
        </div>
        <div className="lg:pb-8 pb-6 gap-4 flex flex-col lg:max-w-3xl mx-auto lg:text-center justify-center items-center ">
          <h2 className="font-bold font-cinzel text-wrap text-2xl px-8 md:p-0 lg:text-4xl max-w-2xl">
            Marketing Expertise
          </h2>
          <p className="p-4">
            In today's saturated markets, our tailored approach cuts through the
            noise to highlight your brand's unique voice. Our marketing
            solutions harness a dynamic mix of strategies to project your brand
            forward. From creating engaging digital and social media campaigns,
            to implementing strong SEO and content marketing tactics, we ensure
            online visibility and audience engagement. Whether it's through
            influencer collaborations, strategic branding, or expert advertising
            advice, our services are designed to enhance your brand's presence
            with target market tap-ins.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:max-w-3xl mx-auto pb-6 ">
          {marketingExpertise.map((item, index) => (
            <ServiceCard2 key={index} data={item} />
          ))}
        </div>
        <div className="lg:pb-8 pb-6 gap-4 flex flex-col lg:max-w-3xl mx-auto lg:text-center justify-center items-center ">
          <h2 className="font-bold font-cinzel text-wrap text-2xl px-8 md:p-0 lg:text-4xl max-w-2xl">
            Media Productions
          </h2>
          <p className="p-4">
            Tell your story in a way that resonates and engages. Our Media
            Production Solutions encompass a comprehensive range of services,
            from captivating advertising films and authoritative corporate films
            to professional photoshoots and precise 2D/3D rendering, we bring
            your vision to life. Dive into the expanding world of podcasts with
            our end-to-end production with meticulous scripting services.
            Whether it's a full-scale production or targeted media creation, we
            manage every detail to deliver impactful, high-quality content that
            is enjoyed by your audience.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:max-w-3xl mx-auto pb-6 ">
          {mediaProductions.map((item, index) => (
            <ServiceCard2 key={index} data={item} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services2;
