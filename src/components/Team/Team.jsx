import { useTheme } from "../../utils/ThemeContext";
import { TeamMembers } from "../../utils/constants";
import Person from "./Person";

const Team = () => {
  const { darkMode } = useTheme();
  return (
    <section
      className={`p-4 md:p-8 lg:p-16 flex flex-col xl:h-screen md:justify-center md:items-center ${
        darkMode
          ? "bg-neutral-900 text-neutral-100"
          : "bg-gray-50 text-slate-800"
      }`}
    >
      <div className="pb-12 gap-2 flex flex-col items-center">
        <h2 className="font-bold text-3xl text-center font-cinzel md:text-4xl lg:text-5xl  max-w-2xl">
          Meet Our Awesome Team
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
        {TeamMembers.map((item, index) => (
          <Person key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Team;
