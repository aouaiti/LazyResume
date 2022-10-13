import { forwardRef, memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";

const ResumeElement = forwardRef((props, ref) => {
  const selectedResume = useSelector((state) => state.section2.selectedResume);
  const zIndex = props.index === selectedResume.index ? 2 : 1;
  const xPos = props.index === selectedResume.index ? selectedResume.center : 0;
  const rotateY = props.index === selectedResume.index ? 360 : rotateY;
  const opa = selectedResume?.active
    ? props.index === selectedResume.index
      ? 1
      : 0.1
    : 1;

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
      rotateY,
      x: xPos,
      opacity: opa,
      transition: {
        y: { delay: 1.5 },
        rotateY: { duration: 2 },
      },
    },
  };
  return (
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
      <Image src={"/ResumeTemplate.jpg"} alt="test" width="240" height="340" />
    </Box>
  );
});
ResumeElement.displayName = "LazyResume";
export default ResumeElement;
