const FullScreenServiceCard = ({ service, isOdd }) => {
  return (
    <div
      className={`xl:h-full w-full lg-md:flex lg-md:items-center xl:w-[360px] ${
        isOdd ? "lg-md:flex-row-reverse " : ""
      }`}
    >
      <div className="w-full h-72 lg-md:flex-1 xl:h-[45%]">
        <img
          src={service.imgURL}
          alt=""
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="md:p-3 p-4 text-wrap lg-md:flex-1 lg-md:text-justify xl:h-[55%]">
        <h2 className="font-cinzel text-2xl font-bold">{service.title}</h2>
        <div className="my-3 w-24 border border-gray-400 "></div>
        <p className="font-lato text-lg font-light tracking-wide">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default FullScreenServiceCard;
