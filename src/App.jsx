import { useRef, useEffect, useState } from "react";
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
    const nextComponent = document.getElementById("navbar"); // ID of the next component
    if (nextComponent) {
      const targetPosition = nextComponent.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Duration of the scroll animation in milliseconds

      let start = null;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        window.scrollTo(0, startPosition + distance * percentage);
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  };

  return (
    <div className="md:flex md:overflow-x-auto md:overflow-y-hidden md:whitespace-nowrap md:w-dvw md:h-screen">
      {!removePlayback && <PlayBack ref={playbackRef} />}
      <div className="md:flex-shrink-0">
        <NavBar id="navbar" />
      </div>
      <div className="md:w-screen md:h-screen md:flex-shrink-0">
        <Hero />
      </div>
      <div className="md:w-screen md:h-screen md:flex-shrink-0">
        <Services />
      </div>
      <div className="md:w-screen md:h-screen md:flex-shrink-0">
        <Reviews />
      </div>
      <div className="md:w-screen md:h-screen">
        <Footer />
      </div>
    </div>
  );
};

export default App;
