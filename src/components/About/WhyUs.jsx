import { useTheme } from "../../utils/ThemeContext";
import TextMask from "../ui/TextMask";
import { ImageDiv } from "../ui/motion";

const WhyUs = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="why-us"
      className={`text-wrap p-8 lg:p-12 grid grid-cols-1 md:items-center md:grid-cols-2 md:gap-12 ${
        darkMode
          ? "bg-neutral-700/50 text-neutral-100"
          : "bg-gray-50 text-slate-800"
      }`}
    >
      <div className="flex relative overflow-hidden place-content-center bg-cover object-center">
        <ImageDiv>
          <img src="img1.png" alt="why-us" />
        </ImageDiv>
      </div>
      <div className="text-wrap">
        <h2 className=" py-4 font-bold text-5xl font-cinzel lg:text-7xl">
          {" "}
          <TextMask>{["Why Us?"]}</TextMask>
        </h2>
        <h3 className="text-xl font-quicksand">We build brands people love</h3>
        <p className="py-2  font-quicksand">
          Phehchan is an agency where excellence thrives with a team of elite
          professionals who boast years of industry experience. With an
          unwavering focus on attention to detail and a relentless dedication to
          brainstorming, we possess the unique ability to craft brands that
          captivate the hearts and minds of consumers, while creating campaigns
          that leave an indelible mark.
        </p>
        <p className="py-2  font-quicksand ">
          Every project we undertake is infused with our passion for creativity
          and our commitment to excellence. Our talented team, comprising
          strategic thinkers, visionary designers, and persuasive wordsmiths,
          collaborates seamlessly to bring forth innovative and compelling
          solutions for our clients.
        </p>
      </div>
    </section>
  );
};

export default WhyUs;
