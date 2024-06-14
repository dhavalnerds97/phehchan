const HoverEffectCard = ({ item }) => {
  const { id, title, description } = item;
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-2xl text-wrap px-6 pb-4 pt-6 shadow-xl shadow-neutral-900/80 ring-1 ring-gray-900/5 transition-all duration-300 ease-in-out  hover:shadow-2xl">
      <span className="absolute top-6 z-0 size-14 rounded-full bg-neutral-700 transition-all duration-700 group-hover:scale-[16]"></span>
      <div className="relative z-10 mx-auto max-w-md">
        <span className="grid size-14 place-items-center rounded-full font-NeueMontreal text-2xl transition-all duration-500 group-hover:bg-neutral-900">
          {id}
        </span>
        <div className="space-y-3 pt-3 text-base leading-7 text-primary transition-all duration-300 group-hover:text-secondary">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-primary/80 group-hover:text-secondary font-nunito">
            {description}
          </p>
        </div>
        {/* <div className="pt-5 text-base font-semibold leading-7">
          <p>
            <a
              href="#"
              className="text-primary transition-all duration-300 group-hover:text-secondary"
            >
              Read the docs &rarr;
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default HoverEffectCard;
