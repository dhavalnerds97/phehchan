import { techSolutions } from "../../utils/constants";
import ProjectCard from "./PhotoCard";
import { useTheme } from "../../utils/ThemeContext";

const TechSolutions = () => {
  const { darkMode } = useTheme();
  return (
    <section className="relative w-full min-h-screen bg-neutral-900 overflow-auto">
      <div
        className={`p-4 lg:p-16 xl:pt-32 md:p-12 text-wrap flex flex-col md:justify-center  ${
          darkMode
            ? "bg-neutral-900 text-neutral-100"
            : "bg-gray-50 text-slate-800"
        }`}
      >
        <div className="lg:pb-8 pb-6 gap-4 flex flex-col lg:max-w-3xl mx-auto lg:text-center justify-center items-center ">
          <h2
            id="tech-solution"
            className="font-bold font-cinzel text-wrap text-2xl px-8 md:p-0 lg:text-4xl max-w-2xl"
          >
            Tech Solutions
          </h2>
          <p className="p-4">
            In a digital-first world, staying ahead of technology trends isn't
            just an option; it's a necessity. We specialize in custom web
            development that ensures your site is both visually appealing and
            highly functional, innovative app development to keep your brand at
            users' fingertips with versatile CMS solutions that simplify content
            management. Whether you're looking to enhance online engagement or
            streamline operations, our technology services are tailored to meet
            your unique needs and drive your success.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:max-w-3xl mx-auto pb-6 gap-6 ">
          {techSolutions.map((item, index) => (
            <ProjectCard key={index} service={item} isOdd={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSolutions;
