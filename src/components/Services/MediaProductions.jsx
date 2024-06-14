import { useTheme } from "../../utils/ThemeContext";
import { mediaProductions } from "../../utils/constants";
import TextMask from "../ui/TextMask";
import ProjectCard from "./PhotoCard";
import { PhotoServiceCard } from "./PhotoServiceCard";

const MediaProductions = () => {
  const { darkMode } = useTheme();
  return (
    <section className="relative w-full min-h-screen bg-neutral-900 pt-24 overflow-auto">
      <div
        className={`p-4 lg:p-16 xl:pt-16 md:p-12 text-wrap flex flex-col md:justify-center  ${
          darkMode
            ? "bg-neutral-900 text-neutral-100"
            : "bg-gray-50 text-slate-800"
        }`}
      >
        <div className="lg:pb-8 pb-6 gap-4 flex flex-col lg:max-w-3xl mx-auto lg:text-center justify-center items-center ">
          <h2
            id="media-production"
            className="font-bold font-cinzel text-wrap text-2xl px-8 md:p-0 lg:text-4xl max-w-2xl"
          >
            <TextMask>{["Media Productions"]}</TextMask>
          </h2>
          <p className="p-4">
            Tell your story in a way that resonates and engages. Our Media
            Production Solutions encompass a comprehensive range of services,
            from captivating advertising films and authoritative corporate films
            to professional photoshoots and precise 2D/3D rendering, we bring
            your vision to life. Dive into the expanding world of podcasts with
            our end-to-end production with meticulous scripting services.
            Whether it's a full-scale production or targeted media creation, we
            manage every detail to deliver impactful, high-quality content that
            is enjoyed by your audience.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:max-w-3xl mx-auto pb-6 gap-6 ">
          {mediaProductions.map((item, index) => (
            <PhotoServiceCard
              key={index}
              service={item}
              isOdd={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaProductions;
