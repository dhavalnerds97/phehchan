const objectives = [
  {
    title: "Company Goal:",
    description:
      "To create a platform for schools to share stories ofinnovation, action and proactive behaviour, which could be adopted by others for creating a better world.",
  },
  {
    title: "Marketing Goal:",
    description:
      "To create awareness about stories of humanism, change, impact and equitable world via a large platform, capable of enabling an exchange, build on the learning and have domino effectfor change.",
  },
  {
    title: "Plan:",
    description:
      "Create targeted campaigns to break into new market segments to generate awareness amongst stakeholders.",
  },
  {
    title: "KPI:",
    description: "Impressions and Click-Through-Rate. ",
  },
];

const ObjectivesKPIs = () => {
  return (
    <div className="text-wrap max-sm:text-center">
      <h2 className="text-2xl lg:text-3xl py-4 font-cinzel font-semibold">
        Objectives & KPI's
      </h2>
      {objectives.map((item, index) => (
        <div key={index} className="py-1">
          <h2 className="font-medium pb-1">{item.title}</h2>
          <p className="pb-2 text-sm sm:max-w-xl">{item.description} </p>
        </div>
      ))}
    </div>
  );
};

export default ObjectivesKPIs;
