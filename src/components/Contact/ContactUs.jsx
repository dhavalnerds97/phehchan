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
    <section className="w-full text-wrap overflow-y-auto min-h-fit">
      <div className="flex h-auto p-2 py-4 ">
        <div className="bg-amber-500 w-1"></div>
        <div className="pl-[20px] text-gray-100">
          <p className="text-4xl font-urbanist pb-2">
            Wish to take a sneak peek into our success stories?
          </p>
          <p className="font-urbanist">
            Narrow down your search and hop on to your preferred industry.
          </p>
        </div>
      </div>
      {/* <form onSubmit={handleSubmit}> */}
      <form
        className="lg:max-w-sm "
        action="https://formspree.io/f/xayraepk"
        encType="multipart/form-data"
        // onSubmit={handleSubmit}
        method="POST"
      >
        <div className="flex flex-col mb-1 p-2">
          <label htmlFor="name" className="ps-1 font-nunito  text-gray-100 ">
            Name
          </label>
          <input
            required
            id="name"
            type="text"
            ref={nameRef}
            name="name"
            placeholder="Enter your name"
            className=" bg-neutral-900 font-slab focus:outline-none w-full h-6 px-3 py-5 text-gray-100 border-slate-400 focus:border-amber-500 ease-in-out transition-all duration-700"
          />
        </div>
        <div className="flex flex-col mb-1 p-2">
          <label htmlFor="email" className="ps-1 font-nunito  text-gray-100 ">
            Email
          </label>
          <input
            required
            id="email"
            type="email"
            name="email"
            ref={emailRef}
            placeholder="Enter your email"
            className=" bg-neutral-900 font-slab focus:outline-none w-full h-6 px-3 py-5 text-gray-100 border-slate-400 focus:border-amber-500 ease-in-out transition-all duration-700"
          />
        </div>
        <div className="flex flex-col mb-1 p-2">
          <label htmlFor="contact" className="ps-1 font-nunito text-gray-100">
            Contact Number
          </label>
          <input
            required
            id="contact"
            type="tel"
            name="contact"
            ref={contactRef}
            placeholder="Enter your contact number"
            className=" bg-neutral-900 font-slab focus:outline-none w-full h-6 px-3 py-5 text-gray-100 border-slate-400 focus:border-amber-500 ease-in-out transition-all duration-700"
            pattern="\d{8,}"
            title="Contact number must be at least 8 digits long"
          />
        </div>
        <div className="flex flex-col mb-1 p-2">
          <label htmlFor="message" className="ps-1 font-nunito  text-gray-100 ">
            Message
          </label>
          <input
            required
            id="message"
            type="textarea"
            ref={nameRef}
            name="message"
            placeholder="Enter your message"
            className=" bg-neutral-900 font-slab focus:outline-none w-full h-6 px-3 py-5 text-gray-100 border-slate-400 focus:border-amber-500 ease-in-out transition-all duration-700"
          />
        </div>
        <div className="flex flex-col mt-3 mb-1 p-2">
          <button className="px-12 py-3 border-2 border-white bg-neutral-900 text-neutral-100 font-bold font-nunito hover:shadow-[4px_4px_0px_0px_rgba(255,215,0)] transition duration-300">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
