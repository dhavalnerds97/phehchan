import { useTheme } from "../../utils/ThemeContext";
import Person from "./Person";

const TeamMembers = [
  {
    name: "Apurv Mehraa",
    title: "Co-Founder",
    about:
      "Co-founder of Mehra & Mehraa Legal LLP in Surat & Mumbai. Launched Advisory Services for the Advertising Standards Council of India. A decade-long content creator. Former Digital Marketing faculty at Auro University, Surat.",
  },
  {
    name: "Seema Sood",
    title: "Co-Founder",
    about:
      "Seema, a seasoned journalist with 25+ years' experience, reported for Indian Express, wrote for North-East Times and The Sentinel. She's taught, worked in corporate communications, and led initiatives at Leo Burnett. Notably, she's involved in NGO leadership and impactful advertising campaigns.",
  },
  {
    name: "Anmol Nikam",
    title: "Lead Graphic Designer",
    about:
      "A versatile designer with a passion for exploring diverse mediums. Draws from experience in game design, graphic design, UI/UX, and illustration to innovate. Embraces learning and collaboration, adept at adapting to new challenges and technologies.",
  },
  {
    name: "Vaishali Bhargava",
    title: "Lead Copywriter",
    about:
      "Passionate about crafting impactful narratives, merging romanticism with brand creativity. Eager to explore every facet of advertising, fueled by curiosity and perpetual growth. Balances social interactions with introspective cocooning.",
  },
];

const Team = () => {
  const { darkMode } = useTheme();
  return (
    <div
      className={`p-4 md:p-8 lg:p-16 flex flex-col xl:h-screen md:justify-center md:items-center ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-slate-800"
      }`}
    >
      <div className="pb-12 gap-2 flex flex-col items-center">
        <h2 className="font-bold text-3xl text-center font-georgia md:text-4xl lg:text-5xl  max-w-2xl">
          Meet Our Awesome Team
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
        {TeamMembers.map((item, index) => (
          <Person key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Team;
