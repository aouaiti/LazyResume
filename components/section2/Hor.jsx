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
import { selectResume } from "../../Features/globalUiVars/section2";
import { sectionIndex } from "../../Features/globalUiVars/currentSection";
import { Box } from "@mui/material";
import Trigger from "../trigger/Trigger";
import ResumeElement from "./ResumeElement";

const cont = {
  // init: {
  //   opacity: 1,
  // },
  leave: {
    // opacity: 0,
    y: 900,
  },
};
const child = {
  init: {
    y: -600,
    opacity: 0.2,
    filter: "grayscale(100%)",
  },
  show: {
    y: 0,
  },
};

const Contained = ({ numba }) => {
  /////////////////////////////////////// redux stuff
  const section2part = useSelector((state) => state.section2.part);
  const sectionNumber = useSelector((state) => state.currentSection.Section);
  const selectedResume = useSelector((state) => state.section2.selectedResume);
  const dispatchPart = useDispatch();
  /////////////////////////////////////// end redux stuff
  const container = useRef(null);
  const resumeRefs = useRef([]);
  /////////////////////////////////////// resume click handlers

  /////////////////////////////////////// Cursor mutations

  //if user is hovering an icon, cursor locks at it
  const [hoveringResume, setHoveringResume] = useState(null);
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

  const hoverResume = useCallback((resumeRef, cursorStyle) => {
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
  }, []);
  // useEffect(() => {
  //   if (!selectedResume.active) setHoveringResume(null);
  //   console.log(selectedResume.active);
  // }, [selectedResume.active]);
  /////////////////////////////////// Triggers to sections
  const trigger = useRef(null);
  const triggerInit = useRef(null);
  const isInView = useInView(trigger, {
    margin: "0px -40%",
  });
  const isInViewInit = useInView(triggerInit);
  const [filler, setFiller] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setFiller(true), 1000);
    return () => clearTimeout(timer);
  }, [filler]);
  useEffect(() => {
    if (isInView && filler) {
      dispatchPart(currentPart(1));
      if (section2part === 2) {
        setTimeout(() => {
          dispatchPart(sectionIndex(3));
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
    // damping: 30,
    restDelta: 0.001,
  });
  //////////////////////////////////////////////////progress bar
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollWidth + viewportW]
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 35 };
  const spring = useSpring(transform, physics);
  useEffect(() => {
    container && setScrollWidth(container.current.scrollWidth);
  }, [container, scrollWidth]);
  //FIXME: apply the correct effect for the following section
  useEffect(() => {
    const timer = setTimeout(
      () =>
        window.scrollTo({
          top: "100",
          // behavior: "instant",
        }),
      500
    );
    return () => clearTimeout(timer);
  }, []);
  /////////////////////////////////
  return (
    <>
      <Box
        id="#customBG"
        component={motion.div}
        ref={container}
        variants={cont}
        initial="init"
        animate="show"
        exit="leave"
        className={styles.custom_cursor}
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
          // x: transform,
        }}
      >
        <Trigger
          ref={triggerInit}
          variants={child}
          initial="init"
          animate="show"
          viewport={{ root: "app", once: true, amount: "all" }}
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
          }}
        />
        {Array.from({ length: numba }).map((_, i) => (
          <ResumeElement
            key={i}
            ref={(el) => {
              resumeRefs.current.push(el);
            }}
            onClick={() => {
              dispatchPart(
                selectResume({
                  active: true,
                  index: i,
                  bodyWidth: window.document
                    .querySelector("body")
                    .getBoundingClientRect().width,
                  resumeWidth: 240,
                  resumeLeftPosition:
                    resumeRefs.current[i].getBoundingClientRect().left,
                  close: undefined,
                })
              );
            }}
            index={i}
            onMouseEnter={() => {
              hoverResume(resumeRefs.current[i], "r1");
            }}
            onMouseLeave={() => {
              setHoveringResume(null);
            }}
            // style={{ position: "absolute", top: "10%" }}
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
        id="ghost"
        ref={ghost}
        style={{
          position: "absolute",
          width: "10vw",
          // background: "red",
          height: scrollWidth,
        }}
      ></Box>
      <motion.div
        style={{
          position: "fixed",
          top: "0",
          bottom: "0",
          left: "0",
          width: "10px",
          background: "red",
          transformOrigin: "50%",
          scaleY: scaleProgress,
          zIndex: "99",
        }}
        className="progress-bar"
      />
    </>
  );
};
export default memo(Contained);
