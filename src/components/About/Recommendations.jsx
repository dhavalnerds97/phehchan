import { useTheme } from "../../utils/ThemeContext";

const recommendationsData = [
  {
    title: "Search Engine Optimisation",
    description:
      "Access to right content at the right time can have a major impact in generating awareness amongst the stakeholders",
  },
  {
    title: "Social Media Interactions and Postings.",
    description:
      "Constant Interaction is a key concept when it comes to engaging the end consumer. Podcasts, Reels etc can be a great tool to amplify reach.",
  },
  {
    title: "Chameleon Mascot",
    description:
      "Logo along with a child mascot can have a major impact on success rates of the campaign, which can be translated into future campaigns to create synergy",
  },
  {
    title: "Gamefication",
    description:
      "Tapping into the current digital audience and utilising the Million Pledges Arm to curate a digital badge to instil a sense of pride. Great tool for brand integration.",
  },
  {
    title: "Emailer and Whatsapp Campaign",
    description:
      "Allows to reach the stakeholders in real time, makes targeted messaging easier and additionally, lets you stay in touch with your stakeholders",
  },
];

const Recommendations = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`text-wrap p-8 lg:p-16 grid grid-cols-1 md:items-center md:grid-cols-2 md:gap-12 lg:gap-16 lg:h-screen ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-slate-800"
      }`}
    >
      <div className="bg-gray-400">Image</div>
      <div className="text-wrap">
      <h2 className=" py-4 font-bold text-4xl font-georgia lg:text-6xl">Recommendations </h2>
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
