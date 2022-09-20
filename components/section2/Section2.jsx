import Back from "./Back";
import Hor from "./Hor";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { currentPart } from "../../Features/globalUiVars/section2";

export default function Section2() {
  //////////////////////////////////redux boiler plate
  const section2part = useSelector((state) => state.section2.part);
  const dispatch = useDispatch();
  //////////////////////////////////redux boiler plate end
  const [lowerRef, setLowerRef] = useState(null);
  const [displayUI, setDisplayUI = { setDisplayUI }] = useState(0);
  return (
    <div style={{ margin: "0", textAlign: "center" }}>
      <button
        style={{ position: "fixed", zIndex: "999", top: "10%" }}
        onClick={() => dispatch(currentPart(-section2part))}
      >
        Display section 2
      </button>
      <Back
        lowerBackg={"#4795d1"}
        higherBackg={"#006eb8"}
        trigger={0}
        numba={7}
      />
      <Back
        lowerBackg={"#d33f34"}
        higherBackg={"#a61322"}
        trigger={1}
        numba={10}
      />
      <Back
        lowerBackg={"#6cd96a"}
        higherBackg={"#00986f"}
        trigger={2}
        numba={15}
      />
      {/* <Hor lowerRef={lowerRef} /> */}
    </div>
  );
}
