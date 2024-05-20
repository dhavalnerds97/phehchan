import { useTheme } from "../../utils/ThemeContext";
import { recommendationsData } from "../../utils/constants";

const Recommendations = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`text-wrap p-8 lg:p-16 grid grid-cols-1 md:items-center md:grid-cols-2 md:gap-12 lg:gap-16 lg:h-screen ${
        darkMode
          ? "bg-neutral-900 text-neutral-100"
          : "bg-gray-50 text-slate-800"
      }`}
    >
      <div className="bg-gray-400">Image</div>
      <div className="text-wrap">
        <h2 className=" py-4 font-bold text-4xl font-georgia lg:text-6xl">
          Recommendations{" "}
        </h2>
        {recommendationsData.map((item, index) => (
          <div key={index} className="py-1">
            <h2 className="font-medium text-lg">{item.title}</h2>
            <p className="pb-2 text-sm">{item.description} </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
