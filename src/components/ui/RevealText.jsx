import { animation } from "./motion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function RevelText({ children }) {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  return (
    <div ref={ref}>
      {children.map((phrase, index) => (
        <div key={index} className="overflow-hidden">
          <motion.p
            custom={index}
            variants={animation}
            initial="initial"
            animate={inView ? "enter" : ""}
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
}
