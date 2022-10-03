import { useRef, useEffect, memo } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { triggerInView } from "../../Features/globalUiVars/triggers";
import { sectionIndex } from "../../Features/globalUiVars/currentSection";
import Trigger from "../trigger/Trigger";

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
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);
  const section1Ref = useRef(null);
  const section1Trigger = useRef();
  const isInView = useInView(section1Trigger, {
    // margin: "0px -40%",
  });
  // useEffect(() => dispatch(sectionIndex(1)), []);
  useEffect(() => {
    console.log(isInView);
    isInView && dispatch(triggerInView("toSection2"));
  }, [isInView]);
  return (
    <Box
      id="section-1"
      ref={section1Ref}
      style={{ position: "fixed", height: "100vh", width: "100vw" }}
    >
      <Box
        component={motion.div}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
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
          placeholder="blur"
          blurDataURL="LiamWong_TokyoCity_Night_small.webp"
          // fetchpriority="high"
        />
      </Box>
      <Box
        component={motion.div}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
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
          placeholder="blur"
          blurDataURL="LiamWong_TokyoCity_Day _small.webp"
          // fetchpriority="high"
        />
      </Box>
      <Trigger ref={section1Trigger} />
    </Box>
  );
}
export default memo(Section1);
