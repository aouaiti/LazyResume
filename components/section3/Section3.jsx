import InnerHUD from "./InnerHUD";
import OuterHUD from "./OuterHUD";
import Cube from "./Cube";

const Section3 = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <InnerHUD />
        <OuterHUD />
        <Cube />
      </div>
      <div className="ghost" style={{ height: "500vh" }}></div>
    </>
  );
};

export default Section3;
