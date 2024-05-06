import { useTheme } from "../../utils/ThemeContext";
import { useActiveSectionContext } from "../../utils/active-section-context";
import {
  marketingExpertise,
  mediaProductions,
  techSolutions,
} from "../../utils/constants";
import { useSectionInView } from "../../utils/useSectionInView";
import PrimaryButton from "../ui/PrimaryButton";
import PhotoCard from "./PhotoCard";
import ProjectCard from "./PhotoCard";
import ServiceCard2 from "./ServiceCard2";
import { motion } from "framer-motion";

const Services2 = () => {
  const { ref } = useSectionInView("Services");
  const { darkMode } = useTheme();

  return (
    <motion.section
      ref={ref}
      className="services-container relative w-full min-h-screen pt-24 bg-neutral-900 overflow-auto"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="services"
    >
      <div
        className={`p-4 lg:p-16 xl:pt-16 md:p-12 text-wrap flex flex-col md:justify-center  ${
          darkMode
            ? "bg-neutral-900 text-neutral-100"
            : "bg-gray-50 text-slate-800"
        }`}
      >
        <div className="lg:pb-8 pb-6 gap-4 flex flex-col lg:max-w-3xl mx-auto lg:text-center justify-center items-center ">
          <h2 className="font-bold font-cinzel text-wrap text-3xl px-8 md:p-0 lg:text-4xl max-w-2xl">
            Our services
          </h2>
          <h2
            id="marketing-expertise"
            className="font-bold font-cinzel text-wrap text-2xl px-8 md:p-0 lg:text-4xl max-w-2xl"
          >
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
        <div className="grid grid-cols-1 gap-6 lg:max-w-3xl mx-auto pb-6 ">
          {marketingExpertise.map((item, index) => (
            <ProjectCard key={index} service={item} isOdd={index % 2 !== 0} />
          ))}
        </div>
        <div className="lg:pb-8 pb-6 gap-4 flex flex-col lg:max-w-3xl mx-auto lg:text-center justify-center items-center ">
          <h2
            id="media-production"
            className="font-bold font-cinzel text-wrap text-2xl px-8 md:p-0 lg:text-4xl max-w-2xl"
          >
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
        <div className="grid grid-cols-1 lg:max-w-3xl mx-auto pb-6 gap-6 ">
          {mediaProductions.map((item, index) => (
            <ProjectCard key={index} service={item} isOdd={index % 2 !== 0} />
          ))}
        </div>
        <div className="lg:pb-8 pb-6 gap-4 flex flex-col lg:max-w-3xl mx-auto lg:text-center justify-center items-center ">
          <h2
            id="tech-solution"
            className="font-bold font-cinzel text-wrap text-2xl px-8 md:p-0 lg:text-4xl max-w-2xl"
          >
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
        <div className="grid grid-cols-1 lg:max-w-3xl mx-auto pb-6 gap-6 ">
          {techSolutions.map((item, index) => (
            <ProjectCard key={index} service={item} isOdd={index % 2 !== 0} />
          ))}
        </div>
      </div>

      {/* <div className="max-lg:hidden flex sticky px-10 bottom-10 justify-between items-end">
        <a
          href="#about"
          className="sticky font-bold text-neutral-100 text-4xl left-0 bottom-10 z-10"
          onClick={(e) => {
            setActiveSection("About Us");
            setTimeOfLastClick(Date.now());
            handleScroll(e);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="32px"
            width="32px"
            className="rotate-180"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 490 490"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <g>
                  <path d="M490,245C490,109.9,380.1,0,245,0S0,109.9,0,245s109.9,245,245,245S490,380.1,490,245z M34.3,245     c0-116.2,94.5-210.7,210.7-210.7S455.7,128.8,455.7,245S361.2,455.7,245,455.7S34.3,361.2,34.3,245z" />
                  <path d="M302.3,232.9l-72.1-72.1c-6.7-6.7-17.6-6.7-24.3,0s-6.7,17.6,0,24.3l60,60l-60,60c-6.7,6.7-6.7,17.6,0,24.3     c3.3,3.3,7.7,5,12.1,5c4.4,0,8.8-1.7,12.1-5l72.1-72.1C309,250.4,309,239.6,302.3,232.9z" />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </g>
          </svg>
        </a>
        <a
          href="#contact"
          className="sticky font-bold text-neutral-100 text-4xl bottom-10  z-10"
          onClick={(e) => {
            setActiveSection("Why Us");
            setTimeOfLastClick(Date.now());
            handleScroll(e);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="32px"
            width="32px"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 490 490"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <g>
                  <path d="M490,245C490,109.9,380.1,0,245,0S0,109.9,0,245s109.9,245,245,245S490,380.1,490,245z M34.3,245     c0-116.2,94.5-210.7,210.7-210.7S455.7,128.8,455.7,245S361.2,455.7,245,455.7S34.3,361.2,34.3,245z" />
                  <path d="M302.3,232.9l-72.1-72.1c-6.7-6.7-17.6-6.7-24.3,0s-6.7,17.6,0,24.3l60,60l-60,60c-6.7,6.7-6.7,17.6,0,24.3     c3.3,3.3,7.7,5,12.1,5c4.4,0,8.8-1.7,12.1-5l72.1-72.1C309,250.4,309,239.6,302.3,232.9z" />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </g>
          </svg>
        </a>
      </div> */}
    </motion.section>
  );
};

export default Services2;
