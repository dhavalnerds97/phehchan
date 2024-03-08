import { useTheme } from "../../utils/ThemeContext";

const ReviewCard = ({ data }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`p-6 md:p-8 border md:h-auto rounded-lg shadow-lg hover:shadow-xl transform  hover:scale-105 transition duration-300 ease-in-out ${
        darkMode
          ? "bg-gray-950 text-white shadow-lg shadow-gray-700 border-gray-700"
          : "bg-white"
      }`}
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
      <div
        className={`text-wrap  ${
          darkMode ? "text-gray-200" : "text-gray-700"
        } `}
      >
        <p>{data.feedback}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
