import Footer from "./components/Footer/Footer";
import Hero from "./components/Header/Hero";
import NavBar from "./components/Header/NavBar";
import PlayBack from "./components/Header/PlayBack";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <PlayBack />
      <NavBar/>
      <Hero />
      <Services />
      <Reviews />
      <Footer />
    </div>
  );
};

export default App;
