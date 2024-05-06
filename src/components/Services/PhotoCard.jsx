const PhotoCard = () => {
  return (
    // <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 sm:h-80 p-4 sm:p-6 md:p-8">
    //   <div className="w-full sm:w-5/12 sm:col-span-1">
    //     <img src="img2.jpg" alt="" />
    //   </div>
    //   <div className=" w-full sm:w-7/12 p-4 sm:col-span-1">
    //     <h2>dummy text</h2>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
    //       facere nostrum qui accusamus obcaecati, corrupti magnam labore, velit
    //       cum expedita cumque autem ad reprehenderit eveniet et iste aliquid
    //       quis dolore!
    //     </p>
    //   </div>
    // </div>

    <div className="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray-300 bg-gray-300 lg:bg-white lg:h-full">
      <div className=" px-10 py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white">
        <img
          className="h-64 sm:h-52 sm:w-full sm:object-cover lg:hidden object-center mt-2 rounded-lg shadow-2xl"
          src="img8.jpg"
          alt="Ad- woman on a beach"
        />
        <h1 className="mt-5 font-bold text-lg lg:mt-7">
          You can school from home!
        </h1>
        <h1 className="font-bold text-lg text-gray-600">Get started today!</h1>
        <h1 className="text-lg text-gray-600 text-justify pt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h1>
        <button className="mt-5 bg-gray-600 p-3 shadow-2xl rounded-xl text-white font-bold hover:bg-gray-800">
          START STUDYING
        </button>
      </div>

      <div className="hidden relative lg:block  lg:col-span-3">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="img14.jpg"
          alt="Ad- woman on a beach"
        />
      </div>
    </div>
  );
};

export default PhotoCard;
