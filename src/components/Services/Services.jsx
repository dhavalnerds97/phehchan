import { useTheme } from "../../utils/ThemeContext";
import PrimaryButton from "../ui/PrimaryButton";
import ServiceCard from "./ServiceCard";

const features = [
  {
    title: "Website Development",
    description:
      "We have designed hundereds of websites for clients in many different industries. We’ve had the opportunity to work with some great clients in The United States of America, Asia and Globally.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "App Development",
    description:
      "From intuitive user interfaces to seamless functionality, our team crafts innovative mobile apps that cater to your audience's needs. Let's bring your app vision to life.",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "Product Management",
    description:
      "We can help you manage your products effectively, ensuring that they meet the needs of your target audience and contribute to your business's success.",
    icon: "bx:bxs-data",
  },
  {
    title: "Blog Management",
    description:
      "Leave your blog in our capable hands. Our blog management services ensure consistent, compelling, and informative content that engages readers and keeps them coming back.",
    icon: "bx:bxs-bot",
  },
  {
    title: "SEO",
    description:
      "Search Engine Optimization (SEO) is a time-taking process that requires a lot of pampering and caressing to make a website rank higher on the web jungle. We are experts in mastering SEO.",
    icon: "bx:bxs-file-find",
  },
  {
    title: "Branding",
    description:
      "Elevate your brand's identity with our distinctive branding solutions. Our team of nerds crafts compelling brand stories, logos, and guidelines that resonate with your audience and set you apart from the competition.",
    icon: "bx:bxs-user",
  },
];

const Services = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`p-4 lg:p-16 lg:pt-32 md:pt-24 text-slate-800 flex flex-col bg-gradient-to-r md:h-screen md:justify-center  ${
        darkMode
          ? "to-slate-900 from-gray-950 text-white"
          : "to-neutral-300 from-white text-slate-800"
      }`}
    >
      <div className="lg:pb-8 pb-2 gap-4 flex max-sm:flex-col  lg:justify-between items-center lg:flex-row ">
        <h2 className="font-bold text-wrap text-2xl px-8 md:p-0 lg:text-4xl max-w-2xl">
          Empowering your brand&apos;s success in a competitive world
        </h2>
        <PrimaryButton>BOOK A DISCOVERY CALL</PrimaryButton>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-12 pb-6 ">
        {features.map((item, index) => (
          <ServiceCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
