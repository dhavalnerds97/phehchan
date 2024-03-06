import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";

const testimonial = [
  {
    name: "Emily Thompson",
    title: "Marketing Director, Tech Innovators Inc.",
    feedback:
      "Working with Osamu was a game-changer for us. Their expertise in UX/UI design transformed our user experience, resulting in a 30% increase in user engagement. We couldn't be happier!",
  },
  {
    name: "Emily Thompson",
    title: "Marketing Director, Tech Innovators Inc.",
    feedback:
      "Working with Osamu was a game-changer for us. Their expertise in UX/UI design transformed our user experience, resulting in a 30% increase in user engagement. We couldn't be happier!",
  },
  {
    name: "Emily Thompson",
    title: "Marketing Director, Tech Innovators Inc.",
    feedback:
      "Working with Osamu was a game-changer for us. Their expertise in UX/UI design transformed our user experience, resulting in a 30% increase in user engagement. We couldn't be happier!",
  },
];

const Reviews = () => {
  return (
    <div className="p-4 md:p-16 text-slate-800 flex flex-col md:h-screen md:justify-center md:items-center">
      <div className="pb-12 gap-2 flex flex-col items-center">
        <h2 className="font-bold text-3xl md:text-4xl max-w-2xl">
          Words of Appreciation:
        </h2>
        <h2 className="font-bold text-3xl md:text-4xl max-w-2xl">
          Our Client's Success Stories
        </h2>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {testimonial.map((item, index) => (
          <ReviewCard key={index} data={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default Reviews;
