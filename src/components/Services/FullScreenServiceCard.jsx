import TextMask from "../ui/TextMask";
import RevealCover, { ImageDiv } from "../ui/motion";

const FullScreenServiceCard = ({ service, isOdd }) => {
  return (
    <div
      className={`xl:h-full w-full lg-md:flex lg-md:items-center cursor-pointer lg-md:px-12 lg-md:gap-4 pb-2 xl:w-[300px] ${
        isOdd ? "lg-md:flex-row-reverse " : ""
      }`}
    >
      <div className="w-full h-72 max-h-72 relative overflow-hidden lg-md:flex-1 xl:h-[45%]">
        <RevealCover />
        <ImageDiv>
          <img
            src={service.imgURL}
            alt=""
            className="object-cover object-center w-full h-full"
          />
        </ImageDiv>
      </div>
      <div className="md:p-2 p-4 lg:px-4 text-wrap lg-md:flex-1 lg-md:text-justify xl:h-[55%]">
        <h2 className="font-cinzel text-2xl font-bold">
          <TextMask>{service.title}</TextMask>
        </h2>
        <div className="my-3 w-24 border border-gray-400 "></div>
        <p className="font-lato text font-light text-justify tracking-wide">
          {service.description.split(" ").slice(0, 40).join(" ") + ".."}
        </p>
      </div>
    </div>
  );
};

export default FullScreenServiceCard;
