import styles from "./hudStyles.module.scss";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useSelector } from "react-redux";

const animate = {
  hidden: {
    scale: 0,
  },
  shown: {
    scale: 0.8,
  },
};

const SVGComponent = (props) => {
  const themeMode = useSelector((state) => state.theme.mode);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelo = useSpring(velocity, { damping: 50, stiffness: 400 });
  const ro = useTransform(smoothVelo, [0, 1000], [0, 20], { clamp: false });
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
    >
      <motion.svg
        className={themeMode === "dark" ? styles.hudNight : styles.hudDay}
        xmlns="http://www.w3.org/2000/svg"
        width={1000}
        height={1000}
        viewBox="0 0 1000 1000"
        // style={{
        //   // filter: "drop-shadow(0 0 10px black) ",
        //   width: "min(100%, 100vh)",
        //   fill: `${themeMode === "dark" ? "white" : "#f44336"}`,
        //   filter: `${
        //     themeMode === "dark" ? "drop-shadow(0 0 10px #adb5bd)" : ""
        //   }`,
        //   opacity: "0.8",
        // }}
      >
        <defs>
          <style>
            {"\n      .cls-1 {\n        fill-rule: evenodd;\n      }\n    "}
          </style>
        </defs>
        <path
          id="Shape_26_1"
          data-name="Shape 26 1"
          className="cls-1"
          d="M900,493.1l-5.033,5.013-0.066-.066-13.916,13.856-5.034-5.012,13.918-13.855-13.918-13.856,5.034-5.012L894.9,488.027l0.066-.066L900,492.973l-0.066.066ZM818.37,297.7l0.872-.867a371.527,371.527,0,0,1,50.705,120.7h-1.125A373.026,373.026,0,0,0,818.37,297.7ZM866.589,448.4c-23.4-162.263-153.509-290.675-317.044-312.244v-1.989C714.172,155.757,845.163,285.045,868.587,448.4h-2ZM580.5,132.966v-1.1a375.029,375.029,0,0,1,120.534,48.685l-0.9.891A376.346,376.346,0,0,0,580.5,132.966Zm-61.873-8.992L504.7,110.118l-13.918,13.856-5.032-5.011,13.918-13.856-0.066-.065,5.033-5.012L504.7,100.1l0.066-.066,5.035,5.012-0.066.065,13.918,13.856ZM134.9,448.4h-2C156.7,282.438,291.533,151.648,459.86,133.221V135.2C292.625,153.611,158.676,283.525,134.9,448.4ZM296.131,182.9a374.941,374.941,0,0,1,118.182-49.689v1.1A376.55,376.55,0,0,0,297,183.76ZM130.906,417.534A371.432,371.432,0,0,1,179.258,300.51l0.9,0.892a372.864,372.864,0,0,0-48.123,116.132h-1.125ZM124.05,500.3l-7.3-7.266,7.3-7.266,7.3,7.266Zm0,6.59-5.034,5.01L105.1,498.048l-0.065.066L100,493.1l0.066-.064L100,492.972l5.034-5.012,0.065,0.066,13.918-13.856,5.034,5.012-13.918,13.856Zm55.984,192.329-0.895.891a371.475,371.475,0,0,1-48.3-117.141h1.122A372.837,372.837,0,0,0,180.034,699.223ZM132.963,537.681c17.247,172.294,154.368,309.958,326.9,328.947v1.981c-173.621-19-311.622-157.549-328.883-330.928h1.986Zm281.35,328.83v1.1a374.9,374.9,0,0,1-118.37-49.81l0.87-.867A376.531,376.531,0,0,0,414.313,866.511Zm76.472,9.516L504.7,889.884l13.919-13.857,5.034,5.011-13.918,13.856,0.066,0.065-5.035,5.011L504.7,899.9l-0.065.066-5.033-5.011,0.066-.065-13.918-13.856Zm21.218,0-7.3,7.266-7.3-7.266,7.3-7.265Zm-7.3-757.337,7.3,7.265-7.3,7.267-7.3-7.267ZM858.525,501.418c0,196.4-160.5,356.182-357.778,356.182S142.968,697.817,142.968,501.418s160.5-356.182,357.779-356.182S858.525,305.019,858.525,501.418ZM500.747,164.932c-186.372,0-337.995,150.947-337.995,336.486S314.375,837.9,500.747,837.9,838.741,686.958,838.741,501.418,687.118,164.932,500.747,164.932Zm296.92,481.789-1.461-1.008c65.455-130.416,35.675-289.9-72.9-388.132l1.01-1.455C833.677,354.928,863.654,515.5,797.667,646.721ZM696.605,245.529a5.244,5.244,0,1,1,5.266-5.245A5.257,5.257,0,0,1,696.605,245.529ZM261.321,276.752l-1.46-1.007C361.7,166.424,526.807,138.8,659.234,210.213l-1.011,1.45C526.606,140.788,362.586,168.213,261.321,276.752Zm-21.058,35.733a5.244,5.244,0,1,1,5.266-5.245A5.256,5.256,0,0,1,240.263,312.485ZM286.08,746.356l-1.008,1.448C167.821,646.362,137.428,475.491,213.023,340.042l1.452,1C139.421,475.694,169.618,645.475,286.08,746.356ZM318.088,765a5.244,5.244,0,1,1-5.266,5.243A5.255,5.255,0,0,1,318.088,765ZM752.2,711.964l1.451,1c-99.3,116.243-267,148.756-402.535,79.376l1.012-1.453C486.848,859.731,653.465,827.418,752.2,711.964Zm20.39-41.007a5.244,5.244,0,1,1-5.267,5.244A5.254,5.254,0,0,1,772.588,670.957ZM875.952,485.772l7.3,7.266-7.3,7.266-7.3-7.266Zm-7.421,51.909h1.986c-17,170.738-151.084,307.7-320.972,329.986v-1.989C718.341,843.417,851.547,707.332,868.531,537.681ZM701.22,820.144a375.039,375.039,0,0,1-120.725,48.8v-1.1a376.4,376.4,0,0,0,119.829-48.6ZM870.012,582.975a371.486,371.486,0,0,1-50.651,120.816l-0.867-.863a373.053,373.053,0,0,0,50.4-119.953h1.122Z"
        />
      </motion.svg>
    </motion.div>
  );
};
export default SVGComponent;
