const ServiceCard = (props) => {
  return (
    <div className=" border drop-shadow-xl p-6 bg-white rounded-lg">
      <h2 className="font-bold text-lg">{props.data.title}</h2>
      <div className="my-4 w-24 border border-gray-400 "></div>
      <p className="text-gray-700">{props.data.description}
      </p>
    </div>
  );
};

export default ServiceCard;
