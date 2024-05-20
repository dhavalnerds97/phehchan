import { useTheme } from "../../utils/ThemeContext";
import { testimonial } from "../../utils/constants";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const { darkMode } = useTheme();
  return (
    <section
      className={`p-4 md:p-8 lg:p-16 bg-gradient-to-l flex flex-col xl:h-screen md:justify-center md:items-center ${
        darkMode
          ? "to-gray-900 from-slate-950 text-neutral-100"
          : "to-neutral-300 from-white text-slate-800"
      }`}
    >
      <div className="pb-12 gap-2 flex flex-col items-center">
        <h2 className="font-bold font-cinzel text-3xl md:text-4xl max-w-2xl">
          Plan of Action
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        {testimonial.map((item, index) => (
          <ReviewCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
