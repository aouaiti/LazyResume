import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Hor from "./Hor";
import ScrollingText from "./ScrollingText";
import Globe from "./Globe";
import { Box } from "@mui/material";

const animation = {
  anim1: {
    clipPath: "polygon(0 0%, 100% 0%, 100% 0%, 0% 0%)",
    zIndex: -10,
    transition: {
      // type:"spring"
      duration: 0.5,
      ease: "linear",
      // delay: 2
    },
  },
  anim2: {
    clipPath: "polygon(0 0%, 100% 0%, 100% 80%, 0% 20%)",
    transition: {
      // type:"spring"
      duration: 0.5,
      ease: "linear",
      // delay: 1.6
    },
  },
  anim3: {
    clipPath: "polygon(0 20%, 100% 80%, 100% 100%, 0 100%)",
    transition: {
      // type:"spring"
      duration: 0.5,
      ease: "linear",
      // delay: 0.5
    },
  },
  anim4: {
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    zIndex: 999,
    transition: {
      duration: 0.5,
      // delay: 1
    },
  },
};

export default function Back({ lowerBackg, higherBackg, trigger, numba }) {
  const section2part = useSelector((state) => state.section2.part);
  const BGColor = useSelector((state) => state.section2.backgroundPalette);

  const lowerBackControls = useAnimation();
  const higherBackControls = useAnimation();
  const [toggle, setToggle] = useState(true);
  const [currentState, setCurrentState] = useState(1);
  const lowerRef = useRef(null);

  useEffect(() => {
    if (section2part === trigger) {
      (async () => {
        await lowerBackControls.start("anim4");
        await lowerBackControls.start("anim2");
        await lowerBackControls.start("anim3");
      })();
      (async () => {
        await higherBackControls.start("anim1");
        await higherBackControls.start("anim3");
        await higherBackControls.start("anim2");
      })();
    }
  }, [section2part]);

  return (
    <AnimatePresence>
      {section2part === trigger && (
        <>
          <Box
            style={{
              width: "100vw",
              height: "100vh",
              position: "fixed",
            }}
          >
            <Box
              component={motion.div}
              className="lowerRef"
              // ref={lowerRef}
              variants={animation}
              exit="anim4"
              initial="anim1"
              animate={lowerBackControls}
              style={{
                position: "absolute",
                bottom: "0",
                width: "100vw",
                height: "100vh",
                background: BGColor[1],
                clipPath: "polygon(0 100%, 100% 100%, 100% 80%, 0 20%)",
              }}
            />
            <Box
              component={motion.div}
              className="HigherRef"
              // ref={lowerRef}
              variants={animation}
              exit="anim1"
              initial="anim1"
              animate={higherBackControls}
              style={{
                position: "absolute",
                bottom: "0",
                width: "100vw",
                height: "100vh",
                background: BGColor[0],
                clipPath: "polygon(0 0%, 100% 0%, 100% 80%, 0% 20%)",
              }}
            />
          </Box>
          <Hor numba={numba} />
          <ScrollingText />
          {/* <Globe /> */}
        </>
      )}
    </AnimatePresence>
  );
}
