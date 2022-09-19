import styles from "./scrollingText.module.scss";
import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
// import "../public/Plaster-Regular.ttf";

function ParallaxText({
  lowerBackg,
  higherBackg,
  children,
  baseVelocity = 100,
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-10, -30, v)}%`);

  const directionFactor = useRef(1);
  const prevT = useRef(0);
  useAnimationFrame((t) => {
    if (!prevT.current) prevT.current = t;
    const timeDelta = t - prevT.current;
    let moveBy = directionFactor.current * baseVelocity * (timeDelta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);

    prevT.current = t;
  });
  // useEffect(() => console.log(backg), [backg]);
  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className={styles.parallax}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5 } }}
        exit={{ opacity: 0 }}
        className={styles.scroller}
        style={{
          position: "absolute",
          x,
          color: `${baseVelocity < 0 ? lowerBackg : higherBackg}`,
          top: `${baseVelocity < 0 ? "10vh" : "calc(90vh)"}`,
        }}
      >
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function ScrollingText({ lowerBackg, higherBackg }) {
  return (
    <section style={{ position: "fixed" }}>
      <ParallaxText
        style={{ position: "absolute" }}
        lowerBackg={lowerBackg}
        higherBackg={higherBackg}
        baseVelocity={5}
      >
        lazy resume -
      </ParallaxText>
      <ParallaxText
        style={{ position: "absolute" }}
        lowerBackg={lowerBackg}
        higherBackg={higherBackg}
        baseVelocity={-5}
      >
        Canadian resume -
      </ParallaxText>
    </section>
  );
}