import Back from "./Back";
import Hor from "./Hor";
import { useState, memo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { currentPart } from "../../Features/globalUiVars/section2";
import { sectionIndex } from "../../Features/globalUiVars/currentSection";
import { Box } from "@mui/material";

function Section2() {
  //////////////////////////////////redux boiler plate
  const section2part = useSelector((state) => state.section2.part);
  const currentSection = useSelector((state) => state.currentSection.Section);
  const dispatch = useDispatch();
  console.log(currentSection);
  //////////////////////////////////redux boiler plate end
  const [displayUI, setDisplayUI = { setDisplayUI }] = useState(0);
  // useEffect(() => dispatch(sectionIndex(2)), []);
  if (currentSection !== 2) return null;
  return (
    <Box id="section-2" style={{ margin: "0", textAlign: "center" }}>
      <button
        style={{ position: "fixed", zIndex: "999", top: "10%" }}
        onClick={() => dispatch(currentPart(-section2part))}
      >
        Display section 2
      </button>
      <Back trigger={0} numba={7} />
      <Back trigger={1} numba={10} />
      <Back trigger={2} numba={15} />
    </Box>
  );
}

export default memo(Section2);
