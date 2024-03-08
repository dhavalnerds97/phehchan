import { useTheme } from "../../utils/ThemeContext";
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
  const { darkMode } = useTheme();
  return (
    <div
      className={`p-4 lg:p-16 bg-gradient-to-l flex flex-col xl:h-screen md:justify-center md:items-center ${
        darkMode
          ? "to-gray-900 from-slate-950 text-white"
          : "to-neutral-300 from-white text-slate-800"
      }`}
    >
      <div className="pb-12 gap-2 flex flex-col items-center">
        <h2 className="font-bold text-3xl md:text-4xl max-w-2xl">
          Words of Appreciation:
        </h2>
        <h2 className="font-bold text-3xl md:text-4xl max-w-2xl">
          Our Client's Success Stories
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12">
        {testimonial.map((item, index) => (
          <ReviewCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
