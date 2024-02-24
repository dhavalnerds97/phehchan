import playbackvideo from "/phehchan.mp4";

const PlayBack = () => {
  return (
    <div className=" colorBg text-white h-screen animate-bgAnimation flex flex-col items-center justify-center bg-center bg-cover  ">
      <video
        className="object-fill sm:object-cover sm:w-full h-dvh"
        src={playbackvideo}
        muted
        autoPlay
        loop
        playsInline
      >
        <source src={playbackvideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default PlayBack;
