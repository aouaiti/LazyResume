import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const Trigger = forwardRef((props, ref) => {
  return (
    <Box
      component={motion.div}
      ref={ref}
      {...props}
      //   initial={{ opacity: 0, background: "red" }}
      //   whileInView={{ opacity: 0, background: "yellow" }}
      // viewport={{ root: lowerRef, once: false, amount: "all" }}
      //   viewport={{ root: "app", once: true, amount: "all" }}
      style={{
        // opacity: 0,
        marginRight: "5vw",
        background: "black",
        width: "3rem",
        height: "3rem",
        borderRadius: "50%",
      }}
    />
  );
});
Trigger.displayName = 'LazyResume';
export default Trigger;
