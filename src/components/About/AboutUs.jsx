import Footer from "../Footer/Footer";
import Reviews from "../Reviews/Reviews";
import Stakeholders from "../Reviews/Stakeholders";
import Services from "../Services/Services";
import Team from "../Team/Team";
import ApproachObjCapab from "./ApproachObjCapab";
import WhyUs from "./WhyUs";

const AboutUs = () => {
  return (
    <div className="w-screen min-h-screen overflow-auto">
      <Services />
      <Reviews />
      <ApproachObjCapab />
      <Team />
      <Stakeholders />
      <WhyUs />
      <Footer/> 
    </div>
  );
};

export default AboutUs;
