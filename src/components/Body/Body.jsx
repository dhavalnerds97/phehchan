import AboutUs from "../About/AboutUs";
import Footer from "../Footer/Footer";
import Hero from "../Header/Hero";
import FullScreenServices from "../Services/FullScreenServices";
import Services from "../Services/Services";

const Body = () => {
  return (
    <>
      <section className="xl:w-screen xl:h-screen xl:flex-shrink-0">
        <Hero />
      </section>

      <section className="xl:w-9/12 xl:h-screen xl:snap-center xl:flex-shrink-0 overflow-auto">
        <AboutUs />
      </section>
      <section className="xl:w-screen xl:h-screen xl:flex-shrink-0">
        <Services />
      </section>
      <section className="xl:h-screen min-w-min bg-neutral-900 text-neutral-100">
        <FullScreenServices />
      </section>
      {/* <div className="xl:w-4/6 xl:h-screen xl:snap-center xl:flex-shrink-0 overflow-auto">
        <Services2 />
      </div> */}
      {/* <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
        <WhyUs />
      </div> */}
      <footer className="xl:w-screen xl:h-screen xl:flex-shrink-0">
        <Footer />
      </footer>
    </>
  );
};

export default Body;
