import "../../App.css";

const Hero = () => {
  return (
    <main className="flex h-screen justify-center text-slate-800 md:h-screen items-center relative bg-white transition-bg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="jumbo absolute -inset-[10px] opacity-50"></div>
      </div>
      <div className="flex justify-between items-center max-sm:gap-4 flex-col p-4 md:p-12 md:max-w-4xl text-center transition-transform hover:scale-110 duration-500">
        <h1 className="py-4 relative md:font-thin font-georgia text-6xl text-wrap lg:text-7xl transition-opacity duration-1000">
          Pioneering your success through creativity
        </h1>
        <p className="py-4 px-6 md:py-12 relative lg:text-3xl text-xl text-wrap max-w-xl md:text-lg transition-opacity duration-1000">
          At Osamu, we're trailblazers in providing creative solutions that
          deeply connect with your target audience, resulting in impactful,
          measurable success.
        </p>
      </div>
    </main>
  );
};

export default Hero;
