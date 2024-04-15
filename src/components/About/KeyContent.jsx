import { useTheme } from "../../utils/ThemeContext";

const keyContentData = [
  {
    title: "Project Information",
    description:
      "Access to right content at the right time can have a major impact in generating",
  },
  {
    title: "Value Added Content",
    description:
      "Content that will add to or develop knowledge about a certain topic with regards to the SDGs",
  },
  {
    title: "Inspirational Content",
    description:
      "Content that will uplift and provide encouragement to budding change makers/chameleons.",
  },
  {
    title: "Testimonials",
    description:
      "Content that will provide value and credibility to the brand and its services",
  },
];

const KeyContent = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`text-wrap p-8 lg:p-16 grid grid-cols-1 md:items-center md:grid-cols-2 md:gap-12 lg:gap-16 lg:h-screen ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-slate-800"
      }`}
    >
      <div className="bg-gray-400">Image</div>
      <div className="text-wrap">
        <h2 className=" py-4 font-bold text-4xl font-georgia lg:text-6xl">
          Key Content Buckets
        </h2>
        {keyContentData.map((item, index) => (
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

export default KeyContent;
