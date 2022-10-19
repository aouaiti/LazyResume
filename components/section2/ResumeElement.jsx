import { forwardRef, memo, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Box } from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectResume } from "../../Features/globalUiVars/section2";
import styles from "./ResumeElement.module.scss";

const ResumeElement = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const animate = useAnimation();
  const selectedResume = useSelector((state) => state.section2.selectedResume);
  const BGColor = useSelector((state) => state.section2.backgroundPalette);
  const zIndex = props.index === selectedResume.index ? 2 : 1;
  const xPos = props.index === selectedResume.index ? selectedResume.center : 0;
  const rotateY = props.index === selectedResume.index ? 360 : rotateY;
  const opa = selectedResume?.active
    ? props.index === selectedResume.index
      ? 1
      : 0
    : 1;
  const showCard = selectedResume?.active
    ? props.index === selectedResume.index
      ? true
      : false
    : false;

  const child = {
    init: {
      // oapcity: 1,
      y: -600,
      filter: "grayscale(100%)",
      transformOrigin: "120px",
    },
    show: {
      zIndex,
      y: 0,
      transformStyle: "preserve-3d",
      // rotateY,
      x: xPos,
      opacity: opa,
      transition: {
        y: { delay: 1.5 },
        rotateY: { duration: 2 },
      },
    },
  };
  const cardMode = {
    init: {
      // display: opaCard,
      x: -1000,
      opacity: 0,
    },
    show: {
      opacity: 1,
      // display: opaCard,
      x: 0,
      transition: {
        x: {
          delay: 0.5,
        },
      },
    },
    exit: {
      x: -1000,
      opacity: 0,
      display: "none",
      transition: {
        display: {
          delay: 1,
        },
      },
    },
  };
  useEffect(() => {
    if (selectedResume.active) animate.start("show");
    if (!selectedResume.active) animate.start("hide");
  }, [selectedResume]);
  return (
    <>
      <Box
        component={motion.div}
        ref={ref}
        {...props}
        variants={child}
        initial="init"
        animate="show"
        whileInView={{
          // opacity: 1,
          filter: "grayscale(0%)",
        }}
        viewport={{ once: false, amount: "all", margin: "50%" }}
        sx={{
          minWidth: "20rem",
          height: "20rem",
          pr: "5rem",
          cursor: "none",
        }}
      >
        <Image
          id="c1"
          src={"/ResumeTemplate.jpg"}
          alt="test"
          width="240"
          height="340"
        />

        {/* <p
          style={{ position: "absolute", cursor: "pointer", zIndex: "9999" }}
          onClick={(e) => {
            e.preventDefault;
            e.stopPropagation();
            dispatch(
              selectResume({
                active: false,
                index: undefined,
                bodyWidth: undefined,
                resumeWidth: undefined,
                resumeLeftPosition: undefined,
              })
            );
          }}
        >
          close this
        </p> */}
        <AnimatePresence>
          {showCard && (
            <Box
              component={motion.div}
              variants={cardMode}
              initial="init"
              animate={animate}
              exit="exit"
              style={{ position: "absolute", top: 0 }}
              // className={styles.card}
            >
              <Box
                sx={{ background: BGColor[0] }}
                className={styles.card}
              ></Box>
              <Box
                sx={{ background: BGColor[0] }}
                className={styles.filler}
              ></Box>
            </Box>
          )}
        </AnimatePresence>
      </Box>
    </>
  );
});

ResumeElement.displayName = "LazyResume";
export default ResumeElement;
