import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Section4 = () => {
  return (
    <Box
      style={{
        position: "fixed",
        bottom: "2%",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <Box
        style={{
          flex: "1",
          display: "flex",
          alignSelf: "right",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Box sx={{ margin: "0 10px" }}>
          <Image
            width="200"
            height="100"
            src="/lr.png"
            // style={{ borderRadius: "50%" }}
          />
        </Box>
        <Box sx={{ textAlign: "left", marginLeft: "-100px" }}>
          <Typography variant="h6">Project name: Lazy Resume</Typography>
          <Typography variant="h6">
            Repo: https://github.com/aouaiti/LazyResume
          </Typography>
          <Typography variant="h6">
            Framework: NextJs -react framework-
          </Typography>
        </Box>
      </Box>
      <Box
        style={{
          flex: "1",
          display: "flex",
          alignSelf: "right",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "right" }}>
          <Typography variant="h6">Project made by AOUAITI</Typography>
          <Typography variant="h6">
            GITHUB: https://github.com/aouaiti
          </Typography>
          <Typography variant="h6">MAIL: mr.aouaiti.ahmed@gmail.com</Typography>
        </Box>
        <Box sx={{ margin: "0 10px" }}>
          <Image
            width="100"
            height="100"
            src="/aouaiti.jpg"
            style={{ borderRadius: "50%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};
Section4.displayName = "LazyResume";
export default Section4;
