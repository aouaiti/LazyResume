import styles from "./hudStyles.module.scss";
import {
  motion,
  useSpring,
  useTransform,
  useScroll,
  useVelocity,
} from "framer-motion";
import { useSelector } from "react-redux";

const animate = {
  hidden: {
    scale: 5,
  },
  shown: {
    scale: 1,
  },
  hidden: {
    scale: 0,
  },
};

const SVGComponent = ({ scrollProgress, ...props }) => {
  const themeMode = useSelector((state) => state.theme.mode);
  // const { scrollYProgress } = useScroll();
  // const smoothScroll = useSpring(scrollYProgress, {
  //   damping: 50,
  //   stiffness: 400,
  // });
  const ro = useTransform(scrollProgress, [0, 1], [0, 360], {
    clamp: true,
  });

  return (
    <motion.div
      style={{
        width: "200vw",
        height: "100vh",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        rotate: ro,
      }}
      variants={animate}
      initial="hidden"
      animate="shown"
      exit="hidden"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={1000}
        height={1000}
        viewBox="0 0 1000 1000"
        className={
          themeMode === "dark" ? styles.hudNightOuter : styles.hudDayOuter
        }
        {...props}
      >
        <defs>
          <style>
            {"\n      .cls-1 {\n        fill-rule: evenodd;\n      }\n    "}
          </style>
        </defs>
        <path
          id="Shape_7_1"
          data-name="Shape 7 1"
          className="cls-1"
          d="M894.824,551.174V548.92l5.156-3.381v2.255Zm0-6.215,5.156-3.38v2.254l-5.156,3.381v-2.255Zm0-3.962,5.156-3.379v2.252l-5.156,3.381V541Zm0-3.961,5.156-3.381v2.255l-5.156,3.379v-2.253Zm0-3.963,5.156-3.38v2.254l-5.156,3.381v-2.255Zm0-3.96,5.156-3.381v2.254l-5.156,3.381v-2.254Zm-1.3,23.173-5.809,8.382v19.35h-0.225l5.459,5.457-8.671,8.668-8.111-8.107c-33,143.822-146.648,257.182-290.682,289.816l8.438,8.433-8.671,8.666-5.234-5.231H561.472l-8.387,5.8H529.2l-4.519,6.451H475.637l-4.518-6.451h-23.88l-8.389-5.8H419.488V887.5l-5.459,5.456-8.673-8.666,8.614-8.608c-143.713-32.91-257.031-146.235-289.885-289.895l-8.364,8.361-8.672-8.668,5.459-5.457h-0.225v-19.35l-5.809-8.382V528.419L100.02,523.9V474.886l6.454-4.517V446.5l5.809-8.382V419.585l-5.234-5.23,8.671-8.666,8.324,8.318c32.811-143.621,146.063-256.92,289.705-289.9l-8.393-8.387,8.673-8.667,5.459,5.457v-0.226H438.85l8.389-5.8h23.88l4.518-6.45h49.048l4.519,6.45h23.881l8.387,5.8h18.547l5.234-5.231,8.671,8.666-8.2,8.2c143.96,32.71,257.534,146.059,290.487,289.841l8.073-8.067,8.671,8.666-5.234,5.23v18.536l5.809,8.382v23.866l6.455,4.517V523.9l-6.455,4.516v23.867Zm-9.246,36.657,3.47-3.468-3.47-3.465-3.468,3.465ZM585.253,887.752l3.468-3.467-3.468-3.466-3.47,3.466Zm-105.1,2.549h39.369v-5.16H480.154v5.16Zm-69.595-6.016,3.47,3.467,3.467-3.467-3.467-3.466ZM112.251,585.475l3.47,3.468,3.469-3.468-3.47-3.465ZM109.7,480.044v39.347h5.163V480.044H109.7Zm6.019-69.155-3.469,3.466,3.47,3.467,3.469-3.467ZM414.029,112.248l-3.47,3.467,3.47,3.467,3.467-3.468ZM519.523,109.7H480.154v5.16h39.369V109.7Zm69.2,6.015-3.468-3.466-3.47,3.467,3.47,3.467ZM872.874,463.272v26.51h-12.2C855.4,298.65,700.523,144.219,509.137,139.523V127.429H535.5l4.84-4.837H578.7l0.6-.146c1.751,0.366,3.475.8,5.217,1.193l-5.559-5.555H540.174l-7.1,6.443H505.97v18.712l-5.808,9.029-5.809-9.029V124.527H467.247l-7.1-6.443H420.329l-5.853,5.85c1.941-.442,3.864-0.93,5.816-1.342h38.242l4.84,4.837h26.737v12.126C299.22,144.8,144.913,299.009,139.65,489.782H126.965v-26.51l-4.84-4.838V422.588c0.527-2.579,1.14-5.125,1.719-7.685l-5.753,5.75v38.753l6.447,7.093v27.09h18.724l9.034,5.805-9.034,5.805H124.538v27.09l-6.447,7.094v39.8l5.818,5.814c-0.6-2.66-1.237-5.308-1.784-7.989V540.188l4.84-4.838V508.8h12.651c4.687,191.289,159.23,346.089,350.5,351.346v12.743H463.73l-4.84,4.838H423.151c-3.03-.616-6.026-1.326-9.03-2.013l6.208,6.2h39.819l7.1-6.442h27.106V856.76l5.809-9.029,5.808,9.029v18.713h27.106l7.1,6.442h38.777l5.934-5.929c-2.6.585-5.187,1.206-7.806,1.738H540.693l-4.841-4.838H509.137V860.177C700.9,855.471,856.01,700.445,860.707,508.8h12.167V535.35l4.84,4.838v38.335l0.089,0.361c-0.4,1.912-.874,3.8-1.3,5.7l5.408-5.4v-39.8l-6.446-7.094V505.2H856.738l-9.034-5.805,9.034-5.805h18.724V466.5l6.446-7.093V420.653l-5.344-5.343c0.375,1.671.8,3.324,1.15,5v38.121Zm14.875-48.917-3.47-3.466-3.468,3.466,3.468,3.467Zm2.55,65.689h-5.163v39.347H890.3V480.044Zm-374-334.18v-1.936C696.357,152,842.02,294.39,855.121,473.013h-1.94C840.088,295.457,695.289,153.931,516.3,145.864ZM854.064,506.552H856c-3.789,187.415-153.314,339.7-339.7,348.056v-1.937C701.617,844.319,850.275,692.9,854.064,506.552Zm-709.75,0h1.936c3.779,185.917,151.76,337.079,336.486,346.07v1.937C296.942,845.564,148.094,693.536,144.314,506.552Zm2.819-33.539h-1.94c13.07-178.2,158.072-320.349,337.543-329.036v1.936C304.333,154.6,160.2,295.881,147.133,473.013Zm747.691-5.6,5.156,3.381v2.254l-5.156-3.381v-2.254Zm0-3.961,5.156,3.381v2.254l-5.156-3.38v-2.255Zm0-3.96,5.156,3.378v2.255l-5.156-3.381v-2.252Zm0-3.963,5.156,3.381v2.252l-5.156-3.379V455.53Zm0-3.962,5.156,3.38V457.2l-5.156-3.38v-2.254Zm0-3.961,5.156,3.38v2.255l-5.156-3.381v-2.254ZM604.07,122.912V118.9c133.866,36.215,239.873,140.883,277.864,273.945h-4.04C840.108,261.925,735.8,158.928,604.07,122.912Zm-57.728-22.888H548.6l3.383,5.153h-2.256Zm-0.58,5.153-3.383-5.153h2.256l3.382,5.153h-2.255Zm-3.965,0-3.381-5.153h2.254l3.382,5.153H541.8Zm-3.963,0-3.383-5.153h2.256l3.381,5.153h-2.254Zm-3.965,0-3.383-5.153h2.256l3.382,5.153h-2.255Zm-3.963,0-3.383-5.153h2.256l3.382,5.153h-2.255Zm-61.735,0,3.381-5.153h2.256l-3.383,5.153h-2.254Zm-3.965,0,3.383-5.153h2.255l-3.382,5.153h-2.256Zm-3.964,0,3.382-5.153h2.256l-3.383,5.153h-2.255Zm-3.964,0,3.383-5.153h2.255l-3.382,5.153h-2.256Zm-3.964,0,3.382-5.153h2.256l-3.383,5.153h-2.255Zm-3.964,0,3.383-5.153h2.255l-3.382,5.153H448.35ZM123.227,392.847h-4.04C156.491,262.2,259.364,158.913,389.8,120.931v4.038C261.506,162.732,160.317,264.338,123.227,392.847ZM100.02,470.8l5.156-3.381v2.254l-5.156,3.381V470.8Zm0-3.961,5.156-3.381v2.255l-5.156,3.38v-2.254Zm0-3.963,5.156-3.378v2.252l-5.156,3.381v-2.255Zm0-3.96,5.156-3.381v2.254l-5.156,3.379v-2.252Zm0-3.963,5.156-3.38v2.254l-5.156,3.38v-2.254Zm0-3.961,5.156-3.38v2.254l-5.156,3.381v-2.255Zm5.156,80.38-5.156-3.381v-2.254l5.156,3.381v2.254Zm0,3.961-5.156-3.381v-2.254l5.156,3.38v2.255Zm0,3.961-5.156-3.379v-2.255l5.156,3.381v2.253Zm0,3.962-5.156-3.381v-2.252L105.176,541v2.254Zm0,3.963-5.156-3.381v-2.254l5.156,3.38v2.255Zm0,3.96-5.156-3.38v-2.255l5.156,3.381v2.254ZM389.8,877.934v4.038C258.347,843.693,154.909,739.085,118.347,606.987h4.013C158.715,736.945,260.487,839.871,389.8,877.934Zm64.188,22.042h-2.255l-3.383-5.153h2.256Zm0.581-5.153,3.383,5.153H455.7l-3.382-5.153h2.255Zm3.965,0,3.382,5.153h-2.255l-3.383-5.153h2.256Zm3.963,0,3.383,5.153h-2.256l-3.382-5.153H462.5Zm3.965,0,3.382,5.153h-2.255l-3.383-5.153h2.256Zm3.963,0,3.383,5.153h-2.256l-3.381-5.153h2.254Zm61.736,0-3.382,5.153h-2.256l3.383-5.153h2.255Zm3.963,0-3.382,5.153h-2.256l3.383-5.153h2.255Zm3.964,0-3.381,5.153h-2.256l3.383-5.153h2.254Zm3.964,0-3.382,5.153h-2.254l3.381-5.153h2.255Zm3.965,0-3.382,5.153h-2.256l3.383-5.153h2.255Zm3.964,0-3.383,5.153h-2.256l3.383-5.153h2.256ZM878.764,606.987h4.012C845.542,741.5,738.961,847.509,604.07,884v-4.009C736.822,843.693,841.731,739.366,878.764,606.987Z"
        />
      </motion.svg>
    </motion.div>
  );
};

export default SVGComponent;
