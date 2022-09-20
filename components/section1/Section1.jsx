import { useRef, memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const animateDI = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

function Section1() {
  const themeMode = useSelector((state) => state.theme.mode);
  const section1Ref = useRef(null);

  return (
    <div
      id="section-1"
      ref={section1Ref}
      style={{ position: "fixed", height: "100vh", width: "100vw" }}
    >
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
        }}
        // variants={animateDI}
        // initial="hide"
        // animate={`${themeMode === "light" ? "hide" : "show"}`}
      >
        <Image
          src={"/LiamWong_TokyoCity_Night.jpg"}
          alt="night"
          layout="fill"
          objectFit="cover"
          // fetchpriority="high"
        />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
        }}
        variants={animateDI}
        initial="initial"
        animate={`${themeMode === "light" ? "show" : "hide"}`}
      >
        <Image
          src={"/LiamWong_TokyoCity_Day.jpg"}
          alt="day"
          layout="fill"
          objectFit="cover"
          // fetchpriority="high"
        />
      </motion.div>
    </div>
  );
}
export default memo(Section1);
