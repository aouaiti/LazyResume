import InnerHUD from "./InnerHUD";
import OuterHUD from "./OuterHUD";
import Cube from "./Cube";
import Image from "next/image";
import { useSelector } from "react-redux";

const Section3 = () => {
  const themeMode = useSelector((state) => state.theme.mode);
  return (
    <>
      <div
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          //   transition: 1000,
          //   background:
          //     "url(https://static.vecteezy.com/system/resources/previews/001/849/558/original/technology-hud-background-free-vector.jpg)",
          //   backgroundPosition: "50%",
          //   backgroundSize: "cover",
        }}
      >
        <Image
          layout="fill"
          objectFit="cover"
          alt="back"
          src="/HUDBack4.jpg"
          style={{
            filter: `${themeMode === "dark" ? "" : "invert(1)"}`,
            transition: "all 1s ease 0s",
          }}
        />
        <InnerHUD />
        <OuterHUD />
        <Cube />
      </div>
      <div className="ghost" style={{ height: "500vh" }}></div>
    </>
  );
};

export default Section3;
