import AboutUs from "../About/AboutUs";
import ComingSoon from "../About/ComingSoon";
import WhyUs from "../About/WhyUs";
import Footer from "../Footer/Footer";
import Hero from "../Header/Hero";
import Services2 from "../Services/Services2";

const Body = () => {
  return (
    <>
      <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
        <ComingSoon />
      </div>
      <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
        <Hero />
      </div>
      <div className="xl:w-screen xl:h-screen snap-center xl:flex-shrink-0 overflow-auto">
        <AboutUs />
      </div>
      <div className="xl:w-screen xl:h-screen xl:flex-shrink-0 overflow-auto">
        <Services2 />
      </div>
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
