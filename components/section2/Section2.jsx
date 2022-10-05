import Back from "./Back";
import Hor from "./Hor";
import { useState, memo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { currentPart } from "../../Features/globalUiVars/section2";
import { sectionIndex } from "../../Features/globalUiVars/currentSection";
import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

const animate = {
  // initial: {
  //   opacity: 0,
  // },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

function Section2() {
  //////////////////////////////////redux boiler plate
  // const section2part = useSelector((state) => state.section2.part);
  const currentSection = useSelector((state) => state.currentSection.Section);
  const section2part = useSelector((state) => state.section2.part);
  // const dispatch = useDispatch();
  // console.log(currentSection);
  //////////////////////////////////redux boiler plate end
  // if (currentSection !== 2) return null;
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
          {/* <button
        style={{ position: "fixed", zIndex: "999", top: "10%" }}
        onClick={() => dispatch(currentPart(-section2part))}
      >
        Display section 2
      </button> */}
          <Back key={0} trigger={0} numba={7} />
          <Back key={1} trigger={1} numba={10} />
          <Back key={2} trigger={2} numba={15} />
        </Box>
      )}
    </AnimatePresence>
  );
}

export default memo(Section2);
