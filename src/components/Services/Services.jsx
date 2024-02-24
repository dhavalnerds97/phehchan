import ServiceCard from "./ServiceCard";

const features = [
  {
    title: "Website Development",
    description:
      "We have designed hundereds of websites for clients in many different industries. We’ve had the opportunity to work with some great clients in Toronto, The United States of America, South America, Asia and Globally.",
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
      "Leave your blog in our capable hands. Our blog management services ensure consistent, compelling, and informative content that engages readers and keeps them coming back. Whether it's industry news, insights, or captivating stories, we've got you covered.",
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
  return (
    <div className="p-4 md:p-16 flex flex-col bg-gray-50">
      <div className="pb-12 gap-4 flex max-sm:flex-col text-center md:text-left md:justify-between items-center">
        <h2 className="font-bold text-2xl px-8 md:p-0 md:text-4xl max-w-2xl">
          Empowering your brand&apos;s success in a competitive world
        </h2>
        <p className="cursor-pointer font-bold">BOOK A DISCOVERY CALL</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 pb-6">
        {features.map((item, index) => (
          <ServiceCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
