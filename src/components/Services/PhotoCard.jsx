import RevealCover from "../ui/motion";

const PhotoCard = ({ service, isOdd }) => {
  return (
    <div
      className={`sm:mb-4 flex flex-col md:flex-row relative overflow-hidden text-wrap h-full text-gray-50 border border-neutral-700 rounded-xl hover:shadow-lg hover:shadow-neutral-700/50 lg:max-h-96 transition-all w-full group ${
        isOdd ? "md:flex-row-reverse" : ""
      }`}
    >
      <RevealCover />
      <div className="md:flex-1 h-full shadow-xl p-4 md:w-2/3 rounded-xl lg:mt-6 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none w-full lg:mb-6 lg:px-5 lg:pt-5 lg:pb-5">
        <img
          className="h-64 w-full object-cover block lg:hidden object-center mt-2 rounded-lg shadow-2xl"
          src={service.imgURL}
          alt={service.title}
        />
        <h1 className="mt-5 font-bold text-2xl font-cinzel lg:mt-7">
          {service.title}
        </h1>
        <div className="my-3 w-24 border border-gray-400"></div>
        <p className="font-apple text-gray-100 pt-2">{service.description}</p>
      </div>
      <div className="hidden relative lg:block w-full h-full md:w-1/3 md:flex-1">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
          src={service.imgURL}
          alt={service.title}
        />
      </div>
    </div>
  );
};

export default PhotoCard;

// import React from 'react';
// import RevealCover from '../ui/motion';

// const PhotoCard = ({ service, isOdd }) => {
//   return (
//     <div className={`relative overflow-hidden rounded-xl hover:shadow-lg hover:shadow-neutral-700/50 group w-full ${isOdd ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
//       <RevealCover />
//       <div className="flex flex-col md:flex-row h-full">
//         <div className="md:w-2/3 lg:w-2/3">
//           <div className="h-64 w-full object-cover block lg:hidden object-center mt-2 rounded-lg shadow-2xl">
//             <img
//               src={service.imgURL}
//               alt={service.title}
//               className="h-full w-full object-cover rounded-lg shadow-2xl"
//             />
//           </div>
//           <div className="p-4 md:p-6 lg:p-8 flex flex-col justify-center">
//             <h1 className="font-bold text-2xl font-cinzel lg:text-3xl lg:mt-7">{service.title}</h1>
//             <div className="my-3 h-1 w-24 bg-gray-400"></div>
//             <p className="font-apple text-gray-100 pt-2">{service.description}</p>
//           </div>
//         </div>
//         <div className="hidden md:flex md:w-1/3 lg:block">
//           <img
//             src={service.imgURL}
//             alt={service.title}
//             className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PhotoCard;
