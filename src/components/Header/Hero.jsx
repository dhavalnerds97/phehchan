import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="flex justify-center md:h-screen items-center">
      <motion.div
        className="flex justify-between items-center flex-col p-4 md:p-12 md:max-w-4xl text-center"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="py-4 font-semibold text-4xl md:text-5xl text-wrap lg:text-7xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Pioneering your success through creativity
        </motion.h1>
        <motion.p
          className="py-4 md:py-12 lg:text-3xl text-lg text-wrap max-w-xl md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          At Osamu, we're trailblazers in providing creative solutions that
          deeply connect with your target audience, resulting in impactful,
          measurable success.
        </motion.p>
      </motion.div>
    </main>
  );
};

export default Hero;
