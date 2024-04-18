import { useTheme } from "../../utils/ThemeContext";

const ServiceCard2 = (props) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={` p-4 py-5 lg:p-6 rounded-lg text-wrap transition duration-100 ease-in-out ${
        darkMode
          ? "bg-neutral-900 text-neutral-100 "
          : "bg-white text-slate-700"
      }`}
    >
      <h2 className="font-bold font-rubik text-lg">{props.data.title}</h2>
      <div className="my-3 w-24 border border-gray-400 "></div>
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

export default ServiceCard2;
