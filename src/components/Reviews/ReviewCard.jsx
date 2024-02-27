import { motion } from "framer-motion";

const ReviewCard = ({ data }) => {
  return (
    <motion.div
      className="p-6 md:p-8 border md:h-auto rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
    >
      <div className="flex gap-4 py-2 md:pb-6 items-center">
        <div className="size-12 animate-pulse rounded-lg bg-gray-200"></div>
        <div className="text-wrap">
          <h2 className="font-bold text-lg">{data.name}</h2>
          <p className="text-sm font-light text-wrap text-gray-700">
            {data.title}
          </p>
        </div>
      </div>
      <div className="text-gray-700 text-wrap">
        <p>{data.feedback}</p>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
