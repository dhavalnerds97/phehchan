import { useTheme } from "../../utils/ThemeContext";
import { stakeholdersData } from "../../utils/constants";

const Stakeholders = () => {
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
        <h2 className=" py-4 font-bold text-4xl font-cinzel lg:text-6xl">
          Stakeholders for SCP
        </h2>
        {stakeholdersData.map((item, index) => (
          <div key={index} className="py-1">
            <h2 className="font-semibold font-urbanist text-lg sm:-ms-2">
              {" "}
              {item.heading}
            </h2>
            <p className="font-quicksand">
              <strong>Channel: </strong> {item.channel}
            </p>
            <p className="pb-2 font-apple">
              <strong>{item.title}: </strong> {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stakeholders;
