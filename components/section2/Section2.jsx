import Back from "./Back";
import { memo } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

const animate = {
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

function Section2() {
  //////////////////////////////////redux boiler plate
  const currentSection = useSelector((state) => state.currentSection.Section);
  const section2part = useSelector((state) => state.section2.part);
  //////////////////////////////////redux boiler plate end
  return (
    <AnimatePresence exitBeforeEnter={true}>
      {currentSection === 2 && section2part >= 0 && section2part <= 3 && (
        <Box
          variants={animate}
          initial="initial"
          exit="exit"
          component={motion.div}
          id="section-2"
          style={{ margin: "0", textAlign: "center" }}
        >
          <Back key={0} trigger={0} numba={7} msg={"english resume"} />
          <Back key={1} trigger={1} numba={10} msg={"french resume"} />
          <Back key={2} trigger={2} numba={15} msg={"canadian resume"} />
        </Box>
      )}
    </AnimatePresence>
  );
}

export default memo(Section2);
