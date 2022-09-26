import styles from "./hor.module.scss";
import {
  useCallback,
  useState,
  useEffect,
  useRef,
  forwardRef,
  memo,
} from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import ResizeObserver from "resize-observer-polyfill";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { currentPart } from "../../Features/globalUiVars/section2";
import { sectionIndex } from "../../Features/globalUiVars/currentSection";
import { Box } from "@mui/material";
import Trigger from "../trigger/Trigger";
// import { useDispatch } from "react-redux";
import { triggerInView } from "../../Features/globalUiVars/triggers";
import ResumeElement from "./ResumeElement";

const cont = {
  init: {},
  leave: {
    opacity: 0,
    y: 900,
  },
};
const child = {
  init: {
    y: -600,
    opacity: 0.2,
    filter: "grayscale(100%)",
    // background: "rgb(10,10,10)"
    // paddingRight:"50px"
  },
  show: {
    y: 0,
  },
};

// const Elem = forwardRef((props, ref) => (
//   <Box
//     component={motion.div}
//     ref={ref}
//     {...props}
//     variants={child}
//     initial="init"
//     animate="show"
//     // exit="leave"
//     whileInView={{
//       // y: 100,
//       opacity: 1,
//       filter: "grayscale(0%)",
//       // background: "rgb(10,100,10)"
//     }}
//     // transition={{ type: "spring", damping: 15, mass: 0.27, stiffness: 55 }}
//     viewport={{ once: false, amount: "all" }}
//     style={{ minWidth: "15rem", height: "20rem", paddingRight: "3rem" }}
//   >
//     <img
//       style={{ width: "15rem" }}
//       alt="test"
//       src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/resume-template-design-4782fea09714c30bb0e9b926edd90a6f_screen.jpg?ts=1642634555"
//     />
//   </Box>
// ));

