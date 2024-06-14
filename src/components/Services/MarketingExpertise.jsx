import { useTheme } from "../../utils/ThemeContext";
import { marketingExpertise } from "../../utils/constants";
import TextMask from "../ui/TextMask";
import ProjectCard from "./PhotoCard";
import { PhotoServiceCard } from "./PhotoServiceCard";

const MarketingExpertise = () => {
  const { darkMode } = useTheme();
  return (
    <section className="relative w-full min-h-screen bg-neutral-900 pt-24 overflow-auto">
      <div
        className={`p-4 lg:p-16 xl:pt-16 md:p-12 text-wrap flex flex-col md:justify-center ${
          darkMode
            ? "bg-neutral-900 text-neutral-100"
            : "bg-gray-50 text-slate-800"
        }`}
      >
        <div className="lg:pb-8 pb-6 gap-4 flex flex-col lg:max-w-3xl mx-auto lg:text-center justify-center items-center ">
          <h2
            id="marketing-expertise"
            className="font-bold font-cinzel text-wrap text-2xl px-8 md:p-0 lg:text-4xl max-w-2xl"
          >
            <TextMask>{["Marketing Expertise"]}</TextMask>
          </h2>
          <p className="p-4">
            In today's saturated markets, our tailored approach cuts through the
            noise to highlight your brand's unique voice. Our marketing
            solutions harness a dynamic mix of strategies to project your brand
            forward. From creating engaging digital and social media campaigns,
            to implementing strong SEO and content marketing tactics, we ensure
            online visibility and audience engagement. Whether it's through
            influencer collaborations, strategic branding, or expert advertising
            advice, our services are designed to enhance your brand's presence
            with target market tap-ins.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:max-w-3xl mx-auto pb-6 ">
          {marketingExpertise.map((item, index) => (
            <PhotoServiceCard
              key={index}
              service={item}
              isOdd={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingExpertise;
