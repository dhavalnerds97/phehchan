import { useTheme } from "../../utils/ThemeContext";

const ReviewCard = ({ data }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`p-6 md:p-8 text-wrap border md:h-auto rounded-lg shadow-lg hover:shadow-xl transform  hover:scale-105 transition duration-300 ease-in-out ${
        darkMode
          ? "bg-gray-950 text-white shadow-lg shadow-gray-700 border-gray-700"
          : "bg-white"
      }`}
    >
      <div className="flex gap-4 py-2 md:pb-6 items-center">
        <div className="">
          <h2 className="font-bold text-lg">{data.title}</h2>
        </div>
      </div>
      <ul
        className={`${
          darkMode ? "text-gray-200" : "text-gray-700"
        } `}
      >
        {data?.lists.map((item, index) => (
          <li key={index} className="list-decimal ms-4 pb-0.5">{item} </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewCard;
