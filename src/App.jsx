import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Header/Hero";
import NavBar from "./components/Header/NavBar";
import PlayBack from "./components/Header/PlayBack";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";

const App = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [removePlayback, setRemovePlayback] = useState(false);
  const playbackRef = useRef(null);
  const containerRef = useRef(null);
  const controls = useAnimation();

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
        setRemovePlayback(true);
        smoothScrollToNextComponent();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [videoLoaded, removePlayback]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const smoothScrollToNextComponent = () => {
    controls.start({ x: containerRef.current.offsetWidth });
  };

  const handleWheel = (e) => {
    const delta = Math.max(-1, Math.min(1, e.deltaY));
    containerRef.current.scrollLeft -= delta * 50;
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault(); // Prevent default page scrolling
      const delta = e.key === "ArrowDown" ? -50 : 50;
      containerRef.current.scrollLeft -= delta;
    }
  };

  return (
    <motion.div
      className="md:flex md:overflow-x-auto md:overflow-y-hidden md:whitespace-nowrap md:w-dvw md:h-screen"
      onWheel={handleWheel}
      onKeyDown={handleKeyDown}
      ref={containerRef}
      tabIndex={0} // Make the container focusable to capture key events
      style={{ overflow: "hidden" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {!removePlayback && (
        <motion.div
          className="md:w-screen md:h-screen md:flex-shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <PlayBack ref={playbackRef} />
        </motion.div>
      )}
      <motion.div
        className="md:flex-shrink-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <NavBar id="navbar" />
      </motion.div>
      <motion.div
        className="md:w-screen md:h-screen md:flex-shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Hero />
      </motion.div>
      <motion.div
        className="md:w-screen md:h-screen md:flex-shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Services />
      </motion.div>
      <motion.div
        className="md:w-screen md:h-screen md:flex-shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Reviews />
      </motion.div>
      <motion.div
        className="md:w-screen md:h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default App;
