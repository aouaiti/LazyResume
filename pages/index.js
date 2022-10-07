import Head from "next/head";
import ApplicationBar from "../components/applicationBar/AppBar";
import SideBar from "../components/applicationBar/SideBar";
import Section1 from "../components/section1/Section1.jsx";
import LRSvg from "../components/section1/LRSvg";
import Section2 from "../components/section2/Section2";
import Section3 from "../components/section3/Section3";
import ScrollTrigger from "../components/trigger/ScrollTrigger";
import { Box } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Home() {
  const isFooterVisible = useSelector((state) => state.footer.isVisible);
  const currentSection = useSelector((state) => state.currentSection.Section);
  const FooterController = useAnimation();

  const animate = {
    init: {
      scale: 1,
    },
    animate: {
      scale: 0.8,
      // translateY: "-10%",
      y: -74,
      // position: "fixed",
      transition: {
        delay: `${currentSection === 1 || currentSection === 3 ? 0 : 0.6}`,
      },
    },
    leave: {
      scale: 1,
      y: 0,
    },
  };

  useEffect(() => {
    // FooterController.start({
    //   transition: { delay: `${currentSection === 1 ? 1 : 1}` },
    // });
    isFooterVisible && FooterController.start("animate");
    !isFooterVisible && FooterController.start("leave");
  }, [isFooterVisible]);
  return (
    <>
      <Box id="main">
        <Head>
          <title>Lazy Resume</title>
          <meta name="description" content="The Lazy Resume Maker" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ScrollTrigger />
        {/* <Section2 />
        <Section3 /> */}
        <Box
          component={motion.div}
          variants={animate}
          initial="init"
          animate={FooterController}
          style={{
            // position: "fixed",
            // transform: "scale(0.8) translateY(-12.5%)",
            height: "100vh",
            // overflow: "hidden",
          }}
        >
          <Section1 />
          <LRSvg />
          <SideBar />
          <ApplicationBar />
          <Section2 />
          <Section3 />
        </Box>
      </Box>
    </>
  );
}
