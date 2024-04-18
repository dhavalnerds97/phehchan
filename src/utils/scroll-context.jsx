import { createContext, useContext, useEffect, useRef } from "react";
import LocomotiveScroll from "@studio-freight/locomotive-scroll";

const ScrollContext = createContext(null);

export const useLocoScroll = () => useContext(ScrollContext);

export const LocoScrollProvider = ({ children }) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      scrollRef.current = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        direction: "horizontal", // Default is vertical, set to horizontal if needed
        reloadOnContextChange: true,
      });
    }

    return () => {
      scrollRef.current && scrollRef.current.destroy();
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scroll: scrollRef.current }}>
      <div ref={containerRef} data-scroll-container>
        {children}
      </div>
    </ScrollContext.Provider>
  );
};
