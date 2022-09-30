import styles from "./Letter.module.scss";
import { memo } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

const animatePath = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  full: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
    },
  },
};

const SVGComponent = (props) => {
  const themeMode = useSelector((state) => state.theme.mode);
  const L = (props) => {
    return (
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800.97 679.43"
        style={{
          height: "100%",
          top: "0%",
          left: "50%",
          position: "absolute",
          width: "min(100vw, 300px)",
          transform: "translateX(-37%)",
          filter: "drop-shadow(-6px 6px 18px black)",
          overflow: "hidden",
        }}
        {...props}
      >
        <motion.path
          shape-rendering="geometricPrecision"
          d="M118.98 261.5v201.09c0 18.79 7 34.46 21.4 46.56a54.16 54.16 0 0 0 34.17 13.17c36.08.89 72.18.13 108.27.35q21.48.14 43 .15c1.75 0 2.3.43 2.29 2.25q-.09 53.52-.06 107c0 2.37-.14 4.75 0 7.11.11 1.9-.69 2.2-2.38 2.19q-31.51-.07-63 0c-24.91 0-49.82-.06-74.73 0-10.26 0-20.52-.27-30.71-1.22a158.51 158.51 0 0 1-42.29-10.39 190.19 190.19 0 0 1-34.16-17.15 173.06 173.06 0 0 1-38.82-34.33 165.28 165.28 0 0 1-18.59-26.47 178.94 178.94 0 0 1-19.05-49.67 194 194 0 0 1-4.17-40.77v-391c0-5.59.07-11.19-.1-16.78 0-1.65.38-2 1.93-2h114.63c1.63 0 2.57 0 2.57 2.23q-.12 103.84-.06 207.7Z"
        />
      </svg>
    );
  };
  const R = (props) => {
    return (
      <svg
        id="Layer_2"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800.97 679.43"
        style={{
          height: "100%",
          position: "absolute",
          top: "0%",
          left: "50%",
          width: "min(100vw, 300px)",
          transform: "translateX(-37%)",
          height: "100vh",
        }}
        {...props}
      >
        <motion.path
          variants={animatePath}
          initial="initial"
          animate="full"
          id="R"
          d="M680.63,728.64c0-28.9.25-57.8-.1-86.69a56.3,56.3,0,0,0-16-39.52,57.43,57.43,0,0,0-31.57-17.31,68.28,68.28,0,0,0-12.39-1q-72.31,0-144.63,0c-4.35,0-4.25.88-4.24-4.11q0-55.92-.05-111.86c0-2.38.57-2.93,3-2.83,6.34.26,12.7.12,19.06.12q61,0,122,0c9.14,0,18.28-.05,27-3.66,18.39-7.67,31.1-20.57,36.13-40.12,7.75-30.17-9.76-61-40.37-70.58a56.68,56.68,0,0,0-17-2.19q-72.57-.12-145.14-.05c-4.55,0-4.55,0-4.55-4.45V233.6c0-3.68,0-3.67,3.79-3.67,50.42,0,100.83-.17,151.25.11,15.77.09,31.27,3,46.42,7.59,31.5,9.57,58.19,26.69,80.41,50.91,18.59,20.26,31.19,43.84,38.9,70.11,3.5,11.93,5.16,24.17,6.32,36.55a158.31,158.31,0,0,1-.28,31.17,173.33,173.33,0,0,1-9.27,40,171,171,0,0,1-32.4,55.81c-1.81,2.08-1.65,3.37,0,5.31a175.71,175.71,0,0,1,41.27,94.41,287.23,287.23,0,0,1,1.54,31.17q-.06,82,.05,164c0,2.28-.58,2.72-2.78,2.72q-57.2-.06-114.39.09c-1.39,0-1.82-.5-1.82-1.73,0-1.69-.08-3.39-.08-5.08Q680.63,770.83,680.63,728.64Z"
          transform="translate(-231.45 -178.5)"
          shape-rendering="geometricPrecision"
        />
      </svg>
    );
  };
  const LR = (props) => {
    return (
      <motion.path
        id="LR"
        {...props}
        d="M1688.42,181.35c0-2.3-.55-2.85-2.85-2.85q-283.32.09-566.63.06H1005.06q0,338.45-.06,676.9c0,2.06.41,2.47,2.47,2.47q340.44-.09,680.89-.06,0-313.59,0-627.19C1688.34,214.23,1688.31,197.79,1688.42,181.35ZM1375.55,815.71c.11,1.9-.69,2.2-2.38,2.19q-31.51-.07-63,0c-24.91,0-49.82-.06-74.73,0-10.26,0-20.52-.27-30.71-1.22a158.67,158.67,0,0,1-42.3-10.39,190.52,190.52,0,0,1-34.16-17.15,173,173,0,0,1-38.81-34.33,164.64,164.64,0,0,1-18.59-26.47,178.94,178.94,0,0,1-19-49.67,194,194,0,0,1-4.17-40.77q0-195.49,0-391c0-5.59.07-11.19-.1-16.78,0-1.65.37-2,1.92-2,8.65,0,17.29,0,25.93,0q44.36,0,88.71,0c1.63,0,2.57,0,2.57,2.23q-.12,103.84-.06,207.7h-.09q0,100.54,0,201.09c0,18.79,7,34.46,21.4,46.56a54.14,54.14,0,0,0,34.19,13.17c36.08.89,72.18.13,108.27.35q21.48.14,43,.15c1.74,0,2.3.43,2.29,2.25q-.09,53.52-.06,107C1375.54,811,1375.4,813.35,1375.55,815.71Zm237.43,2q-57.18-.06-114.38.09c-1.39,0-1.82-.5-1.83-1.73,0-1.7-.08-3.39-.08-5.08v-84.4c0-28.9.25-57.8-.1-86.69a56.34,56.34,0,0,0-16-39.52A57.43,57.43,0,0,0,1449,583.12a68.28,68.28,0,0,0-12.39-1q-72.31,0-144.63,0c-4.35,0-4.25.88-4.25-4.11q0-55.92,0-111.86c0-2.38.57-2.93,3-2.83,6.34.26,12.7.12,19,.12q61,0,122,0c9.14,0,18.28-.05,27-3.66,18.39-7.67,31.1-20.57,36.12-40.12,7.76-30.17-9.75-61-40.36-70.59a57,57,0,0,0-17-2.18q-72.57-.12-145.14-.05c-4.55,0-4.55,0-4.55-4.45V231.6c0-3.68,0-3.67,3.79-3.67,50.42,0,100.83-.17,151.24.11,15.78.09,31.28,3,46.43,7.59,31.5,9.57,58.19,26.69,80.41,50.91,18.59,20.26,31.19,43.84,38.9,70.11,3.5,11.93,5.16,24.17,6.32,36.55a158.31,158.31,0,0,1-.28,31.17,172.84,172.84,0,0,1-9.28,40,170.77,170.77,0,0,1-32.39,55.81c-1.81,2.08-1.65,3.37,0,5.31a175.71,175.71,0,0,1,41.27,94.41,289.79,289.79,0,0,1,1.54,31.17q-.06,82,0,164C1615.77,817.32,1615.19,817.76,1613,817.76Z"
        transform="translate(-231.45 -178.5)"
      />
    );
  };
  return (
    <Box
      component={motion.div}
      style={{ position: "fixed", width: "100vw", height: "100vh" }}
      {...props}
    >
      <L fill="#f44336" />
      <R
        className={`${themeMode === "light" ? styles.still : styles.animate} ${
          themeMode === "light" ? "" : styles.flicker1
        }`}
        fill={`${themeMode === "light" ? "#00000044" : "none"}`}
        strokeWidth="15px"
      />
    </Box>
  );
};

export default memo(SVGComponent);
