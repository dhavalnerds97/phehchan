import { forwardRef } from "react";
import playbackvideo from "/phehchan.mp4";

const PlayBack = forwardRef((props, ref) => {
  const handleMetadataLoaded = () => {
    console.log("Metadata loaded");
  };

  return (
    <div className="text-white md:w-screen md:h-screen h-dvh animate-bgAnimation flex items-center justify-center bg-center bg-cover">
      <video
        ref={ref}
        className="object-fill sm:object-cover sm:w-full h-dvh"
        src={playbackvideo}
        muted
        autoPlay
        loop
        playsInline
        onLoadedMetadata={handleMetadataLoaded}
      >
        <source src={playbackvideo} type="video/mp4" />
      </video>
    </div>
  );
});

PlayBack.displayName = "PlayBack";

export default PlayBack;
