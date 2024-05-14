import styles from "./FloatingImages.module.css";
import { useRef } from "react";
import gsap from "gsap";

export default function FloatingImages() {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <main
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={styles.main}
    >
      <div ref={plane1} className={`${styles.plane} hidden lg:block`}>
        <img src="/img13.jpg" alt="image" width={300} />
        <img src="/img2.jpg" alt="image" width={300} />
        <img src="/img7.jpg" alt="image" width={225} />
      </div>
      <div ref={plane2} className={`${styles.plane} hidden lg:block`}>
        <img src="/img4.jpg" alt="image" width={250} />
        <img src="/img6.jpg" alt="image" width={200} />
        <img src="/img8.jpg" alt="image" width={225} />
      </div>
      <div ref={plane3} className={`${styles.plane} hidden lg:block`}>
        <img src="/img3.jpg" alt="image" width={150} />
        <img src="/img15.jpg" alt="image" width={200} />
      </div>
      <div className={styles.title}>
        <div className=" max-sm:gap-4 w-full md:w-10/12 mx-auto flex-col p-4 md:p-12 text-center transition-transform hover:scale-105 duration-500">
          {/* <h1 className="py-4 relative font-semibold font-cinzel text-4xl md:text-5xl text-wrap transition-opacity bg-clip-text text-transparent bg-gradient-to-b from-gray-50/80 to-gray-400/70 to-70% from-30% duration-1000"> */}
          {/* <h1 className="py-4 relative font-semibold font-cinzel text-4xl md:text-5xl text-wrap transition-opacity bg-clip-text text-transparent bg-gradient-to-r from-gray-200/70 via-gray-50 to-gray-200/70 duration-1000"> */}
          <h1 className="py-4 relative font-semibold font-cinzel text-4xl md:text-5xl text-wrap transition-opacity bg-clip-text text-transparent  bg-gradient-to-b from-gray-50 to-gray-300/80 duration-1000">
            <span className="font-bold">Elevating Brands:</span>
            <br />
            <span className="text-3xl md:text-4xl ">
              Unleashing the Power of Creativity and Strategy to Drive
              Unforgettable Success.
            </span>
          </h1>
          <p className="py-4 px-6 md:py-12 font-quicksand relative lg:text-3xl text-2xl text-wrap  transition-opacity duration-1000 font-medium bg-clip-text text-transparent bg-gradient-to-b from-gray-50/80 to-gray-400/70">
            We craft campaigns with a human touch, igniting genuine connections
            that resonate with consumers
          </p>
        </div>
      </div>
    </main>
  );
}
