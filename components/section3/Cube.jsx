import styles from "./Cube.module.scss";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useState } from "react";

const animate = {
  init: {
    rotateX: -10,
    rotateY: 350,
  },
};

export default function Cube() {
  const [index, setIndex] = useState(1);
  const control = useAnimation();
  const rotateY = useMotionValue(350);
  const clickHandler = (e) => {
    setIndex(index + 1);
    if (index < 4)
      control.start({
        rotateY: 350 + index * 90,
        transition: { type: "spring", stifness: "10", dumping: "10" },
      });
    else if (index === 4)
      control.start({
        rotateX: -10 - 95,
        rotateY: 350 + index * 90 + 10,
        transition: { type: "spring", stifness: "10", dumping: "10" },
      });
  };
  return (
    <>
      <button
        onClick={clickHandler}
        style={{ zIndex: "99999", position: "fixed", top: "15%" }}
      >
        rotate
      </button>
      <motion.div
        className={styles.cube}
        animate={control}
        style={{ rotateY }}
        variants={animate}
        initial="init"
      >
        <span className={styles.upper}>TEST</span>
        {/* <span className={styles.lower}></span> */}
        <div>
          <span
            style={{
              background: "url(cubebg2.jpg)",
              backgroundSize: "cover",
              transform: "rotateY(0deg) translateZ(150px)",
            }}
          ></span>
          <span
            style={{
              background: "url(cubebg2.jpg)",
              backgroundSize: "cover",
              transform: "rotateY(90deg) translateZ(150px)",
            }}
          ></span>
          <span
            style={{
              background: "url(cubebg2.jpg)",
              backgroundSize: "cover",
              transform: "rotateY(180deg) translateZ(150px)",
            }}
          ></span>
          <span
            style={{
              background: "url(cubebg2.jpg)",
              backgroundSize: "cover",
              transform: "rotateY(270deg) translateZ(150px)",
            }}
          ></span>
        </div>
      </motion.div>
    </>
  );
}
