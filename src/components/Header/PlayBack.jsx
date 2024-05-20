import { forwardRef } from "react";

const PlayBack = forwardRef((props, ref) => {
  return (
    <section className="text-neutral-100 w-screen h-screen flex items-center justify-center bg-center object-cover">
      <video
        ref={ref}
        className="sm:object-cover object-fill max-w-5xl bg-cover sm:max-w-full sm:w-full h-full"
        src="/phehchan.mp4"
        muted
        autoPlay
        loop
        playsInline
      >
        <source src="/phehchan.webm" type="video/webm" />
        <source src="/phehchan.webm" type="video/webm" />
      </video>
    </section>
  );
});

PlayBack.displayName = "PlayBack";

export default PlayBack;
