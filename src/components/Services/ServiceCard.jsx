import { useTheme } from "../../utils/ThemeContext";

const ServiceCard = (props) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`border drop-shadow-xl p-4 lg:p-6 rounded-lg text-wrap transition duration-100 ease-in-out ${
        darkMode
          ? "bg-gray-950 text-white shadow-lg shadow-gray-700 border-gray-700"
          : "bg-white text-slate-700"
      }`}
    >
      <h2 className="font-bold font-rubik text-lg">{props.data.title}</h2>
      <div className="my-4 w-24 border border-gray-400 "></div>
      <p
        className={` text-wrap font-nunito ${
          darkMode ? "text-gray-200" : "text-slate-600"
        }`}
      >
        {props.data.description}
      </p>
    </div>
  );
};

export default ServiceCard;
