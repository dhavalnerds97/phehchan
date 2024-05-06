const PhotoCard = ({ service, isOdd }) => {
  return (
    <div
      className={`sm:mb-4 flex flex-col md:flex-row overflow-hidden text-wrap text-gray-50 border border-neutral-700 rounded-xl shadow-lg shadow-neutral-800 hover:shadow-xl hover:shadow-neutral-700/50 lg:h-full w-full group ${
        isOdd ? "md:flex-row-reverse " : ""
      }`}
    >
      <div className=" md:flex-1 shadow-xl md:w-2/3 rounded-xl lg:mt-6 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-6 lg:px-5 lg:pt-5 lg:pb-5">
        <img
          className="h-64 w-full object-cover lg:hidden object-center mt-2 rounded-lg shadow-2xl"
          src={service.imgURL}
          alt={service.title}
        />
        <h1 className="mt-5 font-bold text-2xl font-cinzel lg:mt-7">
          {service.title}
        </h1>
        <div className="my-3 w-24 border border-gray-400 "></div>
        <h1 className="font-apple text-gray-100  pt-2">
          {service.description}
        </h1>
      </div>
      <div className="hidden relative lg:block md:w-1/3 md:flex-1">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
          src={service.imgURL}
          alt="Ad- woman on a beach"
        />
      </div>
    </div>
  );
};

export default PhotoCard;
