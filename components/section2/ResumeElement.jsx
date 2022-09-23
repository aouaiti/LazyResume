import { forwardRef, memo } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import Image from "next/image";

const child = {
  init: {
    y: -600,
    opacity: 0.2,
    filter: "grayscale(100%)",
    // background: "rgb(10,10,10)"
    // paddingRight:"50px"
  },
  show: {
    y: 0,
  },
};

const ResumeElement = forwardRef((props, ref) => (
  <Box
    component={motion.div}
    ref={ref}
    {...props}
    variants={child}
    initial="init"
    animate="show"
    // exit="leave"
    whileInView={{
      // y: 100,
      opacity: 1,
      filter: "grayscale(0%)",
      // background: "rgb(10,100,10)"
    }}
    // transition={{ type: "spring", damping: 15, mass: 0.27, stiffness: 55 }}
    viewport={{ once: false, amount: "all", margin: "50%" }}
    sx={{
      //   boxSizing: "border-box",
      minWidth: "20rem",
      height: "20rem",
      pr: "5rem",
    }}
  >
    <Image
      //   style={{ width: "15rem" }}
      src={"/ResumeTemplate.jpg"}
      alt="test"
      width="240"
      height="340"
      //   style={{ marginRight: "48px" }}
      //   layout="fill"
    />
  </Box>
));

export default memo(ResumeElement);
