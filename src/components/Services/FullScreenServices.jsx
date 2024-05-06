import { Link } from "react-router-dom";
import { useSectionInView } from "../../utils/useSectionInView";
import FullScreenServiceCard from "./FullScreenServiceCard";
import { motion } from "framer-motion";

const services = [
  {
    title: "Our Services",
    imgURL: "img25.jpg",
    description:
      "Our Services offer marketing expertise, crafting digital campaigns, SEO tactics, influencer collaborations, and advertising advice. We provide media productions such as advertising films, corporate films, photoshoots, and podcast production. Additionally, our tech solutions include custom web development, app development, and CMS solutions to enhance online engagement. Let us bring your vision to life and help your brand stand out in the digital-first world.",
    hash: "services",
  },
  {
    title: "Marketing Expertise",
    imgURL: "img5.jpg",
    description:
      "In today's competitive markets, our tailored approach highlights your brand's unique voice. Our marketing solutions employ diverse strategies to propel your brand forward, including digital and social media campaigns, SEO, and content marketing. We guarantee online visibility and strategic branding, and expert advertising advice to enhance your brand's presence and connect with your target market effectively.",
    hash: "marketing-expertise",
  },
  {
    title: "Media Productions",
    imgURL: "img3.jpg",
    description:
      "Our Media Production Solutions offer a wide array of services, including captivating advertising and corporate films, professional photoshoots, and precise 2D/3D rendering. Dive into podcast production with our meticulous scripting services. Whether full-scale or targeted, we manage every detail to deliver impactful, high-quality content enjoyed by your audience, bringing your vision to life effectively.",
    hash: "media-production",
  },
  {
    title: "Tech Solutions",
    imgURL: "img2.jpg",
    description:
      "In a digital-first world, staying ahead of technology trends is essential. We specialize in custom web development, ensuring visually appealing and highly functional sites. Our innovative app development keeps your brand accessible, while versatile CMS solutions simplify content management. Whether enhancing online engagement or streamlining operations, our technology services are tailored to meet your unique needs and drive success.",
    hash: "tech-solution",
  },
];

const FullScreenServices = () => {
  const { ref } = useSectionInView("Services");

  return (
    <motion.section
      ref={ref}
      className="w-full h-full flex flex-col gap-6 lg-md:gap-12 xl:flex-row xl:gap-1"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="services"
    >
      {services.map((service, index) => (
        <Link key={service.hash} to={service.hash}>
          <FullScreenServiceCard service={service} isOdd={index % 2 !== 0} />
        </Link>
      ))}
    </motion.section>
  );
};

export default FullScreenServices;
