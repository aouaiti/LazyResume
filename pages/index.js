import Head from "next/head";
import ApplicationBar from "../components/applicationBar/AppBar";
import SideBar from "../components/applicationBar/SideBar";
import Section1 from "../components/section1/Section1.jsx";
import LRSvg from "../components/section1/LRSvg";
import Section2 from "../components/section2/Section2";
import Section3 from "../components/section3/Section3";
import Section4 from "../components/section4/Section4";
import ScrollTrigger from "../components/trigger/ScrollTrigger";
import { Box } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { toggleQuality } from "../Features/globalUiVars/quality";
import IconButton from "@mui/material/IconButton";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";

export default function Home() {
  const dispatch = useDispatch();
  const currentSection = useSelector((state) => state.currentSection.Section);
  const previousSection = useSelector(
    (state) => state.currentSection.prevSection
  );
  const FooterController = useAnimation();

  const animate = {
    init: {
      scale: 1,
    },
    animate: {
      scale: 0.8,
      transition: {
        delay: `${previousSection === 1 ? 0 : 0.6}`,
      },
    },
    leave: {
      scale: 1,
      transition: {
        duration: 0,
      },
    },
  };

  useEffect(() => {
    currentSection === 4 && FooterController.start("animate");
    currentSection !== 4 && FooterController.start("leave");
  }, [currentSection]);
  return (
    <>
      <Section4 />
      <Box id="main">
        <Head>
          <title>Lazy Resume</title>
          <meta name="description" content="The Lazy Resume Maker" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ScrollTrigger />
        <Box
          component={motion.div}
          variants={animate}
          initial="init"
          animate={FooterController}
          style={{
            transformOrigin: "top",
            height: "100vh",
          }}
        >
          <Section1 />
          <LRSvg />
          <SideBar />
          <ApplicationBar />
          <Section2 />
          <Section3 />
          {/* <button
            onClick={(e) => dispatch(toggleQuality())}
            style={{ zIndex: "99999", position: "absolute", top: "30%" }}
          >
            quality toggle
          </button> */}
        </Box>
        <IconButton
          sx={{
            position: "fixed",
            zIndex: "999999",
            right: "2%",
            bottom: "2%",
            opacity: currentSection === 4 ? "0" : "1",
          }}
          aria-label="quality"
          onClick={(e) => dispatch(toggleQuality())}
        >
          <AppShortcutIcon sx={{ fontSize: "3rem" }} />
        </IconButton>
      </Box>
    </>
  );
}
