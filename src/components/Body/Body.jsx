import AboutUs from "../About/AboutUs";
import ComingSoon from "../About/ComingSoon";
import WhyUs from "../About/WhyUs";
import Footer from "../Footer/Footer";
import Hero from "../Header/Hero";
import FullScreenServiceCard from "../Services/FullScreenServiceCard";
import FullScreenServices from "../Services/FullScreenServices";
import Services from "../Services/Services";
import Services2 from "../Services/Services2";

const Body = () => {
  return (
    <>
      <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
        <Hero />
      </div>

      <div className="xl:w-9/12 xl:h-screen xl:snap-center xl:flex-shrink-0 overflow-auto">
        <AboutUs />
      </div>
      <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
        <Services />
      </div>
      <div className="xl:h-screen min-w-min bg-neutral-900 text-neutral-100">
        <FullScreenServices />
      </div>
      {/* <div className="xl:w-4/6 xl:h-screen xl:snap-center xl:flex-shrink-0 overflow-auto">
        <Services2 />
      </div> */}
      {/* <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
        <WhyUs />
      </div> */}
      <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
        <Footer />
      </div>
    </>
  );
};

export default Body;
