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
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [videoLoaded, removePlayback]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="md:flex md:overflow-x-auto md:overflow-y-hidden md:whitespace-nowrap md:w-dvw md:h-screen">
      {!removePlayback && (
        <div className="md:w-screen md:h-screen md:flex-shrink-0">
          <PlayBack ref={playbackRef} />
        </div>
      )}
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
