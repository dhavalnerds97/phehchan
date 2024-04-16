import { useRef } from "react";

const ContactUs = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      contact: contactRef.current.value,
    };

    let formValid = true;
    const errors = {};

    // Name validation
    if (formData.name.trim() === "") {
      errors.name = "Name is required";
      formValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email address";
      formValid = false;
    }

    // Contact validation
    const contactRegex = /^\d{8,}$/;
    if (!contactRegex.test(formData.contact)) {
      errors.contact = "Contact number must be at least 8 digits";
      formValid = false;
    }

    if (formValid) {
      // Submit the form or do something with the data
      console.log("Form submitted:", formData);
    } else {
      // Handle errors
      console.log("Form validation errors:", errors);
    }
  };
  return (
    <div className="w-full text-wrap">
      <div className="flex h-auto p-2 py-8 ">
        <div className="bg-amber-500 w-1"></div>
        <div className="pl-[20px] text-gray-100">
          <p className="text-4xl pt-2 font-urbanist pb-4">
            Wish to take a sneak peek into our success stories?
          </p>
          <p className="font-urbanist pb-2">
            Narrow down your search and hop on to your preferred industry.
          </p>
        </div>
      </div>
      <form className="lg:max-w-sm " onSubmit={handleSubmit}>
        <div className="flex flex-col mb-5 p-2">
          <label
            htmlFor="name"
            className="ps-1 font-nunito  text-gray-100 text-lg "
          >
            Name
          </label>
          <input
            required
            id="name"
            type="text"
            ref={nameRef}
            placeholder="Enter your name"
            className=" bg-neutral-900 font-slab focus:outline-none w-full h-6 px-3 py-5 text-lg text-gray-100 border-slate-400 focus:border-amber-500 ease-in-out transition-all duration-700"
          />
        </div>
        <div className="flex flex-col mb-5 p-2">
          <label
            htmlFor="email"
            className="ps-1 font-nunito  text-gray-100 text-lg "
          >
            Email
          </label>
          <input
            required
            id="email"
            type="email"
            ref={emailRef}
            placeholder="Enter your email"
            className=" bg-neutral-900 font-slab focus:outline-none w-full h-6 px-3 py-5 text-lg text-gray-100 border-slate-400 focus:border-amber-500 ease-in-out transition-all duration-700"
          />
        </div>
        <div className="flex flex-col mb-5 p-2">
          <label
            htmlFor="contact"
            className="ps-1 font-nunito text-gray-100 text-lg"
          >
            Contact Number
          </label>
          <input
            required
            id="contact"
            type="tel"
            ref={contactRef}
            placeholder="Enter your contact number"
            className=" bg-neutral-900 font-slab focus:outline-none w-full h-6 px-3 py-5 text-lg text-gray-100 border-slate-400 focus:border-amber-500 ease-in-out transition-all duration-700"
            pattern="\d{8,}"
            title="Contact number must be at least 8 digits long"
          />
        </div>
        <div className="flex flex-col mb-5 p-2">
          <button className="px-12 py-3 border-2 border-white bg-neutral-900 text-white font-bold font-nunito hover:shadow-[4px_4px_0px_0px_rgba(255,215,0)] transition duration-300">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
