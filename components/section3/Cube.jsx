import styles from "./Cube.module.scss";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { rotate } from "../../Features/globalUiVars/section3";
import LRSvg from "../section1/LRSvg";

const animate = {
  init: {
    rotateX: -10,
    rotateY: 350,
    scale: 0,
  },
  hidden: {
    scale: 0,
  },
};

export default function Cube() {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(1);
  const rotation = useSelector((state) => state.section3.rotation);
  const control = useAnimation();
  const rotateY = useMotionValue(350);
  useEffect(() => dispatch(rotate(-rotation)), []);
  //   const clickHandler = (e) => {
  //     setIndex(index + 1);
  //     if (index < 4)
  //       control.start({
  //         rotateY: 350 + index * 90,
  //         transition: { type: "spring", stifness: "10", dumping: "10" },
  //       });
  //     else if (index === 4)
  //       control.start({
  //         rotateX: -10 - 95,
  //         rotateY: 350 + index * 90 + 10,
  //         transition: { type: "spring", stifness: "10", dumping: "10" },
  //       });
  //     };
  useEffect(() => {
    if (rotation < 4)
      control.start({
        scale: 1,
        rotateX: -10,
        rotateY: 350 + rotation * 90,
        transition: { type: "spring", stifness: "10", dumping: "10" },
      });
    else if (rotation === 4)
      control.start({
        scale: 1,
        rotateX: -10 - 95,
        rotateY: 350 + rotation * 90 + 10,
        transition: { type: "spring", stifness: "10", dumping: "10" },
      });
  }, [rotation]);
  return (
    <>
      {/* <button
        onClick={clickHandler}
        style={{ zIndex: "99999", position: "fixed", top: "15%" }}
      >
        rotate
      </button> */}
      <motion.div
        className={styles.cube}
        animate={control}
        style={{ rotateY }}
        variants={animate}
        initial="init"
        exit="hidden"
      >
        <Box className={styles.upper}>
          {/* <LRSvg style={{ background: "black" }} /> */}
        </Box>
        {/* <span className={styles.lower}></span> */}
        <Box>
          <Box
            component="div"
            style={{
              background: "url(cubebg2.jpg)",
              backgroundSize: "cover",
              transform: "rotateY(0deg) translateZ(150px)",
            }}
          ></Box>
          <Box
            component="div"
            style={{
              background: "url(cubebg2.jpg)",
              backgroundSize: "cover",
              transform: "rotateY(90deg) translateZ(150px)",
            }}
          ></Box>
          <Box
            component="div"
            style={{
              background: "url(cubebg2.jpg)",
              backgroundSize: "cover",
              transform: "rotateY(180deg) translateZ(150px)",
            }}
          ></Box>
          <Box
            component="div"
            style={{
              background: "url(cubebg2.jpg)",
              backgroundSize: "cover",
              transform: "rotateY(270deg) translateZ(150px)",
            }}
          ></Box>
        </Box>
      </motion.div>
    </>
  );
}
