import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

const st = {
  maxWidth: "50vw",
  display: "-webkit-box",
  WebkitLineClamp: "1",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  fontSize: { xs: "10px", sm: "15px" },
};

const textContainer = {
  init: {
    // opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      staggerChildren: 0.5,
    },
  },
};
const textAnimation = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const Section4 = () => {
  const themeMode = useSelector((state) => state.theme.mode);
  const currentSection = useSelector((state) => state.currentSection.Section);
  return (
    <Box
      style={{
        position: "fixed",
        bottom: "2%",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // padding: "0 0px",
      }}
    >
      <Box
        sx={{
          flex: "1",
          display: "flex",
          alignSelf: "right",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: "10px", sm: "0" },
        }}
      >
        <Box
          sx={{
            width: { xs: "50px", sm: "100px" },
            height: { xs: "50px", sm: "100px" },
            margin: "0 10px",
            // display: { xs: "none", sm: "block" },
          }}
        >
          <Image
            width="100"
            height="100"
            src="/lr-cropped.png"
            style={{ filter: `invert(${themeMode === "light" ? "0" : "1"})` }}
          />
        </Box>
        <Box
          component={motion.div}
          variants={textContainer}
          initial="init"
          animate={`${currentSection === 4 ? "animate" : "init"}`}
          sx={{ textAlign: "left" }}
        >
          <Typography
            component={motion.p}
            variants={textAnimation}
            sx={st}
            variant="h6"
          >
            Project name: Lazy Resume
          </Typography>
          <Typography
            component={motion.p}
            variants={textAnimation}
            sx={st}
            variant="h6"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/aouaiti/LazyResume"
            >
              Github repo: /LazyResume
            </a>
          </Typography>
          <Typography
            component={motion.p}
            variants={textAnimation}
            sx={st}
            variant="h6"
          >
            Framework: NextJs
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flex: "1",
          display: "flex",
          alignSelf: "right",
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: "10px", sm: "0" },
        }}
      >
        <Box
          sx={{
            width: { xs: "50px", sm: "100px" },
            height: { xs: "50px", sm: "100px" },
            margin: "0 10px",
            order: { xs: "1", sm: "2" },
            // display: { xs: "none", sm: "block" },
          }}
        >
          <Image
            width="100"
            height="100"
            // layout="fill"
            objectFit="cover"
            src="/aouaiti.jpg"
            style={{ borderRadius: "50%" }}
          />
        </Box>
        <Box
          component={motion.div}
          sx={{ textAlign: "right", order: { xs: "2", sm: "1" } }}
          variants={textContainer}
          initial="init"
          animate={`${currentSection === 4 ? "animate" : "init"}`}
        >
          <Typography
            component={motion.p}
            variants={textAnimation}
            sx={st}
            variant="h6"
          >
            Project made by AOUAITI
          </Typography>
          <Typography
            component={motion.p}
            variants={textAnimation}
            sx={st}
            variant="h6"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/aouaiti"
            >
              Github: /aouaiti
            </a>
          </Typography>
          <Typography
            component={motion.p}
            variants={textAnimation}
            sx={st}
            variant="h6"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/magnoss"
            >
              FaceBook: /magnoss
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
Section4.displayName = "LazyResume";
export default Section4;
