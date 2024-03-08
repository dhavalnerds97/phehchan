import { useTheme } from "../../utils/ThemeContext";

const ServiceCard = (props) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`border drop-shadow-xl p-6 sm:p-3 lg:p-6 rounded-lg text-wrap ${
        darkMode
          ? "bg-gray-950 text-white shadow-lg shadow-gray-700 border-gray-700"
          : "bg-white text-slate-700"
      }`}
    >
      <h2 className="font-bold text-lg">{props.data.title}</h2>
      <div className="my-4 w-24 border border-gray-400 "></div>
      <p
        className={` text-wrap ${
          darkMode ? "text-gray-200" : "text-slate-600"
        }`}
      >
        {props.data.description}
      </p>
    </div>
  );
};

export default ServiceCard;
