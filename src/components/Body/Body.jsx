import ApproachObjCapab from "../About/ApproachObjCapab";
import ComingSoon from "../About/ComingSoon";
import WhyUs from "../About/WhyUs";
import Footer from "../Footer/Footer";
import Hero from "../Header/Hero";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Body = () => {
  return (
    <>
      <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
        <ComingSoon />
      </div>
      <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
        <Hero />
      </div>
      <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
        <Services />
      </div>
      <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
        <ApproachObjCapab />
      </div>
      <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
        <Team />
      </div>
      <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
        <WhyUs />
      </div>

      <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
        <Footer />
      </div>
    </>
  );
};

export default Body;
