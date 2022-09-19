import Back from "./Back";
import Hor from "./Hor";
import { useState } from "react";

export default function Section2() {
  const [lowerRef, setLowerRef] = useState(null);
  const [displayUI, setDisplayUI = { setDisplayUI }] = useState(0);
  return (
    <div style={{ margin: "0", textAlign: "center" }}>
      <button
        style={{ position: "fixed", zIndex: "999", top: "40%" }}
        onClick={() => setDisplayUI((displayUI + 1) % 3)}
      >
        UI
      </button>
      <Back
        setDisplayUI={setDisplayUI}
        displayUI={displayUI}
        lowerBackg={"#4795d1"}
        higherBackg={"#006eb8"}
        trigger={0}
        numba={7}
      />
      <Back
        setDisplayUI={setDisplayUI}
        displayUI={displayUI}
        lowerBackg={"#d33f34"}
        higherBackg={"#a61322"}
        trigger={1}
        numba={10}
      />
      <Back
        setDisplayUI={setDisplayUI}
        displayUI={displayUI}
        lowerBackg={"#6cd96a"}
        higherBackg={"#00986f"}
        trigger={2}
        numba={15}
      />
      {/* <Hor lowerRef={lowerRef} /> */}
    </div>
  );
}
