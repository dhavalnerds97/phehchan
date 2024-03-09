import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import ApproachObjCapab from "./components/About/ApproachObjCapab";
import CelebsRecs from "./components/About/CelebsRecs";
import KeyContent from "./components/About/KeyContent";
import Recommendations from "./components/About/Recommendations";
import WhyUs from "./components/About/WhyUs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Header/Hero";
import NavBar from "./components/Header/NavBar";
import PlayBack from "./components/Header/PlayBack";
import Reviews from "./components/Reviews/Reviews";
import Stakeholders from "./components/Reviews/Stakeholders";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import { useTheme } from "./utils/ThemeContext";

const App = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [removePlayback, setRemovePlayback] = useState(false);
  const playbackRef = useRef(null);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const { scrollXProgress } = useScroll({ container: containerRef });
  const { darkMode } = useTheme();

  useEffect(() => {
    let videoElement = null;
    if (playbackRef.current && !videoLoaded) {
      videoElement = playbackRef.current;
      videoElement.addEventListener("loadedmetadata", handleVideoLoaded);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("loadedmetadata", handleVideoLoaded);
      }
    };
  }, [playbackRef, videoLoaded]);

  useEffect(() => {
    if (videoLoaded && !removePlayback) {
      const timer = setTimeout(() => {
        setTimeout(() => {
          setRemovePlayback(true);
          smoothDisappearPlayback();
        }, 200);
        smoothScrollToNextComponent();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [videoLoaded, removePlayback]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const smoothDisappearPlayback = async () => {
    await controls.start({ opacity: 0, transition: { duration: 0.5 } });
  };

  const smoothScrollToNextComponent = () => {
    controls.start({ x: -containerRef.current.offsetWidth });
  };

  const handleWheel = (e) => {
    const delta = Math.max(-1, Math.min(1, e.deltaY));
    containerRef.current.scrollLeft += delta * 50;
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      const delta = e.key === "ArrowDown" ? -50 : 50;
      containerRef.current.scrollLeft -= delta;
    }
  };

  return (
    <>
      <motion.div
        className="xl:flex xl:overflow-x-auto xl:overflow-y-hidden xl:whitespace-nowrap xl:w-dvw xl:h-screen"
        onWheel={handleWheel}
        onKeyDown={handleKeyDown}
        ref={containerRef}
        tabIndex={0}
        style={{ overflow: "hidden" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {!removePlayback && (
          <motion.div
            className="xl:w-screen xl:h-screen xl:flex-shrink-0"
            initial={{ opacity: 1 }}
            animate={controls}
          >
            <PlayBack ref={playbackRef} />
          </motion.div>
        )}
        {removePlayback && (
          <motion.div
            className="xl:flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <NavBar id="navbar" />
          </motion.div>
        )}
        <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
          <Hero />
        </div>
        <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
          <Services />
        </div>
        <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
          <Reviews />
        </div>
        <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
          <Team />
        </div>
        <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
          <ApproachObjCapab />
        </div>
        <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
          <Stakeholders />
        </div>
        <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
          <KeyContent />
        </div>
        <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
          <Recommendations />
        </div>
        <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
          <CelebsRecs />
        </div>
        <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
          <WhyUs />
        </div>
        <div className="xl:w-screen xl:h-screen">
          <Footer />
        </div>
      </motion.div>
      <svg
        id="progress"
        width="100"
        height="100"
        className="hidden xl:block"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
    </>
  );
};

export default App;
