import { useSectionInView } from "../../utils/useSectionInView";
import FullScreenServiceCard from "./FullScreenServiceCard";
import { motion } from "framer-motion";

const services = [
  {
    title: "Our Services",
    imgURL: "img25.jpg",
    description:
      "Our Services encompass marketing expertise tailored to cut through the noise with digital campaigns, SEO tactics, influencer collaborations, and advertising advice. Additionally, we offer media productions including captivating advertising films, corporate films, professional photoshoots, and podcast production. Furthermore, our tech solutions include custom web development, app development, and versatile CMS solutions aimed at enhancing online engagement and streamlining operations. Let us bring your vision to life and help your brand stand out in today's digital-first world.",
  },
  {
    title: "Marketing Expertise",
    imgURL: "img5.jpg",
    description:
      "In today's saturated markets, our tailored approach cuts through the noise to highlight your brand's unique voice. Our marketing solutions harness a dynamic mix of strategies to project your brand forward. From creating engaging digital and social media campaigns, to implementing strong SEO and content marketing tactics, we ensure online visibility and audience engagement. Whether it's through influencer collaborations, strategic branding, or expert advertising advice, our services are designed to enhance your brand's presence with target market tap-ins.",
  },
  {
    title: "Media Productions",
    imgURL: "img3.jpg",
    description:
      "Tell your story in a way that resonates and engages. Our Media Production Solutions encompass a comprehensive range of services, from captivating advertising films and authoritative corporate films to professional photoshoots and precise 2D/3D rendering, we bring your vision to life. Dive into the expanding world of podcasts with our end-to-end production with meticulous scripting services. Whether it's a full-scale production or targeted media creation, we manage every detail to deliver impactful, high-quality content that is enjoyed by your audience.",
  },
  {
    title: "Tech Solutions",
    imgURL: "img2.jpg",
    description:
      "In a digital-first world, staying ahead of technology trends isn't just an option; it's a necessity. We specialize in custom web development that ensures your site is both visually appealing and highly functional, innovative app development to keep your brand at users' fingertips with versatile CMS solutions that simplify content management. Whether you're looking to enhance online engagement or streamline operations, our technology services are tailored to meet your unique needs and drive your success.",
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
        <FullScreenServiceCard
          key={index}
          service={service}
          isOdd={index % 2 !== 0}
        />
      ))}
    </motion.section>
  );
};

export default FullScreenServices;
