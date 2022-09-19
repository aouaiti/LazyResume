import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import {
  useCallback,
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  forwardRef,
} from "react";
import ResizeObserver from "resize-observer-polyfill";

import styles from "./hor.module.scss";

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

const Elem = forwardRef((props, ref) => (
  <motion.div
    ref={ref}
    {...props}
    variants={child}
    initial="init"
    animate="show"
    // exit="leave"
    whileInView={{
      // y: 100,
      opacity: 1,
      filter: "grayscale(0%)",
      // background: "rgb(10,100,10)"
    }}
    // transition={{ type: "spring", damping: 15, mass: 0.27, stiffness: 55 }}
    viewport={{ once: false, amount: "all" }}
    style={{ minWidth: "15rem", height: "20rem", paddingRight: "3rem" }}
  >
    <img
      style={{ width: "15rem" }}
      alt="test"
      src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/resume-template-design-4782fea09714c30bb0e9b926edd90a6f_screen.jpg?ts=1642634555"
    />
  </motion.div>
));

const Contained = ({ lowerRef, numba, setDisplayUI, displayUI }) => {
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
  const [filler, setFiller] = useState(false);
  useLayoutEffect(() => {
    setTimeout(() => setFiller(true), 1000);
    // setFiller(false);
  }, [filler]);
  useLayoutEffect(() => {
    // console.log("Element is in view: ", isInView);
    if (isInView && filler) setDisplayUI(displayUI + 1);
  }, [isInView]);
  useLayoutEffect(() => {
    // console.log("Element is in view: ", isInViewInit);
    if (isInViewInit && filler) setDisplayUI(displayUI - 1);
    // console.log(filler);
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

  useLayoutEffect(() => {
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
  //   console.log("scroll y :", scrollYProgress.get());
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollWidth + viewportW]
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 35 };
  const spring = useSpring(transform, physics);
  useLayoutEffect(() => {
    container && setScrollWidth(container.current.scrollWidth);
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [container, scrollWidth]);
  /////////////////////////////////
  return (
    <>
      <motion.div
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
        <motion.p
          ref={triggerInit}
          variants={child}
          initial="init"
          animate="show"
          // viewport={{ root: lowerRef, once: false, amount: "all" }}
          viewport={{ root: "app", once: false, amount: "all" }}
          style={{
            opacity: 0,
            marginRight: "5vw",
            background: "black",
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
          }}
        />
        <motion.div
          className={`${styles.cursor} ${
            hoveringResume ? styles[hoveringResume] : ""
          }`}
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
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
          <Elem
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
        <motion.p
          ref={trigger}
          initial={{ opacity: 0, background: "red" }}
          whileInView={{ opacity: 0, background: "yellow" }}
          // viewport={{ root: lowerRef, once: false, amount: "all" }}
          viewport={{ root: "app", once: false, amount: "all" }}
          style={{
            marginLeft: "20vw",
            background: "black",
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
          }}
        />
      </motion.div>
      <div
        ref={ghost}
        style={{
          position: "absolute",
          width: "10vw",
          height: scrollWidth,
        }}
      ></div>
    </>
  );
};
export default Contained;
