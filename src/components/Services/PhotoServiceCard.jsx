import RevealCover from "../ui/motion";

export const PhotoServiceCard = ({ service, isOdd }) => {
  return (
    <div className="max-w-md relative mx-auto text-wrap h-full w-full text-gray-50 border border-neutral-700 rounded-xl hover:shadow-lg hover:shadow-neutral-700/50 lg:max-h-96 transition-all group shadow-md overflow-hidden md:max-w-2xl">
      <RevealCover />

      <div
        className={`md:flex md:items-center ${
          isOdd ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-72 max-h-64 min-h-48 group-hover:scale-105 transition-all duration-500 ease-in-out"
            src={service.imgURL}
            alt={service.title}
          />
        </div>
        <div className="p-4 sm:px-6">
          <h2 className="block mt-1  leading-tight  text-2xl font-cinzel font-bold">
            {service.title}
          </h2>
          <div className="my-3 w-24 border border-gray-400"></div>
          <p className="mt-2 text-slate-100">{service.description}</p>
        </div>
      </div>
    </div>
  );
};
