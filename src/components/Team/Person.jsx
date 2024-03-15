const Person = ({data}) => {
  return (
    <div>
      <figure className="md:flex rounded-xl p-8 md:p-0">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src=""
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption className="font-medium">
            <div className="text-slate-500 font-urbanist ">{data.title}</div>
            <div className=" font-fantasy-">{data.name}</div>
          </figcaption>
          <blockquote>
            <p className="text-wrap font-nunito font-medium">{data.about}
            </p>
          </blockquote>
        </div>
      </figure>
    </div>
  );
};

export default Person;
