import Footer from "../Footer/Footer";
import Hero from "../Header/Hero";

const Body = () => {
  return (
    <>
      <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
        <Hero />
      </div>
      
      <div className="xl:w-screen xl:h-screen xl:flex-shrink-0">
        <Footer />
      </div>
    </>
  );
};

export default Body;