const Contained = ({ numba }) => {
  /////////////////////////////////////// redux stuff
  const section2part = useSelector((state) => state.section2.part);
  const dispatchPart = useDispatch();
  /////////////////////////////////////// end redux stuff
  // const arr = [3, 2, 1];
  const container = useRef(null);
  const resumeRefs = useRef([]);
  /////////////////////////////////////// Cursor mutations

  //if user is hovering an icon, cursor locks at it
  const [hoveringResume, setHoveringResume] = useState(null);
  const [index, setIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [[rotateX, rotateY, scaleX, scaleY], setMovementAnimation] = useState([
    0, 0, 1, 1,
  ]);

  const xPos = useMotionValue(0);
  const yPos = useMotionValue(0);
  const xSpring = useSpring(xPos, { damping: 25, stiffness: 700 });
  const ySpring = useSpring(yPos, { damping: 25, stiffness: 700 });
  xPos.set(mousePosition.x);
  yPos.set(mousePosition.y);

  const onMouseMove = (e) => {
    if (hoveringResume) {
      setMovementAnimation([0, 0, 1, 1]);
      hoverResume(resumeRefs.current[index] || null, "r1");
      // hoverIcon()
      return;
    }
    const { left, top } = container.current.getBoundingClientRect();
    const newX = e.clientX - left;
    const newY = e.clientY - top;

    setMousePosition({ x: newX, y: newY });
  };
  const hoverResume = (resumeRef, cursorStyle) => {
    if (!resumeRef) {
      setHoveringResume(null);
      return;
    }
    const { left, top } = resumeRef.getBoundingClientRect();
    const { left: leftContainer, top: topContainer } =
      container.current.getBoundingClientRect();

    setHoveringResume(cursorStyle);
    setMousePosition({
      x: left - leftContainer + 24,
      y: top - topContainer + 24,
    });
  };
  /////////////////////////////////// Triggers to sections
  const trigger = useRef(null);
  const triggerInit = useRef(null);
  const isInView = useInView(trigger, {
    margin: "0px -40%",
  });
  const isInViewInit = useInView(triggerInit);
  console.log("trigger in view :", isInViewInit);
  const [filler, setFiller] = useState(false);
  useEffect(() => {
    setTimeout(() => setFiller(true), 1000);
  }, [filler]);
  useEffect(() => {
    if (isInView && filler) {
      dispatchPart(currentPart(1));
      if (section2part === 2) {
        setTimeout(() => {
          dispatchPart(sectionIndex(3));
          dispatchPart(currentPart(-1));
        }, 550);
      }
    }
  }, [isInView]);
  useEffect(() => {
    if (isInViewInit && filler) {
      if (section2part === -1) return;
      dispatchPart(currentPart(-1));
      if (section2part === 0) {
        setTimeout(() => {
          dispatchPart(sectionIndex(1));
          dispatchPart(currentPart(+1));
        }, 550);
      }
    }
    // return () => setFiller(false);
  }, [isInViewInit]);
  ////////////////////////////////////// Horizontal scroll logic
  ///////Affect the section width to height and translate the elem on X axis
  ///////proportional to the scrolling progress which is obtained by scrollYProgress
  const [viewportW, setViewportW] = useState(0);
  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghost.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const x = useSpring(useMotionValue(0), {
    damping: 15,
    mass: 5,
    stiffness: 55,
  });

  const ghost = useRef(null);
  const scrollRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const { scrollYProgress } = useScroll();
  //////////////////////////////////////////////////progress bar
  const tgang = useTransform(scrollYProgress, [0, 1], [0, 1.1]);
  const scaleProgress = useSpring(tgang, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  //////////////////////////////////////////////////progress bar
  //   console.log("scroll y :", scrollYProgress.get());
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollWidth + viewportW]
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 35 };
  const spring = useSpring(transform, physics);
  useEffect(() => {
    container && setScrollWidth(container.current.scrollWidth);
    // window.scrollTo({
    //   top: "100",
    //   behavior: "instant",
    // });
  }, [container, scrollWidth]);
  useEffect(() => {
    window.scrollTo({
      top: "100",
      behavior: "instant",
    });
  }, [isInViewInit]);
  /////////////////////////////////
  return (
    <>
      <Box
        component={motion.div}
        ref={container}
        variants={cont}
        initial="init"
        animate="show"
        exit="leave"
        className={styles.custom_cursor}
        onMouseMove={onMouseMove}
        onMouseLeave={() => {
          setMovementAnimation([0, 0, 0, 0]);
        }}
        onMouseEnter={() => {
          setMovementAnimation([0, 0, 1, 1]);
        }}
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0rem",
          minWidth: "100vw",
          height: "100vh",
          padding: "0 2.3rem",
          x: spring,
        }}
      >
        <Trigger
          ref={triggerInit}
          variants={child}
          initial="init"
          animate="show"
          // viewport={{ root: lowerRef, once: false, amount: "all" }}
          viewport={{ root: "app", once: true, amount: "all" }}
          // style={{
          //   opacity: 0,
          //   marginRight: "5vw",
          //   background: "black",
          //   width: "3rem",
          //   height: "3rem",
          //   borderRadius: "50%",
          // }}
        />
        <Box
          component={motion.div}
          className={`${styles.cursor} ${
            hoveringResume ? styles[hoveringResume] : ""
          }`}
          style={{
            left: xSpring,
            top: ySpring,
          }}
          animate={{
            translateX: hoveringResume ? -30 : -16,
            translateY: hoveringResume ? -30 : -16,
            rotateX,
            rotateY,
            scaleX,
            scaleY,
          }}
        />
        {Array.from({ length: numba }).map((_, i) => (
          <ResumeElement
            key={i}
            ref={(el) => resumeRefs.current.push(el)}
            onMouseEnter={() => {
              setIndex(i);
              hoverResume(resumeRefs.current[i], "r1");
            }}
            onMouseLeave={() => {
              setIndex(null);
              setHoveringResume(null);
            }}
          />
        ))}
        <Trigger
          ref={trigger}
          initial={{ opacity: 0, background: "red" }}
          whileInView={{ opacity: 0, background: "yellow" }}
          viewport={{ root: "app", once: true, amount: "all" }}
        />
      </Box>
      <Box
        ref={ghost}
        style={{
          position: "absolute",
          width: "10vw",
          height: scrollWidth,
        }}
      ></Box>
      <motion.div
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          height: "10px",
          background: "red",
          transformOrigin: "0%",
          scaleX: scaleProgress,
        }}
        className="progress-bar"
        // style={{ scaleProgress }}
      />
    </>
  );
};
export default Contained;
