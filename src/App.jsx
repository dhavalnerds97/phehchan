import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/About/AboutUs";
import Body from "./components/Body/Body";
import NavBar from "./components/Header/NavBar";
import PlayBack from "./components/Header/PlayBack";

const App = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [removePlayback, setRemovePlayback] = useState(false);
  const playbackRef = useRef(null);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const { scrollXProgress } = useScroll({ container: containerRef });

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
    containerRef.current.scrollLeft += delta * 80;
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
        <Outlet />
      </motion.div>
      <svg
        id="progress"
        width="60"
        height="60"
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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);

export default appRouter;
