import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Team from "../Team/Team";
import ApproachObjCapab from "./ApproachObjCapab";
import WhyUs from "./WhyUs";

const AboutUs = () => {
  return (
    <div className="w-screen min-h-screen overflow-auto">
      <Services />
      <ApproachObjCapab />
      <Team />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default AboutUs;
