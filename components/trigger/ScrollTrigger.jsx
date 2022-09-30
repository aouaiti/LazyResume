import { useEffect, memo, useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { sectionIndex } from "../../Features/globalUiVars/currentSection";
import { section2Part } from "../../Features/globalUiVars/section2";
import { rotate } from "../../Features/globalUiVars/section3";

function ScrollTrigger() {
  const [multiplier, setMultiplier] = useState(0);
  const dispatch = useDispatch();
  const section2Part = useSelector((state) => state.section2.part);
  const currentSection = useSelector((state) => state.currentSection.Section);
  const section3Part = useSelector((state) => state.section3.rotation);
  const a = 1;
  const section2Mutation = () => {
    if (currentSection === 1 && multiplier === -1) return;
    if (currentSection === 3 && multiplier === 1) return;
    if (multiplier === 1) {
      if (currentSection === 2) return;
      else dispatch(sectionIndex(currentSection + multiplier));
      //   dispatch(sectionIndex(currentSection + multiplier));
    } else {
      if (currentSection === 2) return;
      else dispatch(sectionIndex(currentSection + multiplier));
      //   dispatch(sectionIndex(currentSection + multiplier));
    }
  };
  const section3Mutation = (x) => {
    if (currentSection !== 3) return;
    if (section3Part < 5 && section3Part >= 0) {
      dispatch(rotate(x));
    }
  };

  let start = null;

  useEffect(() => {
    section2Mutation();
  }, [multiplier, section2Part]);

  //   const scrollDirection = useSelector((state) => state.triggers.scroll);
  useEffect(() => {
    const main = document.querySelector("#main");
    // IE9, Chrome, Safari, Opera
    main.addEventListener("mousewheel", MouseWheelHandler, {
      passive: true,
    });
    // Firefox
    main.addEventListener("DOMMouseScroll", MouseWheelHandler, {
      passive: true,
    });

    window.addEventListener("touchstart", touchStartHandler);
    window.addEventListener("touchend", touchEndHandler);

    document.addEventListener("keydown", TypeHandler);

    return () => {
      //   clearTimeout(timer);
      window.removeEventListener("mousewheel", MouseWheelHandler);
      window.removeEventListener("DOMMouseScroll", MouseWheelHandler);
      window.removeEventListener("keydown", TypeHandler);
    };
  }, []);
  const touchStartHandler = (e) => {
    start = e.changedTouches[0];
  };
  const touchEndHandler = (e) => {
    let end = e.changedTouches[0];
    if (end.screenY - start.screenY > 0) {
      setMultiplier(-1);
      // console.log("scrolling up");
    } else if (end.screenY - start.screenY < 0) {
      setMultiplier(1);
      // console.log("scrolling down");
    }
  };

  const MouseWheelHandler = (e) => {
    // cross-browser wheel delta
    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));

    if (delta == 1) {
      //   dispatch(scrollIndex(delta));
      setMultiplier(-1);
      section3Mutation(-1);
      //   setTimeout(() => dispatch(scrollIndex(0)), 1000);
      return false;
    }
    if (delta == -1) {
      setMultiplier(1);
      section3Mutation(1);
      //   dispatch(scrollIndex(delta));
      //   setTimeout(() => dispatch(scrollIndex(0)), 1000);
      return false;
    }
    return false;
  };

  const TypeHandler = (e) => {
    if (e.key == "ArrowUp") {
      setMultiplier(-1);
      section3Mutation(-1);
      // section3Mutation(-1);
      //   dispatch(scrollIndex(1));
      //   setTimeout(() => dispatch(scrollIndex(0)), 1000);
    } else if (e.key == "ArrowDown") {
      setMultiplier(1);
      section3Mutation(1);
      // section3Mutation(1);
      //   dispatch(scrollIndex(-1));
      //   setTimeout(() => dispatch(scrollIndex(0)), 1000);
    }
  };

  return null;
}

export default ScrollTrigger;

/////////////////////////// re implement state (state to redux)
