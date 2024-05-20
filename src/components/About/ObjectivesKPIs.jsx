import { objectives } from "../../utils/constants";

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
