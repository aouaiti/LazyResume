import Svg1 from "./Svg1";
import Svg2 from "./Svg2";
import Cube from "./Cube";

const Section3 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Svg1 />
      <Svg2 />
      <Cube />
      {/* <div className="ghost" style={{ height: "500vh" }}></div> */}
    </div>
  );
};

export default Section3;
