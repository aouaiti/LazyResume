import { forwardRef, memo } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import Image from "next/image";

const child = {
  init: {
    y: -600,
    opacity: 0.2,
    filter: "grayscale(100%)",
  },
  show: {
    y: 0,
    transition: {
      delay: 1,
    },
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
    whileInView={{
      opacity: 1,
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
));
ResumeElement.displayName = "LazyResume";
export default memo(ResumeElement);
