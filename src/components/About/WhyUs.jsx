import { useTheme } from "../../utils/ThemeContext";

const WhyUs = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`text-wrap p-8 lg:p-16 grid grid-cols-1 md:items-center md:grid-cols-2 md:gap-12 lg:gap-16 lg:h-screen ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-slate-800"
      }`}
    >
      <div className="bg-gray-400">Image</div>
      <div className="text-wrap">
        <h2 className=" py-4 font-bold text-5xl font-cinzel lg:text-7xl"> Why Us</h2>
        <h3 className="text-xl font-quicksand">We build brands people love</h3>
        <p className="py-2 font-medium font-slab">
          Phehchan is an agency where excellence thrives with a team of elite
          professionals who boast years of industry experience. With an
          unwavering focus on attention to detail and a relentless dedication to
          brainstorming, we possess the unique ability to craft brands that
          captivate the hearts and minds of consumers, while creating campaigns
          that leave an indelible mark.
        </p>
        <p className="py-2 font-medium font-slab">
          Every project we undertake is infused with our passion for creativity
          and our commitment to excellence. Our talented team, comprising
          strategic thinkers, visionary designers, and persuasive wordsmiths,
          collaborates seamlessly to bring forth innovative and compelling
          solutions for our clients.
        </p>
      </div>
    </div>
  );
};

export default WhyUs;
