import { useState } from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  const [menu, setMenu] = useState(false);

  function alterMenu() {
    setMenu(!menu);
  }

  return (
    <div className="min-h-screen w-screen text-wrap bg-black text-gray-200  p-4 md:py-8 ">
      <div className="flex max-md:flex-col lg:justify-between">
        <ul className="pt-16 font-bold font-quicksand capitalize tracking-wider space-y-8 flex flex-col lg:space-y-12 text-4xl">
          <Link to="/" className="capitalize text-xl font-medium py-6 md:py-8">
            BACK TO HOME
          </Link>
          <Link to="/about" className="py-2" data-text="About Us">
            About Us
          </Link>
          <Link to="/" className="py-2" data-text="Studio">
            Services
          </Link>
          <Link to="/" className="py-2" data-text="Services">
            Blogs
          </Link>
          <Link to="/" className="py-2" data-text="Method">
            News
          </Link>
        </ul>

        <div className="py-4 lg:h-auto font-slab lg:py-12 lg:text-lg">
          <div className="bg-amber-500 w-1"></div>
          <div className="pl-4">
            <h2 className="font-semibold text-lg py-2">Call Us:</h2>
            <p>We are open Monday to Friday between 10AM – 6PM(IST).</p>
            <p> For business inquiries, call:</p>
            <p>New Delhi: +91-9266673177</p>
            <p>New Delhi: +91-9266673177</p>
            <p>New Delhi: +91-9266673177</p>
            <p>New Delhi: +91-9266673177</p>
            <h2 className="font-semibold text-lg py-2">Drop Us A Line</h2>
            <p>For business inquiries, Email:</p>
            <p>phehchan@phehchan.com</p>
            <p>phehchan@phehchan.com</p>
            <p>phehchan@phehchan.com</p>
            <div className="py-4 lg:py-8">
              <p>Contact Details</p>
              <p>Contact Details</p>
              <p>Contact Details</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MainMenu;
