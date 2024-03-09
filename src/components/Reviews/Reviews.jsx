import { useTheme } from "../../utils/ThemeContext";
import ReviewCard from "./ReviewCard";

const testimonial = [
  {
    title: "Phase 1",
    lists: ["Brand Research and Analysis", "Creation of Launch Strategy"],
  },
  {
    title: "Phase 2",
    lists: [
      "Curation of Content based on Final Strategy ",
      "Execution",
      "Optimisation",
    ],
  },
  {
    title: "Phase 3",
    lists: [
      "Research on Paid Media Strategy and Opportunities",
      "Execution of Paid Media Strategy",
    ],
  },
];

const Reviews = () => {
  const { darkMode } = useTheme();
  return (
    <div
      className={`p-4 md:p-8 lg:p-16 bg-gradient-to-l flex flex-col xl:h-screen md:justify-center md:items-center ${
        darkMode
          ? "to-gray-900 from-slate-950 text-white"
          : "to-neutral-300 from-white text-slate-800"
      }`}
    >
      <div className="pb-12 gap-2 flex flex-col items-center">
        <h2 className="font-bold font-georgia text-3xl md:text-4xl max-w-2xl">
          Plan of Action
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        {testimonial.map((item, index) => (
          <ReviewCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
