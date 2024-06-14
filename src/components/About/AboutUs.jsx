import { useActiveSectionContext } from "../../utils/active-section-context";
import { useSectionInView } from "../../utils/useSectionInView";
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
      className="about-us-container relative w-full min-h-screen bg-neutral-400 overflow-auto"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <WhyUs />
      {/* <Services /> */}
      <ApproachObjCapab />
      {/* <Team /> */}
      {/* <div className="hidden lg:block"> */}
      <div className="lg:flex hidden sticky px-8 bottom-10 justify-between items-end">
        <a
          href="#hero"
          className="sticky font-bold text-neutral-100 text-4xl bottom-10 z-10"
          onClick={(e) => {
            setActiveSection("Hero");
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
          href="#method"
          className="sticky font-bold text-neutral-100 text-4xl bottom-10 z-10"
          onClick={(e) => {
            setActiveSection("Method");
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
      </div>
      {/* </div> */}
    </motion.section>
  );
};

export default AboutUs;
