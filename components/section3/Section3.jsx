import InnerHUD from "./InnerHUD";
import OuterHUD from "./OuterHUD";
import Cube from "./Cube";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const animateImage = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 2 },
  },
  hidden: {
    opacity: 0,
    transition: { duration: 3 },
  },
};

const Section3 = () => {
  const themeMode = useSelector((state) => state.theme.mode);
  const currentSection = useSelector((state) => state.currentSection.Section);
  //   if (currentSection !== 3) return null;
  return (
    <AnimatePresence exitBeforeEnter={true}>
      {currentSection === 3 && (
        <>
          <Box
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
            <Box
              component={motion.div}
              variants={animateImage}
              initial="init"
              animate="animate"
              exit="hidden"
            >
              <Image
                layout="fill"
                objectFit="cover"
                alt="back"
                src="/HUDBack6.jpg"
                placeholder="blur"
                blurDataURL="/HUDBack6_small.webp"
                style={{
                  filter: `${themeMode === "dark" ? "" : "hue-rotate(346deg)"}`,
                  transition: "all 1s ease 0s",
                }}
              />
            </Box>
            <InnerHUD />
            <OuterHUD />
            <Cube />
          </Box>
          <Box className="ghost" style={{ height: "500vh" }} />
        </>
      )}
    </AnimatePresence>
  );
};

export default Section3;
