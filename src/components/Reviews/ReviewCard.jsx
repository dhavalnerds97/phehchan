const ReviewCard = ({ data }) => {
  return (
    <div className="p-6 md:p-8 border rounded-lg shadow-lg">
      <div className="flex gap-4 py-2 md:pb-6 items-center">
        <div className="h-12 w-12 rounded-lg bg-gray-200"></div>
        <div>
          <h2 className="font-bold text-lg">{data.name}</h2>
          <p className="text-sm font-light text-gray-700">{data.title}</p>
        </div>
      </div>
      <div className="text-gray-700 ">
        <p>{data.feedback}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
