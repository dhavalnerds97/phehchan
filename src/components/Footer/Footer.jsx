import { useSectionInView } from "../../utils/useSectionInView";
import ContactUs from "../Contact/ContactUs";
import { motion } from "framer-motion";

const Footer = () => {
  const { ref } = useSectionInView("Contact Us", 0.5);

  return (
    <motion.section
      ref={ref}
      className="grid grid-cols-1 max-sm:items-center px-4 md:px-16 lg:px-32 py-2 w-screen md:p-6 xl:pt-20  lg:grid-cols-2 lg:gap-12 bg-black xl:h-screen"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="contact"
    >
      <div className="col-span-1 content-center">
        <ContactUs />
      </div>
      <div className="col-span-1 flex flex-row">
        <div className="flex relative justify-center items-center">
          <img
            src="/contactus.jpg"
            alt="contact"
            className="hidden lg:block object-cover object-center w-3/4 h-3/4"
          />
        </div>
        {/* <p className="text-neutral-100 text-wrap">
          Copyright © {new Date().getFullYear()} Phehchan. All rights reserved.
        </p> */}
        <div className="space-x-2 p-4 bg flex items-end lg:mb-14 2xl:mb-32 md:gap-2">
          {/* <a href="https://www.twitter.com/" target="_blank">
            <svg
              className="size-8 md:size-12  fill-white hover:fill-slate-700 transition-colors duration-700"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.598 6.356c.008.18.012.362.012.543 0 5.523-4.202 11.887-11.885 11.887-2.355 0-4.545-.687-6.389-1.877.326.038.655.057.987.057 1.948 0 3.746-.663 5.173-1.784a4.202 4.202 0 0 1-3.914-2.906 4.219 4.219 0 0 0 1.885-.072 4.197 4.197 0 0 1-3.364-4.108c.56.32 1.208.516 1.896.538a4.202 4.202 0 0 1-1.648-5.623 11.915 11.915 0 0 0 8.648 4.384 4.731 4.731 0 0 1-.11-.957 4.196 4.196 0 0 1 7.24-2.868 8.418 8.418 0 0 0 2.65-1.013 4.192 4.192 0 0 1-1.85 2.319c.84-.09 1.645-.324 2.393-.647z" />
            </svg>
          </a> */}
          <a
            href="https://www.instagram.com/phehchan.brandsolutions/?igsh=MTZydTQ0cjdhd3RvNw%3D%3D"
            target="_blank"
          >
            <svg
              className=" size-8 md:size-12 fill-white hover:fill-slate-700 transition-colors duration-700"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" />
              </g>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/people/Phehchan-Brand-Solutions/61557058667451/?mibextid=LQQJ4d"
            target="_blank"
          >
            <svg
              className=" size-8 md:size-12 fill-white hover:fill-slate-700 transition-colors duration-700"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.19 19.19 0 0 0-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4.598z" />
              </g>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/phehchan-brand-solutions/"
            target="_blank"
          >
            <svg
              className=" size-8 md:size-12 fill-white hover:fill-slate-700 transition-colors duration-700"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
              </g>
            </svg>
          </a>
        </div>
      </div>
      <p className="text-neutral-100 text-wrap">
        Copyright © {new Date().getFullYear()} Phehchan. All rights reserved.
      </p>
    </motion.section>
  );
};

export default Footer;
