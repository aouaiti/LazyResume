import styles from "./Cube.module.scss";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { rotate } from "../../Features/globalUiVars/section3";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import LRSvg from "../section1/LRSvg";
import { styled } from "@mui/material/styles";
import cubeFace from "./CubeFace";

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
  const themeMode = useSelector((state) => state.theme.mode);
  const control = useAnimation();
  const rotateY = useMotionValue(350);

  const CubeFace = styled(cubeFace)(({ theme }) => ({
    display: "flex",
    background: theme.palette.primary[themeMode],
    boxShadow: `0px 0px 3px ${themeMode === "light" ? "black" : "white"}`,
  }));

  useEffect(() => {
    dispatch(rotate(-rotation));
    window.scrollTo({
      top: "0",
      behavior: "instant",
    });
  }, []);

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
        <CubeFace className={styles.upper} />
        {/* <span className={styles.lower}></span> */}
        {/* <Box> */}
        <CubeFace
          sx={{
            transform: "rotateY(0deg) translateZ(150px)",
          }}
        />

        <CubeFace
          sx={{
            transform: "rotateY(90deg) translateZ(150px)",
          }}
        />
        <CubeFace
          sx={{
            transform: "rotateY(180deg) translateZ(150px)",
          }}
        />
        <CubeFace
          sx={{
            transform: "rotateY(270deg) translateZ(150px)",
          }}
        />
        {/* </Box> */}
      </motion.div>
    </>
  );
}
