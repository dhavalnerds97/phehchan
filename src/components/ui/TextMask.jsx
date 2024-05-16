import { animation } from "./motion";
import { easeIn, easeInOut, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TextMask({ children }) {
  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {children.map((phrase, index) => (
        <div key={index} className="overflow-hidden">
          <motion.p
            custom={index}
            variants={animation}
            initial="initial"
            transition={easeInOut}
            animate={inView ? "enter" : ""}
            className=""
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
}
